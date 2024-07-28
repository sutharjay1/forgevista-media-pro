import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
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

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuOptions = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Services", path: "/services" },
    {
      title: "Blog",
      path: "/blog",
      submenu: [{ title: "Single Blog", path: "/blog/single-blog" }],
    },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setExpandedMenu(null);
  }, [location.pathname]);

  const handleMenuClick = (option) => {
    if (option.submenu) {
      setExpandedMenu(expandedMenu === option.title ? null : option.title);
    } else {
      setIsOpen(false);
      setExpandedMenu(null);
    }
  };

  return (
    <div className="relative w-full z-20">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
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

            <nav className="hidden lg:flex items-center justify-center gap-10">
              {menuOptions.map((option) => (
                <div key={option.path} className="relative group">
                  <Link
                    to={option.submenu ? null : option.path}
                    className={`text-base font-light ${
                      option.path === location.pathname
                        ? "text-[#ff6400] font-semibold"
                        : `text-[${colorTheme.lightZinc}]`
                    } hover:text-[#ff6400] transition-colors flex items-center`}
                  >
                    {option.title}
                    {option.submenu && <BiChevronDown className="ml-1" />}
                  </Link>
                  {option.submenu && (
                    <div className="absolute left-0 mt-3  p-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {option.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-gray-600 hover:text-[#ff6400] hover:bg-zinc-200 rounded-lg"
                            role="menuitem"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <Button
              bg
              href="/get-started"
              className={
                "bg-[#3d3568]  hover:-translate-y-2 transition-all hover:bg-[#ff6400] rounded-full px-6 py-4 hidden lg:flex"
              }
            >
              <span>
                <FaPhone size={20} className="mr-2 rotate-90" />
              </span>
              (+44) 123 456 789
            </Button>

            <SheetTrigger asChild className="lg:hidden">
              <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                <CgMenuGridO size={32} />
              </button>
            </SheetTrigger>
          </div>
        </div>
        <SheetContent
          side="left"
          // close={handleMenu}
          className="bg-zinc-50  w-full h-full p-3"
        >
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link to={"/"} onClick={() => setIsOpen(false)}>
                <img
                  src="../assets/Logo.png"
                  className="mx-auto h-6 w-auto object-cover"
                  alt="mediaPro"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex  flex-col h-full  ">
            <nav className="flex-1 mt-6 grid gap-y-4 pt-4 ">
              {menuOptions.map((option) => (
                <div key={option.path}>
                  <div
                    onClick={() => handleMenuClick(option)}
                    className={`flex items-center justify-between rounded-md p-1 py-2 pb-3 px-2 text-sm font-semibold ${
                      option.path === location.pathname
                        ? "text-[#ff6400] underline underline-offset-8 font-bold"
                        : "text-zinc-800"
                    } hover:bg-zinc-200`}
                  >
                    <span className="ml-3 text-base font-normal">
                      {option.title}
                    </span>
                    {option.submenu ? (
                      <BiChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedMenu === option.title ? "rotate-180" : ""
                        }`}
                      />
                    ) : (
                      <BiChevronRight className="h-4 w-4" />
                    )}
                  </div>
                  {option.submenu && expandedMenu === option.title && (
                    <div className="ml-6 mt-2 space-y-2">
                      {option.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block p-2 text-sm text-gray-600 hover:text-[#ff6400] hover:bg-zinc-200 rounded-md"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-3 space-y-2">
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=signup"} onClick={() => setIsOpen(false)}>
                  <button
                    type="button"
                    className="w-full rounded-md border border-[#ff6400] px-3 py-[0.5rem] text-sm font-semibold text-[#ff6400] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6400]"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="space-y-1 w-full">
                <Link to={"/auth?mode=login"} onClick={() => setIsOpen(false)}>
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
