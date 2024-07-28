import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { colorTheme } from "./../constants/colorTheme";
import Button from "./Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { ArrowRight } from "lucide-react";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const pathname = useLocation();
  const menuOptions = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="relative w-full z-20">
      <Sheet>
        <div className="w-full flex items-center justify-center py-4 px-4 z-20 pt-4 ">
          <div className="max-w-6xl w-full flex items-center justify-between">
            <div className="text-xl font-semibold tracking-wide select-none">
              <Link to={"/"}>
                <img
                  src="../assets/Logo.png"
                  className="mx-auto h-6 w-auto object-cover"
                  alt="mediaPro"
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center gap-12">
              <div className="flex items-center justify-center gap-10">
                {menuOptions.map((option) => (
                  <Link to={option.path} key={option.path}>
                    <span
                      className={`text-base font-light ${
                        option.path === pathname.pathname
                          ? "text-[#ff6400] font-semibold"
                          : `text-[${colorTheme.lightZinc}]`
                      }`}
                    >
                      {option.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Button
              bg
              href="/get-started"
              className={
                "bg-[#3d3568]  hover:-translate-y-2 transition-all hover:bg-[#ff6400] rounded-full px-6 py-4"
              }
             
            >
              <span><FaPhone size={20} className="mr-2 rotate-90" /></span>
              (+44) 123 456 789
            </Button>
            {/* <Button
              message="Sign Up"
              className="px-6 rounded-2xl bg-[#ff6400]"
              href={"/auth"}
            /> */}
            <div className="flex lg:hidden items-center justify-center gap-12">
              <span onClick={handleMenu}>
                <SheetTrigger>
                  <CgMenuGridO size={32} />
                </SheetTrigger>
              </span>
            </div>
          </div>
        </div>
        <SheetContent
          side="left"
          close={handleMenu}
          className="backdrop-blur-xl"
        >
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link to={"/"}>
                <img
                  src="../assets/Logo.png"
                  className="mx-auto h-6 w-auto object-cover"
                  alt="mediaPro"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex  flex-col h-full ">
            <div className="flex-1 h-full mt-6">
              <nav className="grid gap-y-4">
                {menuOptions.map((option) => (
                  <Link
                    to={option.path}
                    key={option.path}
                    className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold ${
                      option.path === pathname.pathname
                        ? "text-[#ff6400] underline underline-offset-8 font-bold"
                        : `text-zinc-800`
                    }`}
                  >
                    <span className="ml-3 text-base font-normal text-zinc-800">
                      {option.title}
                    </span>
                    <span>
                      <BiChevronRight className="ml-3 h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-3 space-y-2">
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=signup"}>
                  <button
                    type="button"
                    className="w-full rounded-md border border-[#ff6400] px-3 py-[0.5rem] text-sm font-semibold text-[#ff6400] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6400]"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=login"}>
                  <button
                    type="button"
                    className="w-full rounded-md bg-[#ff6400] px-3 py-[0.5rem] text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6400]"
                  >
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
