import { Image } from "@yext/pages-components";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Image as ImageType } from "../types/financial_professionals";

interface TeamProps {
  name: string;
  mainPhone: string;
  emails: string;
  fins_jobTitle: string;
  headshot?: ImageType;
  slug: string;
}

export default function Team({
  team,
  city,
}: {
  team: TeamProps[];
  city: string;
}) {
  return (
    <>
      <div className="w-full   h-full md:h-[922px] px-6 md:px-[150px] py-16 bg-gray-50 flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch text-center text-blue-950 text-[34px] font-bold font-['Lato'] leading-10">
          Our {city} Team
        </div>
        <div className="self-stretch md:h-[722px] flex-col justify-start items-center gap-[30px] flex">
          <div className="self-stretch justify-start items-start gap-[30px] grid grid-cols-1 md:grid-cols-3">
            {team.map((item: TeamProps, index: number) => {
              const { name, mainPhone, emails, fins_jobTitle, headshot, slug } =
                item;
              return (
                <div
                  key={index}
                  className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex"
                >
                  <a
                    className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex"
                    href={`/${slug}`}
                  >
                    {headshot && (
                      <div className="w-20 h-20 relative">
                        <Image
                          image={headshot}
                          className="w-20 h-20 left-0 top-0 absolute rounded-[100px]"
                        />
                      </div>
                    )}
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                        {name}
                      </div>
                      <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                        {fins_jobTitle}
                      </div>
                    </div>
                  </a>
                  <div className="self-stretch h-[0px] border border-stone-300"></div>
                  <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                          <PhoneIcon />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                        {mainPhone}
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="w-4 h-4 justify-center items-center flex">
                        <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                          <EnvelopeIcon />
                        </div>
                      </div>
                      <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                        {emails}
                      </div>
                    </div>
                    <div className="justify-center items-center gap-2 inline-flex">
                      <a
                        className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal"
                        href={`/${slug}`}
                      >
                        Visit Profile
                      </a>
                      <div className="w-3 h-3 relative"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" rounded-md border border-blue-950 flex-col justify-center items-center flex w-fit">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <a
                href={`/search.html?vertical=financial_professionals&query=Financial professionals near ${city}`}
                className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug "
              >
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
