import {
  ArrowRight,
  ArrowRightIcon,
  CheckCircle,
  CheckIcon,
  PlayCircle,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import AvatarCircles from "../components/Avatar";
import Badge from "../components/Badge";
import Button from "../components/Button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { H1 } from "../components/typographyh1";
import { H2 } from "../components/typographyh2";
import { H3 } from "../components/typographyh3";
import { P } from "../components/typographypara";
import { aboutFeatures, features, serviceFeatures } from "../config";
import { BsFillBuildingsFill } from "react-icons/bs";
import { PiShoppingBagOpen, PiUserCirclePlus } from "react-icons/pi";

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
            <Badge className="inline-block uppercase tracking-wide">
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
              <div className="flex flex-row items-center justify-center lg:justify-start gap-4 my-auto mx-auto">
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
      <MaxWidthWrapper className="pt-10">
        <div className="grid grid-flow-dense items-center gap-x-12 place-items-center lg:grid-cols-2 pb-8">
          <div className="h-full  w-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1720451815682-3353b81a6633?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature"
              className="mx-auto w-full h-[75%] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
          <div className="space-y-4">
            <Badge className="inline-block uppercase tracking-wide">
              About Socialzy
            </Badge>
            <H1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Unlock Your Team's Potential
            </H1>
            <P className=" text-[#27272a]/80 md:text-xl text-balance">
              Empower your team to build and deploy faster with our cutting-edge
              platform. Unlock new possibilities and revolutionize your web
              presence.
            </P>
            <div className="pt-5 space-y-6">
              {aboutFeatures.map((feature, index) =>
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
      <MaxWidthWrapper className="max-w-full w-full mx-auto pt-0  placeholderImage bg-[#1e193bfb] bg-blend-multiply">
        <MaxWidthWrapper className="px-0 sm:px-0 md:px-0">
          <div className="container w-full mx-auto gap-x-12  lg:grid-cols-2 ">
            <div className="w-full flex flex-col items-center justify-center mx-auto sm:text-center space-y-4 ">
              <Badge className="inline-block uppercase tracking-wide">
                Our Services
              </Badge>
              <H1 className="text-zinc-100 text-3xl font-bold tracking-tight sm:text-4xl">
                We Provide The Best Service For You
              </H1>
              <P className="max-w-prose text-zinc-400 md:text-xl text-balance font-thin">
                Empower your team to build and deploy faster with our
                cutting-edge platform. Unlock new possibilities and
                revolutionize your web presence.
              </P>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-4 gap-y-4 pt-12">
              <div className="min-w-[28rem] sm:min-w-0 relative group flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out z-10 min-h-[21.25rem]">
                <img
                  src="./assets/likes-in-social-media.jpg"
                  className="w-[28rem] h-[21.25rem] object-cover object-center"
                  alt="Feature"
                />
                <div className="absolute inset-0 -z-10 bg-[#f6f6ff] w-1/2 group-hover:w-full transition-all duration-300 ease-in-out" />
              </div>
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`w-full min-h-[21.25rem] max-w-md relative group flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out z-10 ${
                    index % 2 === 0 ? "col-span-1" : ""
                  } `}
                >
                  <div
                    className={`absolute inset-0 -z-10 b w-1/2 group-hover:w-full transition-all duration-300 ease-in-out ${
                      feature.color ? "bg-[#ffe0cc]" : "bg-[#f6f6ff]"
                    } `}
                  />
                  <div className="flex justify-start items-center p-6 h-1/2">
                    <div className="text-white text-4xl pl-5 translate-y-4 group-hover:translate-y-2 transition-all duration-300 ease-in-out">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Link
                        to={feature.href}
                        className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                        aria-label="Read More"
                      >
                        Read More
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* </div> */}
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="max-w-full w-full mx-auto pt-24">
        <MaxWidthWrapper className="px-0 sm:px-0 md:px-0">
          <div className="container w-full mx-auto gap-x-12  lg:grid-cols-2 ">
            <div className="w-full flex flex-col items-center justify-center mx-auto sm:text-center space-y-4 ">
              <Badge className="inline-block uppercase tracking-wide">
                Our Pricing
              </Badge>
              <H1 className=" text-3xl font-bold tracking-tight sm:text-4xl">
                The Best Price Just For You
              </H1>
              <P className="max-w-prose text-[#27272a]/80 md:text-xl text-balance font-thin">
                Empower your team to build and deploy faster with our
                cutting-edge platform. Unlock new possibilities and
                revolutionize your web presence.
              </P>
            </div>

            <div className="w-full">
              <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:items-center">
                  <div className="rounded-2xl border border-gray-600 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                      {" "}
                      <PiUserCirclePlus
                        className="w-20 h-20 mx-auto mb-5 text-zinc-100 "
                        color="#ff6400"
                      />
                      <h2 className="text-lg font-medium text-gray-900">
                        Personal Plan
                        <span className="sr-only">Plan</span>
                      </h2>
                      <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                          $49,9
                        </strong>

                        {/* <span className="text-sm font-medium text-gray-700">
                          /month
                        </span> */}
                      </p>
                      <P className="-mt-2 text-sm text-[#27272a]/80 leading-wide">
                        Billed Annually
                      </P>
                    </div>

                    <div className="w-full mt-8 flex items-center justify-center mx-auto">
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
                    </div>

                    <ul className="text-left mt-6 space-y-2 mx-auto">
                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-[#ff6400]" />

                        <span className="text-gray-700">
                          25 Analytics Campaigns
                        </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-[#ff6400]" />

                        <span className="text-gray-700">
                          {" "}
                          Includes Branded Reports{" "}
                        </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-[#ff6400]" />

                        <span className="text-gray-700">
                          {" "}
                          300 Keywords for SEO{" "}
                        </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-[#ff6400]" />

                        <span className="text-gray-700">
                          24/7 Customer Support
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:px-8 lg:p-12">
                    <div className="text-center">
                      <BsFillBuildingsFill
                        className="w-20 h-20 mx-auto mb-5 text-zinc-100 "
                        color="#ff6400"
                      />
                      <h2 className="text-lg font-medium text-gray-900">
                        Pro
                        <span className="sr-only">Plan</span>
                      </h2>

                      <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                          {" "}
                          30${" "}
                        </strong>

                        <span className="text-sm font-medium text-gray-700">
                          /month
                        </span>
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700">
                          {" "}
                          20 users included{" "}
                        </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700"> 5GB of storage </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700"> Email support </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700">
                          {" "}
                          Help center access{" "}
                        </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700"> Phone support </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700">
                          {" "}
                          Community access{" "}
                        </span>
                      </li>
                    </ul>

                    <a
                      href="#"
                      className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Get Started
                    </a>
                  </div>

                  <div className="rounded-2xl border border-gray-600 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                      <PiShoppingBagOpen
                        className="w-20 h-20 mx-auto mb-5 text-zinc-100 "
                        color="#ff6400"
                      />
                      <h2 className="text-lg font-medium text-gray-900">
                        Starter
                        <span className="sr-only">Plan</span>
                      </h2>

                      <p className="mt-2 sm:mt-4">
                        <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                          {" "}
                          20${" "}
                        </strong>

                        <span className="text-sm font-medium text-gray-700">
                          /month
                        </span>
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700">
                          {" "}
                          10 users included{" "}
                        </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700"> 2GB of storage </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700"> Email support </span>
                      </li>

                      <li className="flex items-center gap-1">
                        <CheckIcon className="size-5 text-indigo-700" />

                        <span className="text-gray-700">
                          {" "}
                          Help center access{" "}
                        </span>
                      </li>
                    </ul>

                    <a
                      href="#"
                      className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
