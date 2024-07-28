import {
  Check,
  CheckCircle,
  Clock7,
  Handshake,
  User,
  Users,
} from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMaleFemaleOutline } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";

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

export const pricing = [
  {
    plan: "Personal Plan",
    price: 49.9,
    billingCycle: "Annually",
    buttonText: "Get Started",
    href: "/buy/personal",
    features: [
      "25 Analytics Campaigns",
      "Includes Branded Reports",
      "300 Keywords for SEO",
      "24/7 Customer Support",
    ],
  },
  {
    plan: "Enterprise Plan",
    price: 149.9,
    billingCycle: "Annually",
    buttonText: "Get Started",
    href: "/buy/enterprise",
    features: [
      "25 Analytics Campaigns",
      "Includes Branded Reports",
      "300 Keywords for SEO",
      "15 Social Accounts",
      "24/7 Customer Support",
    ],
    enterprise: true,
  },
  {
    plan: "Business Plan",
    price: 89.9,
    billingCycle: "Annually",
    buttonText: "Get Started",
    href: "/buy/business",
    features: [
      "25 Analytics Campaigns",
      "Includes Branded Reports",
      "300 Keywords for SEO",
      "24/7 Customer Support",
    ],
  },
];

export const numCard = [
  {
    title: "Satisfied Clients",
    value: "3460",
    icon: <FaUsers size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Successful Campaigns",
    value: "8550 ",
    icon: <CheckCircle size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Brands Joined",
    value: "180",
    icon: <Handshake size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
  {
    title: "Marketing Experts",
    value: "85",
    icon: <PiUsersThreeFill size={48} className="text-[#ff6400]" />,
    description:
      "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incidiu ",
  },
];

export const partner = [
  { src: "./assets/partner-1.png" },
  { src: "./assets/partner-2.png" },
  { src: "./assets/partner-3.png" },
  { src: "./assets/partner-4.png" },
];