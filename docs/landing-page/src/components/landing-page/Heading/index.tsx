import React from "react";
import { Tagline } from "./Tagline";
import { Quote } from "../Quote";
import { Diagram } from "./Diagram";
import { SmithyPopGradient } from "@/components/ui/SmithyPopGradient";
import { Section } from "@/components/ui/Section";
import { SmithyGlow } from "@/components/ui/SmithyGlow";
import { Button } from "@/components/ui/button";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IdePanel } from "@/components/ui/ide-panel";
import { ServiceExample } from "../ServiceExample";

interface HeadingProps {
  serviceExampleRef: React.RefObject<HTMLDivElement>;
}

export const Heading = (props: HeadingProps) => {
  return (
    <SmithyPopGradient withSparks>
      <div className="py-16 px-8 flex flex-col md:flex-row justify-between grow items-center">
        <Tagline />

        <Card
          variant={"default"}
          className="bg-white text-center mt-12 w-fit lg:w-auto lg:mt-0 lg:mr-12"
          ref={props.serviceExampleRef}
        >
          <CardHeader className="text-smithy-black">
            <div className="flex flex-col lg:w-[450px] lg:flex-row lg:justify-between lg:items-center">
              <div className="text-2xl m-auto mb-4 w-24 text-center lg:text-left text-smithy-purple lg:m-0">
                Smithy Service Example
              </div>
              <IdePanel>
                <ServiceExample />
              </IdePanel>
            </div>
          </CardHeader>
        </Card>
      </div>
    </SmithyPopGradient>
  );
};
