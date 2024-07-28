// import { ChevronRight, ChevronRightIcon } from "lucide-react";
// import React from "react";
// import { FaFacebookF, FaPhone } from "react-icons/fa";
// import { HiMapPin } from "react-icons/hi2";
// import { ImLinkedin2 } from "react-icons/im";
// import { IoLogoInstagram, IoLogoTwitter, IoMail } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { H3 } from "./typographyh3";
// import { P } from "./typographypara";
// // import "../assets/font/PolySans-Slim.woff2";

// const Footer = () => {
//   return (
//     <footer className="bg-[url('../assets/bg-footer.png')] bg-[#141025] bg-blend-overlay">
//       <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
//         <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 place-items-center">
//           <div className="bg-[#18142d] p-12 divide-y-[1px] py-8 divide-gray-500/35 rounded-lg">
//             <div className="mb-8 flex items-center justify-start">
//               <Link to="/">
//                 <img
//                   src="../assets/FooterLogo.png"
//                   className="mx-auto h-6 w-auto object-cover"
//                   alt="mediaPro"
//                 />
//               </Link>
//             </div>
//             <div className="w-full flex flex-col items-start justify-start gap-4 text-zinc-200 pt-8">
//               <p className="flex items-center gap-4 text-left ">
//                 <HiMapPin size={24} className="text-[#ff6400]" />
//                 Jl. Raya Kuta No.70, Kuta
//               </p>
//               <p className="flex items-center gap-4 text-left ">
//                 <IoMail size={24} className="text-[#ff6400]" />
//                 support@domain.com
//               </p>
//               <p className="flex items-center gap-4 text-left ">
//                 <FaPhone size={24} className="text-[#ff6400] rotate-90" />
//                 (+44) 123 456 789
//               </p>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-zinc-200 text-lg font-semibold">Other Pages</h2>
//             <ul className="mt-4 space-y-4">
//               <li className="flex items-center gap-2">
//                 <ChevronRightIcon size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Projects
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="w-fit">
//             <h2 className="text-zinc-200 text-lg font-semibold">Other Links</h2>
//             <ul className="mt-4 space-y-4">
//               <li className="flex items-center gap-2">
//                 <ChevronRightIcon size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Terms Of Service
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Disclaimer
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   Credits
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2">
//                 <ChevronRight size={14} className="text-[#ff6400]" />
//                 <Link
//                   to="#"
//                   className="text-zinc-300 hover:text-[#ff6400] tracking-wider"
//                   style={{ fontFamily: "PolySansNeutral" }}
//                 >
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-8">
//             <H3 className="text-zinc-200 text-lg font-semibold">Newsletter</H3>{" "}
//             <div className="relative max-w-lg">
//               <label className="sr-only" htmlFor="email">
//                 {" "}
//                 Email{" "}
//               </label>

//               <input
//                 className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm tracking-wider "
//                 id="email"
//                 type="email"
//                 placeholder="Your Email Address"
//                 style={{
//                   fontFamily: "PolySansSlim",
//                 }}
//               />

//               <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#28214c] px-5 py-3 text-sm font-medium text-white hover:bg-[#ff6400] transition-colors">
//                 Subscribe
//               </button>
//             </div>
//             <div className="relative max-w-lg">
//               <H3
//                 className="text-zinc-200 text-lg font-semibold"
//                 style={{ fontFamily: "PolySansSlim" }}
//               >
//                 Get the latest news & updates
//               </H3>
//               <div className="flex space-x-4 mt-4">
//                 <Link>
//                   <FaFacebookF
//                     size={48}
//                     className="text-zinc-100 bg-[#ff6400] p-3 rounded-full"
//                   />
//                 </Link>
//                 <Link>
//                   <IoLogoTwitter
//                     size={48}
//                     className="text-zinc-100 bg-[#ff6400] p-3 rounded-full"
//                   />
//                 </Link>
//                 <Link>
//                   <IoLogoInstagram
//                     size={48}
//                     className="text-zinc-100 bg-[#ff6400] p-3 rounded-full"
//                   />
//                 </Link>
//                 <Link>
//                   <ImLinkedin2
//                     size={48}
//                     className="text-zinc-100 bg-[#ff6400] p-3 rounded-full"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <span className="relative flex justify-center">
//           <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
//         </span>
//         <div className=" flex flex-col md:flex-row items-start justify-between ">
//           <P style={{ fontFamily: "PolySansSlim" }} className="text-zinc-200">
//             {" "}
//             MediaPro Marketing Agency
//           </P>
//           <P style={{ fontFamily: "PolySansSlim" }} className="text-zinc-200">
//             Copyright
//             {new Date().getFullYear()}
//             All rights reserved
//           </P>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoInstagram, IoLogoTwitter, IoMail } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[url('../assets/bg-footer.png')] bg-[#141025] bg-blend-overlay">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 place-items-center">
          <div className="w-full bg-[#18142d] p-8 rounded-lg divide-y-[1px] divide-zinc-500/25">
            <Link to="/" className="block mb-6 ">
              <img
                src="../assets/FooterLogo.png"
                className="h-8 w-auto"
                alt="mediaPro"
              />
            </Link>
            <div className="space-y-4 text-zinc-200 pt-4">
              <p className="flex items-center gap-3">
                <HiMapPin className="text-[#ff6400] flex-shrink-0" />
                <span>Jl. Raya Kuta No.70, Kuta</span>
              </p>
              <p className="flex items-center gap-3">
                <IoMail className="text-[#ff6400] flex-shrink-0" />
                <span>support@domain.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-[#ff6400] rotate-90 flex-shrink-0" />
                <span>(+44) 123 456 789</span>
              </p>
            </div>
          </div>

          <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
            <h2 className="text-zinc-200 text-lg font-semibold mb-4">
              Other Pages
            </h2>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#ff6400]" />
                    <Link
                      to="#"
                      className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
            <h2 className="text-zinc-200 text-lg font-semibold mb-4">
              Other Links
            </h2>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms Of Service",
                "Disclaimer",
                "Credits",
                "FAQ",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#ff6400]" />
                  <Link
                    to="#"
                    className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
                Newsletter
              </h2>
              <form className="relative max-w-lg">
                <input
                  className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#28214c] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#ff6400] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
                Get the latest news & updates
              </h2>
              <div className="flex space-x-4">
                {[FaFacebookF, IoLogoTwitter, IoLogoInstagram, ImLinkedin2].map(
                  (Icon, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="text-zinc-100 bg-[#ff6400] p-2 rounded-full hover:bg-[#28214c] transition-colors duration-200"
                    >
                      <Icon size={24} />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-500/35">
          <div className="flex flex-col md:flex-row justify-between items-center text-zinc-200 text-sm">
            <p>MediaPro Marketing Agency</p>
            <p>&copy; {currentYear} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
