import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Motion } from "../components/Motion";
import Button from "../components/Button";
import { P } from "../components/typographypara";
import { ChevronRight } from "lucide-react";
import { IoLogoCodepen, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

const EJim = () => {
  return (
    <main className="relative overflow-auto">
      <div className="absolute top-1/2 left-40  transform -translate-y-1/2  grid grid-rows-3 gap-1">
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

      <MaxWidthWrapper className="relative px-6 md:px-0  py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-8 place-items-center space-y-6">
          <div className="flex flex-col space-y-6 sm:space-y-6 lg:items-center text-left lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <Motion direction="left" className="w-full">
              <h1 className="text-left font-normal leading-tight text-teal-950  text-4xl sm:text-5xl lg:text-6xl">
                Hi, I'm Jim
              </h1>
            </Motion>
            <Motion direction="left" className="w-full">
              <p className="text-left font-semibold leading-tight text-teal-650  text-lg lg:text-xl -my-2">
                WordPress Expert
              </p>
            </Motion>
            <Motion direction="left">
              <p className=" flex text-gray-500  tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
                Sunt et sint sunt est dolore enim culpa Lorem in et ad. Labore
                labore enim ipsum culpa ad. Qui sint ea irure velit elit eiusmod
                dolor. Sunt Lorem incididunt ullamco sit aute anim enim sint
                consequat.
              </p>
            </Motion>{" "}
            <div className="flex flex-row items-center justify-start gap-4 w-full">
              <Motion direction="left">
                <Button
                  bg
                  href="/get-started"
                  className={
                    "bg-[#6f5fdc]  transition-all hover:bg-[#7b69f1] rounded-md    px-10 py-4 flex text-wrap"
                  }
                >
                  Contact me
                  <ChevronRight />
                </Button>
              </Motion>
              <Motion direction="left"></Motion>
            </div>{" "}
          </div>
          <div className="flex items-center justify-center aspect-square lg:h-[35rem] relative">
            {" "}
            <Motion direction="right">
              <div className="w-full lg:w-[35rem] h-[35rem] mx-auto  rounded-3xl overflow-clip  z-30">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#6F5FDC"
                    d="M62.1,4.5C62.1,33.2,31,66.4,-0.7,66.4C-32.5,66.4,-65.1,33.2,-65.1,4.5C-65.1,-24.2,-32.5,-48.4,-0.7,-48.4C31,-48.4,62.1,-24.2,62.1,4.5Z"
                    transform="translate(100 100)"
                  />
                </svg>

                {/* <img
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="buildind plan image"
                width={300}
                className="w-full h-full object-cover z-30"
              /> */}
              </div>
            </Motion>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default EJim;
