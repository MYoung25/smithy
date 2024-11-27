import React from "react";

import { Section, type SectionProps } from "@/components/ui/Section";

interface CircleSectionProps extends SectionProps {
  circleUrls: string[];
}

export const CircleSection = (props: CircleSectionProps) => {
  return (
    <Section
      title={props.title}
      description={props.description}
      className="bg-smithy-light-gray text-smithy-black p-4 lg:p-8"
    >
      <div className="flex flex-row gap-8 lg:gap-16 flex-wrap justify-center lg:justify-start">
        {props.circleUrls.map((url) => (
          <div key={url} className="flex justify-center">
            <img src={url} className="h-20 w-20 rounded-full bg-white" />
          </div>
        ))}
      </div>
      {props.action}
    </Section>
  );
};
