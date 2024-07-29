import { Circle } from "lucide-react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  IoLogoDribbble,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { PiPresentationChart } from "react-icons/pi";
import { ChartIcon } from "./ChartIcon";
import { Motion } from "./Motion";
import OrbitingApp from "./OrbitingApp";
import { H3 } from "./typographyh3";
import { P } from "./typographypara";

const Ripple = React.memo(function Ripple({
  ripple,
  sectionOne,
  sectionTwo,
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  colors = [],
  children,
}) {
  return (
    <div className="relative flex items-center justify-center">
      {Array.from({ length: numCircles }, (_, i) => {
        const size =
          colors.length === 1 ? mainCircleSize : mainCircleSize + i * 70;
        const opacity =
          colors.length === 1 ? null : mainCircleOpacity - i * 0.0001;
        const animationDelay = `${i * 0.06}s`;
        const backgroundColor =
          colors.length === 1 ? colors[0] : colors[i % colors.length];

        return (
          <>
            <div
              key={i}
              // className animate-ripple
              className={`absolute   z-10 w-[20rem] h-[20rem] sm:w-[32rem] sm:h-[32rem] lg:w-[${size}px] lg:h-[${size}px] rounded-full shadow-xl [--i:${i}]`}
              style={{
                // width: `${size}px`,
                // height: `${size}px`,
                opacity,
                animationDelay,
                backgroundColor,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              }}
            />{" "}
          </>
        );
      })}
      {sectionOne ? (
        <>
          <Circle
            strokeWidth={0.03}
            strokeDasharray={0.3}
            className={`absolute z-30 w-[21rem] h-[21rem] sm:w-[42rem] sm:h-[42rem] rounded-full`}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
          <OrbitingApp
            className="size-[45px] lg:size-[50px]  border-none bg-transparent z-30"
            radius={280}
            mobileRadius={140}
            duration={20}
            delay={0}
            reverse
            iconDegrees={[0, 50, 175, 210, 240, 270, 315]}
          >
            <span className="p-2 z-10">
              <IoLogoInstagram className="text-white size-14  bg-gradient-to-tr from-pink-500 to-violet-500 rounded-full p-2 z-20 " />
            </span>
            <span className="p-5">
              <IoLogoTwitter className="text-white size-12 bg-[#1da1f2] rounded-full p-2" />
            </span>

            <span className="p-5">
              <IoLogoTiktok className="text-white size-10 bg-zinc-900 rounded-full p-2" />
            </span>
            <span className="p-5">
              <IoLogoYoutube className="text-white size-10 bg-[#ff0000] rounded-full p-2" />
            </span>
            <span className="p-5">
              <FaFacebookF className="text-white size-12 bg-[#1078f0] rounded-full p-3" />
            </span>
          </OrbitingApp>
          <Motion
            direction="left"
            className="absolute bottom-20 -left-24 lg:-left-40 z-50 hidden sm:block backdrop-blur-xl bg-zinc-200/30  rounded-full   max-w-96"
          >
            <div className="  flex items-center justify-center px-2 py-2  ">
              <span className="p-2">
                <PiPresentationChart
                  className="p-3 mx-auto size-14 text-[#a5a3ef] bg-zinc-50    rounded-full"
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-center justify-center mx-4">
                <H3> 85% </H3>
                <P>Sales Growth</P>
              </div>
            </div>
          </Motion>
          <Motion
            direction="left"
            className="absolute top-24 lg:top-20 -right-24 lg:-right-40 z-50 hidden sm:block backdrop-blur-xl bg-zinc-200/30  rounded-full   max-w-96"
          >
            <div className="  flex items-center justify-center px-2 py-2  ">
              <span className="p-2">
                <IoLogoDribbble
                  className="p-3 mx-auto size-14 text-[#fcaa74] bg-[#ffe1cd]    rounded-full"
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-center justify-center mx-4">
                <H3> 180+</H3>
                <P>Brand Joined</P>
              </div>
            </div>
          </Motion>
        </>
      ) : null}

      {children}
      {sectionTwo ? (
        <>
          <Motion
            direction="right"
            className="absolute bottom-24    lg:bottom-20 -right-32 lg:-right-28 z-50 backdrop-blur-xl bg-zinc-200/30  rounded-full hidden sm:block  max-w-96"
          >
            <div className="  flex items-center justify-center px-2 py-2  ">
              <span className="p-2">
                <PiPresentationChart
                  className="p-3 mx-auto size-14 text-[#a5a3ef] bg-zinc-50    rounded-full"
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-center justify-center mx-4">
                <H3> 85% </H3>
                <P>Sales Growth</P>
              </div>
            </div>
          </Motion>
          <Motion
            direction="left"
            className="absolute top-32 lg:top-28 -left-28 z-50 hidden sm:block backdrop-blur-xl bg-zinc-200/30  rounded-full   max-w-96"
          >
            <div className="  flex items-center justify-center px-2 py-2  ">
              <span className="p-2">
                <IoLogoDribbble
                  className="p-3 mx-auto size-14 text-[#fcaa74] bg-[#ffe1cd]    rounded-full"
                  size={12}
                />
              </span>
              <div className="w-full flex flex-col items-center justify-center text-left mx-4">
                <H3>120%</H3>
                <P>Engagement</P>
              </div>
            </div>
          </Motion>
          <Motion
            direction="down"
            className="absolute top-6 sm:top-24 lg:top-20 -right-[3.5rem]   sm:-right-32 lg:-right-24 z-50 backdrop-blur-xl bg-zinc-200/30  rounded-full   max-w-96"
          >
            <ChartIcon />
          </Motion>
        </>
      ) : null}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
