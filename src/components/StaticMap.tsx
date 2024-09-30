export interface StaticMapProps {
  latitude: string;
  longitude: string;
}

const StaticMap = (props: StaticMapProps) => {
  const { latitude, longitude } = props;

  return (
    <>
      <img
        loading="lazy"
        alt="static map"
        className="w-full"
        width="300"
        height="200"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${latitude}` +
          "," +
          `${longitude}` +
          `&key=${YEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        }
      ></img>
    </>
  );
};

export default StaticMap;
