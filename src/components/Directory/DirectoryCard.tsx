import { HoursStatus } from "@yext/pages-components";
import { Link, Address } from "@yext/pages-components";
import type { LiveAPIProfile, LocationProfile } from "../types/entities";
import { CardComponent } from "../models/cardComponent";

const DirectoryCard: CardComponent<
  LocationProfile | LiveAPIProfile<LocationProfile>
> = function DirectoryCard(props): JSX.Element {
  const { profile } = props;

  return (
    <div className="Directorycard bg-white px-6 py-8 border h-full">
      <h3 className="mb-4 text-lg font-medium">
        {profile.slug ? (
          <Link
            href={`./${profile.slug}`}
            className="Link Link--primary hover:underline"
          >
            {profile.name}
          </Link>
        ) : (
          profile.name
        )}
      </h3>

      {profile.hours && (
        <div className="mb-4 text-sm">
          <HoursStatus hours={profile.hours} />
        </div>
      )}

      {profile.address && (
        <div className="text-sm">
          <Address address={profile.address} lines={[["line1"]]} />
        </div>
      )}
    </div>
  );
};

export default DirectoryCard;
