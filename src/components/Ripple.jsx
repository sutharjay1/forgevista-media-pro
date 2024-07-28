import { Circle } from "lucide-react";
import React from "react";
import OrbitingApp from "./OrbitingApp";
import { BsWhatsapp } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { H3 } from "./typographyh3";
import { P } from "./typographypara";

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#ffffff",
    "#000000",
  ],
  children,
}) {
  return (
    <div className="relative flex items-center justify-center">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.0001;
        const animationDelay = `${i * 0.06}s`;
        const backgroundColor = colors[i % colors.length];

        return (
          <>
            <div
              key={i}
              className={`absolute animate-ripple z-10 rounded-full shadow-xl [--i:${i}]`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
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
      <Circle
        strokeWidth={0.03}
        strokeDasharray={0.3}
        className={`absolute z-30 w-[40rem] h-[40rem] rounded-full`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
        }}
      />
      <OrbitingApp
        className="size-[50px] border-none bg-transparent"
        radius={265}
        duration={20}
        delay={0}
        reverse
        iconDegrees={[0, 50, 100, 165, 200, 240, 270, 315]}
      >
        <span className="p-5">
          <IoLogoInstagram
            size={70}
            className="text-white bg-gradient-to-tr from-pink-500 to-violet-500 rounded-full p-2"
          />
        </span>
        <span className="p-5">
          <IoLogoTwitter
            size={60}
            className="text-white bg-[#1da1f2] rounded-full p-2"
          />
        </span>
        <span>
          <div className="max-w-sm rounded-4xl bg-zinc-100/60 w-full flex items-center justify-center">
            <div></div>
            <div className="w-full flex flex-col items-center justify-center">
              <H3> 85% </H3>
              <P>Sales Growth</P>
            </div>
          </div>
        </span>
        <span className="p-5">
          <IoLogoTiktok
            size={55}
            className="text-white bg-[#fe2c55] rounded-full p-2"
          />
        </span>
        <span className="p-5">
          <IoLogoYoutube
            size={50}
            className="text-white bg-[#ff0000] rounded-full p-2"
          />
        </span>
        <span className="p-5">
          <FaFacebookF
            size={60}
            className="text-white bg-[#1078f0] rounded-full p-3"
          />
        </span>
      </OrbitingApp>

      {children}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
