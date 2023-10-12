import {
  AppliedFilters,
  DirectAnswer,
  Facets,
  Pagination,
  ResultsCount,
  SearchBar,
  SectionProps,
  StandardCard,
  UniversalResults,
  VerticalResults,
} from "@yext/search-ui-react";
import {
  Matcher,
  useSearchActions,
  useSearchState,
} from "@yext/search-headless-react";
import Section from "../atoms/Section";
import { useEffect, useState } from "react";
import ListSection from "../search/ListSection";
import NoResults from "../search/NoResults";
import SearchLoading from "../search/SearchLoading";
import Icon from "../atoms/Icon";
import ProfessionalsCard from "./professionals/ProfessionalsCard";
import LocationCard from "./locations/LocationCard";
import FaqCard from "./faq/FaqCard";
import ServicesCard from "./services/ServicesCard";
import ProductsCard from "./products/ProductsCard";
import NavBar from "./NavBar";
import Faq from "../../types/faqs";
import Location from "../../types/locations";
import FinancialProfessional from "../../types/financial_professionals";
import Ce_service from "../../types/services";
import Ce_financialProduct from "../../types/financial_products";
import GridSection from "./GridSection";

export default function UniversalSearch() {
  const [resultsCountMap, setResultsCountMap] = useState<
    Record<string, number>
  >({});
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
              displayName: "Current Location",
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
      ]);
      searchActions.executeUniversalQuery();
    }
  }, []);

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
      ]);
      searchActions.executeUniversalQuery();
    } else {
      searchActions.setVertical(id);
      searchActions.executeVerticalQuery();
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
      default:
        return StandardCard;
    }
  };

  const verticalResultsClassnames = () => {
    switch (vertical) {
      case "services":
        return "grid grid-cols-3 gap-4 ";
      case "financial_products":
        return "grid grid-cols-3 gap-4 ";
      default:
        return "flex flex-col gap-y-4";
    }
  };

  const CardComponent = determineCardComponent();

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
          <button className="bg-white flex justify-center items-center p-4 my-auto rounded-full ">
            <Icon name="search" color="text-green" height={"4"} width="4" />
            <p className="text-white text-sm ml-2 lg:hidden">Search</p>
          </button>
        </div>
        <div className="text-white mb-2 italic">
          Search for bank locations, advisors, services, or ask a question.
        </div>
      </div>
      {/* {
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
                resultsCount: resultsCountMap["faqs"] ?? 0,
              },
              {
                label: "Financial Products",
                id: "financial_products",
                resultsCount: resultsCountMap["financial_products"] ?? 0,
              },
            ]}
            selectedId={vertical ?? "all"}
          />
        </div>
      } */}
      {!searchLoading ? (
        <>
          <Section>
            {isUniveralSearch ? (
              universalResults && universalResults.length > 0 ? (
                <>
                  <ResultsCount
                    customCssClasses={{
                      resultsCountContainer: "font-sans-bold text-lg mb-0 p-0",
                    }}
                  />
                  <DirectAnswer />
                  <UniversalResults
                    customCssClasses={{
                      universalResultsContainer: "flex flex-col gap-y-8",
                    }}
                    verticalConfigMap={{
                      financial_professionals: {
                        CardComponent: ProfessionalsCard,
                        SectionComponent: ({
                          results,
                          verticalKey,
                        }: SectionProps<FinancialProfessional>) => (
                          <ListSection
                            results={results}
                            CardComponent={ProfessionalsCard}
                            verticalKey={verticalKey}
                            header={
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Financial Professionals
                              </h2>
                            }
                          />
                        ),
                      },
                      locations: {
                        CardComponent: LocationCard,
                        SectionComponent: ({
                          results,
                          verticalKey,
                        }: SectionProps<Location>) => (
                          <ListSection
                            results={results}
                            CardComponent={LocationCard}
                            verticalKey={verticalKey}
                            header={
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Locations
                              </h2>
                            }
                          />
                        ),
                      },
                      faqs: {
                        CardComponent: FaqCard,
                        SectionComponent: ({
                          results,
                          verticalKey,
                        }: SectionProps<Faq>) => (
                          <ListSection
                            results={results}
                            CardComponent={FaqCard}
                            verticalKey={verticalKey}
                            header={
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                FAQs
                              </h2>
                            }
                          />
                        ),
                      },
                      services: {
                        label: "Services",
                        SectionComponent: ({
                          results,
                          verticalKey,
                        }: SectionProps<Ce_service>) => (
                          <GridSection
                            results={results}
                            CardComponent={ServicesCard}
                            verticalKey={verticalKey}
                            header={
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Services
                              </h2>
                            }
                          />
                        ),
                        CardComponent: ServicesCard,
                      },
                      financial_products: {
                        label: "Financial Products",
                        SectionComponent: ({
                          results,
                          verticalKey,
                        }: SectionProps<Ce_financialProduct>) => (
                          <GridSection
                            results={results}
                            CardComponent={ProductsCard}
                            verticalKey={verticalKey}
                            header={
                              <h2 className="text-2xl font-semibold text-blue-950 pb-4">
                                Financial Products
                              </h2>
                            }
                          />
                        ),
                        CardComponent: ProductsCard,
                      },
                    }}
                  />
                </>
              ) : (
                <NoResults />
              )
            ) : verticalResultCount && verticalResultCount > 0 ? (
              <>
                <div className="flex mt-4">
                  {facetsPresent && facetsPresent.length >= 1 && (
                    <div className="w-[15rem] mr-5 ">
                      <Facets />
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
                      <AppliedFilters />
                    </div>
                    <VerticalResults
                      customCssClasses={{
                        verticalResultsContainer: verticalResultsClassnames(),
                      }}
                      CardComponent={CardComponent}
                    />
                  </div>
                </div>
              </>
            ) : (
              <NoResults />
            )}
          </Section>
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
