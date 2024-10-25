import React from "react";
import { Tagline } from "./Tagline";
import { Diagram } from "./Diagram";
import { SmithyPopGradient } from "@/components/ui/SmithyPopGradient";
import { Section } from "@/components/ui/Section";
import { SmithyGlow } from "@/components/ui/SmithyGlow";

export const Hero = () => {
  return (
    <>
      <SmithyPopGradient className="absolute top-[var(--nav-offset)] h-[23rem] w-full -z-10" />
      <div className="absolute top-[var(--nav-offset)] h-[23rem] w-full -z-10"></div>
      <div className="flex flex-row flex-wrap w-view pt-[var(--nav-offset)]">
        <div className="flex flex-col lg:w-1/2 p-8">
          <Tagline />
          <div className="pt-36" />
          <Section title="hello world" description="lorem ipsum" />
          <div className="pt-36" />
          <Section title="hello world" description="lorem ipsum" />
        </div>
        <div className="flex flex-col lg:w-1/2 p-8 text-foreground min-w-96 justify-center text-center mb-8 ">
          <Diagram />
          {/* Diagram goes here... */}
        </div>
      </div>
      {/* <div className="flex flex-col bg-gray-100">
        <div className="dark py-32 smithy-glow">
          <Tagline />
        </div>
          <Diagram />
      </div> */}

      <div className="text-smithy-gray bg-smithy-light-gray w-full h-96 pt-12 pl-6">
        <Section title="hello world" description="lorem ipsum">
          <div className="flex flex-row flex-wrap justify-around gap-8">
            <div className="rounded-full bg-white h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-white h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-white h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-white h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-white h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-white h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-background text-foreground pt-12 pb-24">
        <SmithyGlow className="min-h-36 text-center">
          <h4 className="text-2xl">Trusted by</h4>
          <div className="flex flex-row justify-around pt-16 pb-28">
            <div className="rounded-full bg-smithy-light-gray text-background h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-smithy-light-gray text-background h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
            <div className="rounded-full bg-smithy-light-gray text-background h-16 w-16 flex flex-col justify-center text-center">
              Circle!
            </div>
          </div>
        </SmithyGlow>
      </div>

      <footer className="bg-background text-foreground">Hello?</footer>
    </>
  );
};
