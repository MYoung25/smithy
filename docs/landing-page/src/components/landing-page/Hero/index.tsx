import React from "react";
import { Tagline } from "./Tagline";
import { Diagram } from "./Diagram";

export const Hero = () => {
  return (
    <>
      <div className="absolute top-[var(--nav-offset)] h-[23rem] w-full smithy-glow -z-10"></div>
      <div className="flex flex-row flex-wrap w-view">
        <div className="flex flex-col lg:w-1/2 p-8">
          <Tagline />
        </div>
        <div className="flex flex-col lg:w-1/2 p-8">
          <Diagram />
        </div>
      </div>
      {/* <div className="flex flex-col bg-gray-100">
        <div className="dark py-32 smithy-glow">
          <Tagline />
        </div>
          <Diagram />
      </div> */}
    </>
  );
};
