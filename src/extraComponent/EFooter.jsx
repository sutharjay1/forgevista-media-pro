// import React from "react";
// import MaxWidthWrapper from "../components/MaxWidthWrapper";

// import { ChevronRight } from "lucide-react";
// import { FaFacebookF, FaPhone } from "react-icons/fa";
// import { HiMapPin } from "react-icons/hi2";
// import { ImLinkedin2 } from "react-icons/im";
// import { IoLogoInstagram, IoLogoTwitter, IoMail } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const EFooter = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     // <footer className="bg-[url('../assets/bg-footer.png')] bg-[#141025] bg-blend-overlay">
//     //   <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
//     //     <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 place-items-center">
//     //       <div className="w-full bg-[#18142d] p-8 rounded-lg divide-y-[1px] divide-zinc-500/25">
//     //         <Link to="/" className="block mb-6 ">
//     //           <img
//     //             src="../assets/FooterLogo.png"
//     //             className="h-8 w-auto"
//     //             alt="mediaPro"
//     //           />
//     //         </Link>
//     //         <div className="space-y-4 text-zinc-200 pt-4">
//     //           <p className="flex items-center gap-3">
//     //             <HiMapPin className="text-[#ff6400] flex-shrink-0" />
//     //             <span>Jl. Raya Kuta No.70, Kuta</span>
//     //           </p>
//     //           <p className="flex items-center gap-3">
//     //             <IoMail className="text-[#ff6400] flex-shrink-0" />
//     //             <span>support@domain.com</span>
//     //           </p>
//     //           <p className="flex items-center gap-3">
//     //             <FaPhone className="text-[#ff6400] rotate-90 flex-shrink-0" />
//     //             <span>(+44) 123 456 789</span>
//     //           </p>
//     //         </div>
//     //       </div>

//     //       <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
//     //         <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//     //           Other Pages
//     //         </h2>
//     //         <ul className="space-y-2">
//     //           {["Home", "About Us", "Services", "Projects", "Contact"].map(
//     //             (item) => (
//     //               <li key={item} className="flex items-center gap-2">
//     //                 <ChevronRight size={14} className="text-[#ff6400]" />
//     //                 <Link
//     //                   to="#"
//     //                   className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
//     //                 >
//     //                   {item}
//     //                 </Link>
//     //               </li>
//     //             )
//     //           )}
//     //         </ul>
//     //       </div>

//     //       <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
//     //         <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//     //           Other Links
//     //         </h2>
//     //         <ul className="space-y-2">
//     //           {[
//     //             "Privacy Policy",
//     //             "Terms Of Service",
//     //             "Disclaimer",
//     //             "Credits",
//     //             "FAQ",
//     //           ].map((item) => (
//     //             <li key={item} className="flex items-center gap-2">
//     //               <ChevronRight size={14} className="text-[#ff6400]" />
//     //               <Link
//     //                 to="#"
//     //                 className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
//     //               >
//     //                 {item}
//     //               </Link>
//     //             </li>
//     //           ))}
//     //         </ul>
//     //       </div>

//     //       <div className="space-y-8">
//     //         <div>
//     //           <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//     //             Newsletter
//     //           </h2>
//     //           <form className="relative max-w-lg">
//     //             <input
//     //               className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm"
//     //               type="email"
//     //               placeholder="Your Email Address"
//     //             />
//     //             <button
//     //               type="submit"
//     //               className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#28214c] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#ff6400] transition-colors duration-200"
//     //             >
//     //               Subscribe
//     //             </button>
//     //           </form>
//     //         </div>
//     //         <div>
//     //           <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//     //             Get the latest news & updates
//     //           </h2>
//     //           <div className="flex space-x-4">
//     //             {[FaFacebookF, IoLogoTwitter, IoLogoInstagram, ImLinkedin2].map(
//     //               (Icon, index) => (
//     //                 <Link
//     //                   key={index}
//     //                   to="#"
//     //                   className="text-zinc-100 bg-[#ff6400] p-2 rounded-full hover:bg-[#28214c] transition-colors duration-200"
//     //                 >
//     //                   <Icon size={24} />
//     //                 </Link>
//     //               )
//     //             )}
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>

//     //     <div className="mt-8 pt-6 border-t border-gray-500/35">
//     //       <div className="flex flex-col md:flex-row justify-between items-center text-zinc-200 text-sm">
//     //         <p>MediaPro Marketing Agency</p>
//     //         <p>&copy; {currentYear} All rights reserved</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </footer>

