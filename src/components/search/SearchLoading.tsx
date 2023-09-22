import Icon from "../atoms/Icon";

export default function SearchLoading() {
  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="animate-spin">
          <Icon
            name="spinner"
            classname="text-green-700"
            height="20"
            width="20"
          />
        </div>
      </div>
    </div>
  );
}
