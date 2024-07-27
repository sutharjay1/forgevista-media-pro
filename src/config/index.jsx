import { Clock7 } from "lucide-react";
import { BiBulb } from "react-icons/bi";

export const serviceFeatures = [
  {
    title: "Email Marketing",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/email.png"
        width={80}
        height={80}
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="email marketing"
      />
    ),
    href: "/email-marketing",
  },
  {
    title: "SEO Management",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    highlight: true,
    icon: (
      <img
        src="../assets/seo.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="seo management"
      />
    ),
    href: "/seo-management",
  },
  {
    title: "Content Writing",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/content.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="content writing"
      />
    ),
    href: "/content-writing",
  },
  {
    title: "Business Strategy",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/business.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="business strategy"
      />
    ),
    href: "/business-strategy",
  },
  {
    title: "Social Media Management",
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu    ",
    icon: (
      <img
        src="../assets/social-media-management.png"
        className="w-20 h-20 mx-auto rounded-md object-cover"
        alt="social media management"
      />
    ),
    href: "/social-media-management",
    color: true,
  },
];

export const aboutFeatures = [
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

export const features = [
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
