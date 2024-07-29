import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { H4 } from "../components/typographyh4";
import { P } from "../components/typographypara";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Motion } from "../components/Motion";
import { H3 } from "../components/typographyh3";
import Button from "../components/Button";
import { H2 } from "../components/typographyh2";
import { Check, CheckCircle } from "lucide-react";

const EInvestBusiness = () => {
  return (
    <MaxWidthWrapper className="py-10 overflow-auto">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
        <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative">
          <Motion direction="left">
            <div className="w-full lg:w-[35rem] h-[35rem] mx-auto  rounded-3xl overflow-clip  z-30">
              <img
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="buildind plan image"
                width={300}
                className="w-full h-full object-cover z-30"
              />
            </div>
          </Motion>
        </div>

        <div className="px-4 lg:py-4">
          <Motion direction="right">
            <div className="inline-flex  items-center justify-center py-1 transition ease-out text-[#8f81c8] hover:duration-300  mb-3 uppercase tracking-wide ">
              <span className="text-sm items-center justify-center">
                WHAT WE DO
              </span>
            </div>
          </Motion>
          <Motion direction="right">
            <H3 className="text-4xl sm:text-5xl font-bold tracking-tight  mb-4">
              Always ready to invest in any business
            </H3>
          </Motion>
          <Motion direction="right">
            <P className=" text-[#27272a]/80 md:text-xl text-left">
              Sint nulla ex cupidatat duis irure cillum labore. Lorem nostrud
              mollit amet do esse dolor.
            </P>
          </Motion>{" "}
          <Motion
            direction="right"
            className="my-4 flex justify-start items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
              <div className="flex flex-col items-start justify-start">
                <H2 className="text-base md:text-lg lg:text-xl border-none font-semibold mb-4">
                  How we help your business
                </H2>
                <div className="flex flex-col justify-start items-start space-y-2">
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Stage-focused investing
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Sector specialization
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Active involvement
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Portfolio diversification
                    </P>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosCheckmarkCircleOutline className="text-[#918ad8] text-2xl" />
                    <P className="text-gray-500 tracking-wide leading-6">
                      Achieving a return
                    </P>
                  </div>
                </div>
              </div>
            </div>
          </Motion>{" "}
          <div className="flex flex-row items-center justify-start gap-0 w-full mt-4">
            <Motion direction="left">
              <Button
                variant={"outline"}
                href="/get-started"
                className={
                  "  transition-all backdrop-blur-xl bg-zinc-800 border-[1px] border-zinc-300/25 rounded-xl    px-8 py-4 flex text-wrap font-semibold text-lg text-zinc-300"
                }
              >
                Read More
              </Button>
            </Motion>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EInvestBusiness;
