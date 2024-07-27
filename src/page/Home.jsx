import React from "react";
import {
  ArrowRight,
  ArrowRightIcon,
  Check,
  CheckCircle,
  CheckIcon,
  Clock7,
  icons,
  PlayCircle,
} from "lucide-react";
import AvatarCircles from "../components/Avatar";
import Button from "../components/Button";
import { P } from "../components/typographypara";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { H3 } from "../components/typographyh3";
import { twMerge } from "tailwind-merge";
import { BiBulb } from "react-icons/bi";
import Badge from "../components/Badge";
import { H2 } from "../components/typographyh2";
import { H1 } from "../components/typographyh1";
import { H4 } from "../components/typographyh4";

const aboutFeature = [
  {
    title: "About Us",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
  },
  {
    title: "Our Team",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    highlight: true,
  },
  {
    title: "Our Values",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
  },
];

const features = [
  {
    title: "Why Choose Us",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Save Your Time",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    icon: <Clock7 size={48} className="text-[#ff6400] " />,
  },
  {
    title: "Affordable Price For You",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    highlight: true,
  },
  {
    title: "Best Strategy",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
    icon: <BiBulb size={48} className="text-[#ff6400]" />,
  },
];

const Feature = ({ title, description, icon, highlight }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center text-center p-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        highlight && "bg-[#ff6400] p-8"
      )}
    >
      {highlight ? (
        <div className="h-full p-3 bg-[#ff6400] rounded-4xl">
          {icon && <div className="p-3 rounded-full">{icon}</div>}
          <H3 className="text-xl font-semibold mb-2 text-white">{title}</H3>
          <P className="text-gray-300">{description}</P>
        </div>
      ) : (
        <>
          {icon && <div className="mb-4 p-3 rounded-full">{icon}</div>}
          <H3 className="text-xl font-semibold mb-2 text-white">{title}</H3>
          <P className="text-gray-300">{description}</P>
        </>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <Badge
              icon={
                <ArrowRightIcon
                  className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  size={16}
                />
              }
            >
              Welcome To Socialzy
            </Badge>
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Discover the Future of</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                Welcome to Our Website MediaPro
              </span>
            </h1>
            <P className="mt-3 text-base font-medium   text-zinc-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Empower your team to build and deploy faster with our cutting-edge
              platform. Unlock new possibilities and revolutionize your web
              presence.
            </P>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-row gap-4 my-auto">
                <Button
                  bg
                  href="/get-started"
                  className={
                    "bg-[#3d3568]  hover:-translate-y-2 transition-transform hover:bg-[#ff6400] rounded-full px-6 py-4"
                  }
                  icon={<ArrowRight size={16} />}
                >
                  Get Started
                </Button>
                <Button
                  border
                  href="/watch-intro"
                  // className={
                  //   "bg-[#3d3568]  hover:-translate-y-2 transition-transform hover:bg-[#ff6400] rounded-full px-6 py-4"
                  // }
                  className={" px-6 py-4"}
                  icon={<PlayCircle size={16} />}
                >
                  Watch Intro
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-center lg:justify-start">
                <AvatarCircles
                  avatarUrls={[
                    "https://i.pravatar.cc/300?img=1",
                    "https://i.pravatar.cc/300?img=2",
                    "https://i.pravatar.cc/300?img=3",
                    "https://i.pravatar.cc/300?img=4",
                  ]}
                  // numPeople={1000}
                />
                <span className="ml-3 text-sm font-medium text-zinc-600">
                  3460+ Satisfied Clients
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="bg-[#28214c] p-10 rounded-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={twMerge(
                  feature[index] === index && "border-r border-zinc-400"
                )}
              >
                <Feature key={feature.title} {...feature} />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="container grid items-center gap-x-12 place-items-center px-4 md:px-6 lg:grid-cols-2 ">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1720451815682-3353b81a6633?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature"
              className="mx-auto w-full h-[75%] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
          <div className="space-y-4">
            <Badge className="inline-block">Features</Badge>
            <H1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Unlock Your Team's Potential
            </H1>
            <P className=" text-muted-foreground md:text-xl text-balance">
              Empower your team to build and deploy faster with our cutting-edge
              platform. Unlock new possibilities and revolutionize your web
              presence.
            </P>
            <div className="pt-5 space-y-6">
              {aboutFeature.map((feature, index) =>
                feature.highlight === true ? (
                  <div
                    key={index}
                    className="flex items-center gap-4 translate-x-6 px-4 py-3 bg-[#edeaff] rounded-5xl"
                  >
                    <CheckCircle
                      className="p-3 mx-auto size-14 text-[#a5a3ef] bg-zinc-50  rounded-full"
                      // size={48}
                    />
                    <div>
                      <H2 className="text-xl md:text-2xl lg:text-3xl border-none font-semibold">
                        {feature.title}
                      </H2>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle
                      className="p-3 mx-auto size-14 text-[#a5a3ef] bg-[#e6e5ff] rounded-full"
                      // size={48}
                    />
                    <div>
                      <H2 className="text-xl md:text-2xl lg:text-3xl border-none font-semibold">
                        {feature.title}
                      </H2>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="w-full mx-auto ">
        <div className="container w-full mx-auto gap-x-12  px-4 md:px-6 lg:grid-cols-2 ">
          <div className="w-full flex flex-col items-center justify-center mx-auto sm:text-center space-y-4">
            <Badge className="inline-block">Features</Badge>
            <H1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Unlock Your Team's Potential
            </H1>
            <P className=" text-muted-foreground md:text-xl text-balance">
              Empower your team to build and deploy faster with our cutting-edge
              platform. Unlock new possibilities and revolutionize your web
              presence.
            </P>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
