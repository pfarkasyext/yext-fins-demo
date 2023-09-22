import * as React from "react";
import { Address, ComplexImageType, ImageType } from "@yext/pages/components";
import { formatPhoneNumber } from "react-phone-number-input";
import List from "./List";
import { Image } from "@yext/pages/components";

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
      <div className="w-[1440px] h-[922px] px-[150px] py-16 bg-gray-50 flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch text-center text-blue-950 text-[34px] font-bold font-['Lato'] leading-10">
          Our {city} Team
        </div>
        <div className="self-stretch h-[722px] flex-col justify-start items-center gap-[30px] flex">
          <div className="self-stretch justify-start items-start gap-[30px] inline-flex">
            <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex">
                <div className="w-20 h-20 relative">
                  <img
                    className="w-20 h-20 left-0 top-0 absolute rounded-[100px]"
                    src={team[0].headshot?.url}
                  />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                    {team[0].name}
                  </div>
                  <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                    {team[0].fins_jobTitle}
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-stone-300"></div>
              <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                    {team[0].mainPhone}
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                    {team[0].emails}
                  </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal">
                    Visit Profile
                  </div>
                  <div className="w-3 h-3 relative"></div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex">
                <img
                  className="w-20 rounded-[100px]"
                  src="https://via.placeholder.com/80x80"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                    First Last
                  </div>
                  <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                    Associate Agent
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-stone-300"></div>
              <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                    (339) 291-5039
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                    angelamata@capital.com
                  </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal">
                    Visit Profile
                  </div>
                  <div className="w-3 h-3 relative"></div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex">
                <img
                  className="w-20 rounded-[100px]"
                  src="https://via.placeholder.com/80x80"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                    First Last
                  </div>
                  <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                    Associate Agent
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-stone-300"></div>
              <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                    (339) 291-5039
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                    angelamata@capital.com
                  </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal">
                    Visit Profile
                  </div>
                  <div className="w-3 h-3 relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-[30px] inline-flex">
          <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex">
                <img
                  className="w-20 rounded-[100px]"
                  src="https://via.placeholder.com/80x80"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                    First Last
                  </div>
                  <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                    Associate Agent
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-stone-300"></div>
              <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                    (339) 291-5039
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                    angelamata@capital.com
                  </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal">
                    Visit Profile
                  </div>
                  <div className="w-3 h-3 relative"></div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex">
                <img
                  className="w-20 rounded-[100px]"
                  src="https://via.placeholder.com/80x80"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                    First Last
                  </div>
                  <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                    Associate Agent
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-stone-300"></div>
              <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                    (339) 291-5039
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                    angelamata@capital.com
                  </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal">
                    Visit Profile
                  </div>
                  <div className="w-3 h-3 relative"></div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 bg-white rounded-lg border border-zinc-200 flex-col justify-start items-start inline-flex">
              <div className="self-stretch p-8 bg-white justify-start items-center gap-6 inline-flex">
                <img
                  className="w-20 rounded-[100px]"
                  src="https://via.placeholder.com/80x80"
                />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-blue-950 text-2xl font-bold font-['Lato'] leading-[30px]">
                    First Last
                  </div>
                  <div className="self-stretch text-blue-950 text-base font-normal font-['Lato'] leading-normal">
                    Associate Agent
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0px] border border-stone-300"></div>
              <div className="self-stretch h-[168px] p-8 bg-white flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] leading-normal">
                    (339) 291-5039
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-4 h-4 justify-center items-center flex">
                    <div className="w-5 h-5 text-center text-zinc-800 text-base font-light font-['Font Awesome 6 Pro']">
                      
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Lato'] underline leading-normal">
                    angelamata@capital.com
                  </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="text-blue-950 text-base font-bold font-['Lato'] underline leading-normal">
                    Visit Profile
                  </div>
                  <div className="w-3 h-3 relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[114px] rounded-md border border-blue-950 flex-col justify-center items-center flex">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug">
                Load More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}