//     <footer className="bg-[#15242b]">
//       <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8  lg:grid-cols-4 lg:pt-16">
//           <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
//             <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//               Other Pages
//             </h2>
//             <ul className="space-y-2">
//               {["Home", "About Us", "Services", "Projects", "Contact"].map(
//                 (item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <ChevronRight size={14} className="text-[#ff6400]" />
//                     <Link
//                       to="#"
//                       className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           <div className="w-full md:flex md:flex-col md:items-center md:justify-center px-4 md:px-0">
//             <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//               Other Links
//             </h2>
//             <ul className="space-y-2">
//               {[
//                 "Privacy Policy",
//                 "Terms Of Service",
//                 "Disclaimer",
//                 "Credits",
//                 "FAQ",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-2">
//                   <ChevronRight size={14} className="text-[#ff6400]" />
//                   <Link
//                     to="#"
//                     className="text-zinc-300 hover:text-[#ff6400] transition-colors duration-200"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="space-y-8">
//              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//               Newsletter</h2>

//               <form className="mt-6 w-full">
//             <label htmlFor="UserEmail" className="sr-only"> Email </label>

//             <div
//               className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
//             >
//               <input
//                 type="email"
//                 id="UserEmail"
//                 placeholder="john@rhcp.com"
//                 className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
//               />

//               <button
//                 className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//             </div>

//             <div>
//               <h2 className="text-zinc-200 text-lg font-semibold mb-4">
//                 Get the latest news & updates
//               </h2>
//               <div className="flex space-x-4">
//                 {[FaFacebookF, IoLogoTwitter, IoLogoInstagram, ImLinkedin2].map(
//                   (Icon, index) => (
//                     <Link
//                       key={index}
//                       to="#"
//                       className="text-zinc-100 bg-[#ff6400] p-2 rounded-full hover:bg-[#28214c] transition-colors duration-200"
//                     >
//                       <Icon size={24} />
//                     </Link>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <p className="text-xs text-gray-500">
//           &copy; 2022. Company Name. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default EFooter;

import { ChevronRight } from "lucide-react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import { H1 } from "../components/typographyh1";
import { H4 } from "../components/typographyh4";
import { P } from "../components/typographypara";
import { twMerge } from "tailwind-merge";

const EFooter = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15242b]">
      <div
        className={twMerge(
          className,
          "mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
        )}
      >
        <div className="flex items-center justify-between gap-4 -mb-4 lg:-mb-8">
          <H1 className="text-zinc-200 text-lg font-semibold">jobify</H1>
          <div className="flex space-x-4">
            {[ImLinkedin2, FaFacebookF, IoLogoTwitter, IoLogoYoutube].map(
              (Icon, index) => (
                <Link
                  key={index}
                  to="#"
                  className="text-zinc-100 bg-[#367978] p-2 rounded-lg hover:bg-[#28214c] transition-colors duration-200"
                >
                  <Icon className="size-4 lg:size-6" />
                </Link>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-4 lg:pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <h2 className="text-zinc-300 text-xl font-semibold mb-4">
              Other Pages
            </h2>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Pricing"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Link
                    to="#"
                    className="text-zinc-300 hover:text-[#255453] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-zinc-300 text-xl font-semibold mb-4">
              Other Links
            </h2>
            <ul className="space-y-2">
              {["FAQ", "Blog", "Contact", "Support"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Link
                    to="#"
                    className="text-zinc-300 hover:text-[#255453] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center space-y-8">
            <div>
              <h2 className="text-zinc-200 text-lg font-semibold mb-4">
                Subscribe to our newsletter
              </h2>
              <form className="relative max-w-lg">
                <input
                  className="w-full rounded-xl border-gray-200 bg-gray-100 p-4 pr-32 text-sm"
                  type="email"
                  placeholder="Your Email Address"
                />
                <button
                  type="submit"
                  className="absolute -right-[0.2rem] top-1/2 -translate-y-1/2 rounded-r-xl  px-5 py-[1.04rem] text-sm font-medium text-white bg-[#387677] hover:bg-[#387677e9] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-center gap-4">
              <div className="flex flex-col items-start justify-start space-y-2 text-left text-zinc-300">
                <H4>Call Us</H4>
                <P>+91 1234567890</P>
              </div>
              <div className="flex flex-col items-start justify-start space-y-2 text-left text-zinc-300">
                <H4>Email Us</H4>
                <P>contact@yourdomain.com</P>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EFooter;
