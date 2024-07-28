import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function OrbitingApp({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  mobileRadius = 30,
  path = true,
  iconDegrees = [],
}) {
  const [rootRadius, setRootRadius] = useState(radius);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRootRadius(mobileRadius);
      } else {
        setRootRadius(radius);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [radius, mobileRadius]);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className={`stroke-black/10 stroke-1  dark:stroke-white/10`}
            cx="50%"
            cy="50%"
            r={rootRadius}
            fill="none"
          />
        </svg>
      )}

      <div
        className={twMerge(
          "absolute flex size-full transform-gpu items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {React.Children.map(children, (child, index) => {
          const degree = iconDegrees[index] || (360 / children.length) * index;
          const radian = (degree * Math.PI) / 180;
          const x = rootRadius * Math.cos(radian);
          const y = rootRadius * Math.sin(radian);

          return (
            <div
              className="absolute"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </>
  );
}
