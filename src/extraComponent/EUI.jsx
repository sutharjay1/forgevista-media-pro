import React from "react";
import { FaFigma } from "react-icons/fa";
import Badge from "./Badge";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Motion } from "./Motion";
import { H2 } from "./typographyh2";
import { P } from "./typographypara";
import { CirclePlus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const EUI = () => {
  return (
    <MaxWidthWrapper className="py-10 overflow-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-4">
          <Motion
            direction="left"
            className="text-center lg:text-left space-y-4"
          >
            <Badge className="inline-block uppercase tracking-wide">
              3D Elements
            </Badge>
            <H2 className="text-4xl text-center lg:text-left tracking-normal font-extrabold sm:text-5xl md:text-6xl lg:text-5xl border-0 -mb-6">
              <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
                User
              </span>
              <br />
              <span className="block text-balance text-zinc-900 xl:inline leading-none lg:leading-none">
                interface
              </span>
            </H2>
            <P className="mt-3 text-base font-medium text-center lg:text-left text-zinc-600 sm:mt-5 sm:text-lg lg:text-xl">
              A professional 3D design libraries for Designers.
            </P>
            <div className="pr-6">
              <div className="text-4xl font-bold text-zinc-800">
                $68.<span className="text-2xl text-zinc-600">00</span>
              </div>
              <div className="flex mx-auto items-center justify-start  gap-4 mt-4">
                <Button
                  bg
                  href="/get-started"
                  className={
                    "bg-zinc-900    transition-all hover:bg-zinc-950 rounded-full    px-10 py-4 flex text-wrap"
                  }
                >
                  <FaFigma className="size-4 lg:size-8" />
                  Purchase Now
                </Button>
                <CirclePlus className="size-4 lg:size-8" />
              </div>
            </div>
          </Motion>
        </div>

        <div className="relative w-full lg:w-[24rem] h-auto lg:h-[35rem] mx-auto rounded-3xl overflow-clip z-40">
          <img
            src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="building plan image"
            width={300}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full px-3 lg:px-8 flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Talent acquisition</AccordionTrigger>
              <AccordionContent>  
                Ad enim sint quis occaecat non sit sunt non sint ullamco ut
                adipisicing minim. Id pariatur deserunt velit incididunt ullamco
                ex eiusmod qui ea minim enim. Eu et nisi dolor elit velit
                consectetur ad aute.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>People and culture</AccordionTrigger>
              <AccordionContent>
                Nostrud aliquip non sint qui magna duis labore. Veniam est dolor
                ipsum fugiat mollit voluptate aliquip minim sint eu consectetur
                magna velit minim. Pariatur tempor excepteur nisi aliquip esse
                labore labore enim. Excepteur occaecat fugiat est adipisicing
                incididunt veniam eiusmod Lorem nulla. Laboris ea irure veniam
                incididunt esse. Qui consequat sint non voluptate mollit ad sint
                non veniam ea minim nisi ullamco reprehenderit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Efficient recruitmen</AccordionTrigger>
              <AccordionContent>
                Adipisicing cupidatat laboris ea ad cupidatat aute proident
                ipsum deserunt minim culpa. Occaecat aliqua anim consectetur
                magna labore mollit do laborum aute cillum. Quis ut aliquip sunt
                nulla velit qui. Mollit incididunt qui reprehenderit magna esse
                nulla ad commodo duis dolor anim occaecat aliquip consectetur.
                Magna adipisicing cillum do exercitation sit sint adipisicing
                consectetur non consequat ullamco anim excepteur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* <div className="flex items-center justify-center lg:col-span-1">
          <img
            src="/path/to/your/image.jpg"
            alt="Descriptive alt text"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:col-span-1">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Talent acquisition</AccordionTrigger>
              <AccordionContent>
                Ad enim sint quis occaecat non sit sunt non sint ullamco ut
                adipisicing minim. Id pariatur deserunt velit incididunt ullamco
                ex eiusmod qui ea minim enim. Eu et nisi dolor elit velit
                consectetur ad aute.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>People and culture</AccordionTrigger>
              <AccordionContent>
                Nostrud aliquip non sint qui magna duis labore. Veniam est dolor
                ipsum fugiat mollit voluptate aliquip minim sint eu consectetur
                magna velit minim. Pariatur tempor excepteur nisi aliquip esse
                labore labore enim. Excepteur occaecat fugiat est adipisicing
                incididunt veniam eiusmod Lorem nulla. Laboris ea irure veniam
                incididunt esse. Qui consequat sint non voluptate mollit ad sint
                non veniam ea minim nisi ullamco reprehenderit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Efficient recruitment</AccordionTrigger>
              <AccordionContent>
                Adipisicing cupidatat laboris ea ad cupidatat aute proident
                ipsum deserunt minim culpa. Occaecat aliqua anim consectetur
                magna labore mollit do laborum aute cillum. Quis ut aliquip sunt
                nulla velit qui. Mollit incididunt qui reprehenderit magna esse
                nulla ad commodo duis dolor anim occaecat aliquip consectetur.
                Magna adipisicing cillum do exercitation sit sint adipisicing
                consectetur non consequat ullamco anim excepteur.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
};

export default EUI;
