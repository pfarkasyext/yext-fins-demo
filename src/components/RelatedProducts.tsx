import * as React from "react";

export interface RelatedProductsProps {
  name: string;
  slug: string;
}

export default function RelatedProducts({
  products,
  name,
}: {
  products: RelatedProductsProps[];
  name: string;
}) {
  return (
    <>
      <div className="w-full md:w-[1440px] h-full px-6 md:px-[150px] py-16 bg-gray-50 flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch text-center text-blue-950 text-[34px] font-bold font-['Lato'] leading-10">
          Our {name} Products
        </div>
        <div className="self-stretch flex-col justify-start items-center gap-[30px] flex">
          <div className="self-stretch justify-start items-stretch gap-[30px] grid grid-cols-1 md:grid-cols-3">
            {products.map((item: RelatedProductsProps, index: number) => {
              const { name, slug } = item;
              return (
                <div
                  key={index}
                  className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex gap-2 items-center flex-col p-6"
                >
                  {/* <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex flex-col"> */}
                  <div className="text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px] align-center">
                    {item.name}
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex"></div>
                  <a
                    href={`/${item.slug || "#"}`}
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#E1E5E8]focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-blue-950 border border-blue-950"
                  >
                    Learn More
                  </a>
                </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
