import { ChevronRight, Mouse } from "lucide-react";
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoLogoCodepen, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";

const EJim = () => {
  return (
    <main className="relative overflow-auto">
      <div className="sm:absolute sm:top-1/2 sm:left-28 lg:top-1/2 lg:left-40  sm:transform sm:-translate-y-1/2  sm:grid sm:grid-rows-3 gap-1 flex items-center justify-start mt-5 px-3">
        <span className="p-2 rounded-full">
          <IoLogoCodepen className="text-[#6f5fdc] size-6 " />
        </span>
        <span className="p-2 rounded-full">
          <IoLogoLinkedin className="text-[#6f5fdc] size-6" />
        </span>
        <span className="p-2 rounded-full ">
          <IoLogoWhatsapp className="text-[#6f5fdc] size-6 " />
        </span>
      </div>

      <MaxWidthWrapper className="relative px-4 md:px-6  py-4 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 place-items-center lg:px-28">
          <div className="flex flex-col space-y-6 text-left max-w-2xl mx-auto lg:text-left ">
            <Motion direction="left" className="w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-teal-950">
                Hi, I'm Jim
              </h1>
            </Motion>
            <Motion direction="left" className="w-full">
              <p className="text-lg md:text-xl font-semibold leading-tight text-teal-650">
                WordPress Expert
              </p>
            </Motion>
            <Motion direction="left">
              <p className="text-gray-500 tracking-tight max-w-xs md:max-w-md lg:max-w-xl mx-auto">
                Sunt et sint sunt est dolore enim culpa Lorem in et ad. Labore
                labore enim ipsum culpa ad. Qui sint ea irure velit elit eiusmod
                dolor. Sunt Lorem incididunt ullamco sit aute anim enim sint
                consequat.
              </p>
            </Motion>
            <div className="flex  items-center justify-start gap-4 lg:w-full">
              <Motion direction="left">
                <Button
                  bg
                  href="/get-started"
                  className="bg-[#6f5fdc] transition-all hover:bg-[#7b69f1] rounded-md px-8 py-3 flex items-center gap-2"
                >
                  Contact me
                  <ChevronRight />
                </Button>
              </Motion>
            </div>
            <div className="lg:absolute lg:bottom-20  flex items-center  justify-start gap-2 ">
              <Mouse className="size-6" />
              Scroll down <IoIosArrowRoundDown className="size-5" />
            </div>
          </div>
          <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative">
            <Motion direction="right">
              <div className="w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] mx-auto rounded-3xl overflow-clip z-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#6F5FDC"
                    d="M62.1,4.5C62.1,33.2,31,66.4,-0.7,66.4C-32.5,66.4,-65.1,33.2,-65.1,4.5C-65.1,-24.2,-32.5,-48.4,-0.7,-48.4C31,-48.4,62.1,-24.2,62.1,4.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </Motion>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default EJim;
