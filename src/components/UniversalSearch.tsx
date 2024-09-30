import {
  AppliedFilters,
  DirectAnswer,
  Facets,
  MapboxMap,
  OnDragHandler,
  Pagination,
  ResultsCount,
  SearchBar,
  SectionProps,
  StandardCard,
  StandardFacet,
  UniversalResults,
  VerticalResults,
} from "@yext/search-ui-react";
import {
  Matcher,
  Result,
  SelectableStaticFilter,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";
import { useCallback, useEffect, useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import MapPin from "./MapPin"; 
import { LngLat, LngLatBounds } from "mapbox-gl";
 import FaqCard from "./Cards/FaqCard";
import LocationCard from "./Cards/LocationCard";
import ProfessionalsCard from "./Cards/ProfessionalsCard";
import ServicesCard from "./Cards/ServicesCard";
 import NoResults from "./NoResults";
import SearchLoading from "./SearchLoading";
import NavBar from "./NavBar";
 import ProductsCard from "./Cards/ProductsCard";
import DocumentsCard from "./Cards/DocumentsCard";
import Icon from "./Icon";
export default function UniversalSearch() {
  const [showSearchAreaButton, setShowSearchAreaButton] = useState(false);
  const [mapCenter, setMapCenter] = useState<LngLat | undefined>();
  const [mapBounds, setMapBounds] = useState<LngLatBounds | undefined>();
  const [resultsCountMap, setResultsCountMap] = useState<Record<string, number>>({});
  const [isLoc, setIsLoc] = useState<boolean>(false);
  const searchActions = useSearchActions();
  const isUniveralSearch = useSearchState(
    (state) => state.meta.searchType === "universal"
  );
  const vertical = useSearchState((state) => state.vertical.verticalKey);
  const universalResults = useSearchState((state) => state.universal.verticals);
  const verticalResultCount = useSearchState(
    (state) => state.vertical.resultsCount
  );
  const facetsPresent = useSearchState((state) => state.filters.facets);

  const searchLoading = useSearchState((state) => state.searchStatus.isLoading);
  const filters = useSearchState((state) => state.filters.static);

  const da = useSearchState((state) => state.directAnswer.result);

  useEffect(() => {
    const verticalKey = new URLSearchParams(window.location.search).get(
      "vertical"
    );

    const staticFilter = new URLSearchParams(window.location.search).get(
      "staticfilter"
    );

    const query = new URLSearchParams(window.location.search).get("query");
    if (query) {
      searchActions.setQuery(query);
    }
    if (verticalKey) {
      searchActions.setVertical(verticalKey);
      {
        staticFilter &&
          searchActions.setStaticFilters([
            {
              selected: true,
              displayName: staticFilter,
              filter: {
                kind: "fieldValue",
                fieldId: "c_primaryService.name",
                value: staticFilter,
                matcher: Matcher.Equals,
              },
            },
          ]);
      }
      searchActions.executeVerticalQuery().then(() => {
        const queryParams = new URLSearchParams(window.location.search);
        if (staticFilter) {
          queryParams.delete("staticfilter");
        }
        history.pushState(null, "", "?" + queryParams.toString());
      });
    } else {
      searchActions.setUniversal();
      searchActions.setRestrictVerticals([
        "financial_professionals",
        "locations",
        "faqs",
        "services",
        "financial_products",
        "documents",
      ]);
      searchActions.executeUniversalQuery();
    }
  }, []);
  useEffect(() => {
    ["financial_professionals", "locations"].includes(vertical!)
      ? setIsLoc(true)
      : setIsLoc(false);
  }, [vertical]);

  useEffect(() => {
    if (isUniveralSearch) {
      const resultsCountMap: Record<string, number> = {};
      universalResults?.forEach((vertical) => {
        resultsCountMap[vertical.verticalKey] = vertical.resultsCount;
      });
      setResultsCountMap(resultsCountMap);
    }
  }, [universalResults]);

  const handleNavBarSelect = (id: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (id && id !== "all") {
      queryParams.set("vertical", id);
    } else {
      queryParams.delete("vertical");
    }
    history.pushState(null, "", "?" + queryParams.toString());

    if (id === "all") {
      searchActions.setUniversal();
      searchActions.setRestrictVerticals([
        "financial_professionals",
        "locations",
        "faqs",
        "services",
        "financial_products",
        "documents",
      ]);
      searchActions.executeUniversalQuery();
    } else {
      searchActions.setVertical(id);
      searchActions.executeVerticalQuery();
    }
  };
  const handleSearchAreaClick = () => {
    if (mapCenter && mapBounds) {
      const locationFilter: SelectableStaticFilter = {
        selected: true,
        displayName: "Current map area",
        filter: {
          kind: "fieldValue",
          fieldId: "builtin.location",
          value: {
            lat: mapCenter.lat,
            lng: mapCenter.lng,
            radius: mapBounds.getNorthEast().distanceTo(mapCenter),
          },
          matcher: Matcher.Near,
        },
      };
      searchActions.setVertical(vertical!);
      searchActions.setStaticFilters([locationFilter]);
      searchActions.executeVerticalQuery();
      setShowSearchAreaButton(false);
    }
  };
  const handleSearchClick = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    const queryParams = new URLSearchParams(window.location.search);

    if (query) {
      queryParams.set("query", query);
    } else {
      queryParams.delete("query");
    }
    history.pushState(null, "", "?" + queryParams.toString());

    searchActions.setQuery(searchEventData.query || "");
    handleNavBarSelect(searchEventData.verticalKey || "all");
  };

  const determineCardComponent = () => {
    switch (vertical) {
      case "financial_professionals":
        return ProfessionalsCard;
      case "locations":
        return LocationCard;
      case "faqs":
        return FaqCard;
      case "services":
        return ServicesCard;
      case "financial_products":
        return ProductsCard;
      case "documents":
        return DocumentsCard;
      default:
        return StandardCard;
    }
  };

  const verticalResultsClassnames = () => {
    switch (vertical) {
      case "services":
        return "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ";
      case "financial_products":
        return "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";
      case "documents":
        return "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "flex flex-col gap-y-4";
    }
  };

  const CardComponent = determineCardComponent();

  const handleDrag: OnDragHandler = (center: LngLat, bounds: LngLatBounds) => {
    setMapCenter(center);
    setMapBounds(bounds);
    setShowSearchAreaButton(true);
  };
  return (
    <div className="min-h-[calc(100vh-184px)]">
      <div className="w-full bg-blue-950 px-20 py-8">
        <div className="text-white mb-2">What can we help you find?</div>
        <div className="flex flex-1">
          <SearchBar
            customCssClasses={{
              searchBarContainer: "flex-1 mb-0 mr-6",
              searchButton: "hidden",
              inputDivider: "hidden",
              clearButton: "hidden",
              verticalDivider: "hidden",
              inputElement: "flex-1 pl-4",
              icon: "mx-2",
            }}
            onSearch={handleSearchClick}
          />
          <button className="bg-white flex justify-center items-center p-4 my-auto rounded-full">
            <Icon name="search" color="text-green" height={"4"} width="4" />
            {/* <p className="text-white text-sm ml-2 lg:hidden">Search</p> */}
          </button>
        </div>
        <div className="text-white mb-2 italic">
          Search for bank locations, advisors, services, or ask a question.
        </div>
      </div>
      <div className="w-full bg-white">
        <NavBar
          onSelect={handleNavBarSelect}
          items={[
            {
              label: "All Results",
              id: "all",
            },
            {
              label: "Financial Professionals",
              id: "financial_professionals",
              resultsCount: resultsCountMap["financial_professionals"] ?? 0,
            },
            {
              label: "Locations",
              id: "locations",
              resultsCount: resultsCountMap["locations"] ?? 0,
            },
            {
              label: "FAQs",
              id: "faqs",
              resultsCount: resultsCountMap["faqs"] ?? 0,
            },
            {
              label: "Services",
              id: "services",
              resultsCount: resultsCountMap["services"] ?? 0,
            },
            {
              label: "Financial Products",
              id: "financial_products",
              resultsCount: resultsCountMap["financial_products"] ?? 0,
            },
            {
              label: "Documents",
              id: "documents",
              resultsCount: resultsCountMap["documents"] ?? 0,
            },
          ]}
          selectedId={vertical ?? "all"}
        />
      </div>
      {!searchLoading ? (
        <>
          <section>
            <div
              className={
                "py-2 md:py-12 px-4 md:px-20 max-w-full md:max-w-[1440px] mx-auto flex flex-col gap-12"
              }
            >
              {isUniveralSearch ? (
                universalResults && universalResults.length > 0 ? (
                  <>
                    <ResultsCount
                      customCssClasses={{
                        resultsCountContainer:
                          "font-sans-bold text-lg mb-0 p-0",
                      }}
                    />
                    <DirectAnswer />

                    <UniversalResults
                      customCssClasses={{
                        universalResultsContainer: "flex flex-col",
                      }}
                      verticalConfigMap={{
                        financial_professionals: {
                          CardComponent: ProfessionalsCard,
                          SectionComponent: ({
                            results,
                            verticalKey,
                          }: SectionProps) => (
                            <>
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Financial Professionals
                              </h2>
                              <div className="mb-8">
                                {results.map((r, i) => (
                                  <ProfessionalsCard key={i} result={r} />
                                ))}
                              </div>
                            </>
                          ),
                        },
                        locations: {
                          CardComponent: LocationCard,
                          SectionComponent: ({
                            results,
                            verticalKey,
                          }: SectionProps) => (
                            <>
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Locations{" "}
                              </h2>
                              <div className="mb-8">
                                {results.map((r, i) => (
                                  <LocationCard key={i} result={r} />
                                ))}
                              </div>
                            </>
                          ),
                        },
                        faqs: {
                          CardComponent: FaqCard,
                          SectionComponent: ({
                            results,
                            verticalKey,
                          }: SectionProps) => (
                            <>
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                FAQs
                              </h2>
                              <div className="mb-8">
                              {results.map((r, i) => (
                                  <FaqCard key={i} result={r} />
                                ))}
                              </div>
                            </>
                          ),
                        },
                        services: {
                          label: "Services",
                          SectionComponent: ({
                            results,
                            verticalKey,
                          }: SectionProps) => (
                            <>
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Services
                              </h2>
                              <div className="grid grid-cols-1 gap-x-6 pb-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {results.map((r,i) => (
                                  <ServicesCard key={i} result={r} />
                                ))}
                              </div>
                            </>
                          ),
                          CardComponent: ServicesCard,
                        },
                        financial_products: {
                          label: "Financial Products",
                          SectionComponent: ({
                            results,
                            verticalKey,
                          }: SectionProps) => (
                            <>
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Financial Products
                              </h2>
                              <div className="grid grid-cols-1 gap-x-6 pb-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {results.map((r, i) => (
                                  <ProductsCard key={i} result={r} />
                                ))}
                              </div>
                            </>
                          ),
                          CardComponent: ProductsCard,
                        },
                        documents: {
                          label: "Documents",
                          SectionComponent: ({
                            results,
                            verticalKey,
                          }: SectionProps) => (
                            <>
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Documents
                              </h2>
                              <div className="grid grid-cols-1 gap-x-6 pb-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                {results.map((r, i) => (
                                  <DocumentsCard key={i} result={r} />
                                ))}
                              </div>
                            </>
                          ),
                          CardComponent: DocumentsCard,
                        },
                      }}
                    />
                  </>
                ) : (
                  <NoResults />
                )
              ) : verticalResultCount && verticalResultCount > 0 ? (
                <>
                  <div
                    className={`flex static mt-4 ${
                      isLoc ? "flex-col" : "flex-row"
                    }`}
                  >
                    {facetsPresent && facetsPresent.length >= 1 && (
                      <div
                        className={`${
                          isLoc ? `w-full  mb-6` : `w-[15rem] mr-5  mb-6`
                        }`}
                      >
                        {isLoc ? (
                          <>
                            {vertical === "locations" ? (
                              <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-between items-center gap-8">
                                <Facets
                                  customCssClasses={{
                                    facetsContainer: "p-4 border",
                                    divider: "hidden",
                                  }}
                                >
                                  <StandardFacet
                                    customCssClasses={{
                                      optionsContainer: "flex-col",
                                    }}
                                    fieldId="builtin.entityType"
                                    defaultExpanded={false}
                                  />
                                </Facets>
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-between items-center gap-2">
                                <Facets
                                  excludedFieldIds={[
                                    "languages",
                                    "yearsOfExperience",
                                  ]}
                                  customCssClasses={{
                                    divider: "hidden",
                                    facetsContainer: "border p-4 ",
                                  }}
                                >
                                  <StandardFacet
                                    customCssClasses={{
                                      titleLabel: "mr-6 !-mb-4",
                                      optionsContainer: "mt-6",
                                    }}
                                    fieldId="fins_relatedServices.name"
                                    label="Specialty"
                                    defaultExpanded={false}
                                  />
                                </Facets>
                                <Facets
                                  excludedFieldIds={[
                                    "fins_relatedServices.name",
                                    "yearsOfExperience",
                                  ]}
                                  customCssClasses={{
                                    divider: "hidden",
                                    facetsContainer: "border p-4",
                                  }}
                                >
                                  <StandardFacet
                                    fieldId="languages"
                                    defaultExpanded={false}
                                    customCssClasses={{
                                      titleLabel: "mr-6 !-mb-4",
                                      optionsContainer: "mt-6",
                                    }}
                                  />
                                </Facets>
                                <Facets
                                  excludedFieldIds={[
                                    "languages",
                                    "fins_relatedServices.name",
                                  ]}
                                  customCssClasses={{
                                    divider: "hidden",
                                    facetsContainer: "border p-4",
                                  }}
                                >
                                  <StandardFacet
                                    customCssClasses={{
                                      titleLabel: "mr-6 !-mb-4",
                                      optionsContainer: "mt-6",
                                    }}
                                    fieldId="yearsOfExperience"
                                    label="Years of Experience"
                                    defaultExpanded={false}
                                  />
                                </Facets>
                              </div>
                            )}
                          </>
                        ) : (
                          <Facets />
                        )}
                      </div>
                    )}
                    <div
                      className={`${
                        facetsPresent && facetsPresent.length >= 1
                          ? "flex-grow"
                          : "w-full"
                      }`}
                    >
                      <div className="flex flex-col items-baseline">
                        <ResultsCount />
                        <AppliedFilters
                          customCssClasses={{
                            removableFilter:
                              "bg-brand-secondary text-white capitalize",
                          }}
                        />
                      </div>
                      {isLoc ? (
                        <div className="flex gap-2">
                          <div
                            className={`${
                              vertical === "locations"
                                ? ` w-2/5 md:overflow-scroll md:h-[800px]`
                                : ` w-2/4 md:overflow-scroll md:h-[800px]`
                            }`}
                          >
                            <VerticalResults
                              customCssClasses={{
                                verticalResultsContainer:
                                  verticalResultsClassnames(),
                              }}
                              CardComponent={CardComponent}
                            />
                          </div>
                          <div
                            className={`${
                              vertical === "locations"
                                ? `relative w-3/5 md:overflow-scroll`
                                : `relative w-2/4 md:overflow-scroll`
                            }`}
                          >
                            <MapboxMap
                              mapboxOptions={{ zoom: 4 }}
                              mapboxAccessToken={
                                "pk.eyJ1Ijoic3VubnlrZWVydGhpIiwiYSI6ImNsNWh5ZGt3czAyejUzY3A3Y3pvZ2E0bTgifQ.TNHfh1HL0LwTzLxs2TOaBQ"
                              }
                              PinComponent={MapPin}
                              onDrag={handleDrag}
                            />
                            {showSearchAreaButton && (
                              <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                                <button
                                  onClick={handleSearchAreaClick}
                                  className="rounded-2xl border bg-white py-2 px-4 shadow-xl"
                                >
                                  <p>Search This Area</p>
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <VerticalResults
                          customCssClasses={{
                            verticalResultsContainer:
                              verticalResultsClassnames(),
                          }}
                          CardComponent={CardComponent}
                        />
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <NoResults />
              )}
            </div>
          </section>

          <Pagination
            customCssClasses={{
              paginationContainer: "py-8 shadow-none",
              label: "font-pt-sans-regular border-0",
              selectedLabel:
                "font-pt-sans-bold border-0 bg-blue-950 text-white",
              leftIconContainer: "border-0 px-4",
              rightIconContainer: "border-0 px-4",
            }}
          />
        </>
      ) : (
        <div>
          <SearchLoading />
        </div>
      )}
    </div>
  );
}
