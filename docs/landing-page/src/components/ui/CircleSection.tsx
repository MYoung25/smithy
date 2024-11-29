import React from "react";
import { cn } from "@/lib/utils";
import { Section, type SectionProps } from "@/components/ui/Section";

export interface CircleSectionProps extends SectionProps {
  circleUrls: React.ImgHTMLAttributes<HTMLImageElement>[];
}

export const CircleSection = (props: CircleSectionProps) => {
  return (
    <Section
      title={props.title}
      description={props.description}
      className="bg-smithy-light-gray text-smithy-black p-4 lg:p-8"
    >
      <div className="flex flex-row gap-8 lg:gap-16 flex-wrap justify-center lg:justify-start">
        {props.circleUrls.map((imgProps) => (
          <div
            key={imgProps.src}
            className="flex justify-center bg-[rgb(241,239,237)] rounded-full"
          >
            <img
              {...imgProps}
              className={cn("h-20 w-20 p-4 ", imgProps.className)}
            />
          </div>
        ))}
      </div>
      {props.action}
    </Section>
  );
};
