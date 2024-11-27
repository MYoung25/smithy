import React from "react";

import { cn } from "@/lib/utils";

const gradientPopClasses = "";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  return (
    <section className={cn(gradientPopClasses, props.className)}>
      <h3 className="text-3xl pb-4">{props.title}</h3>
      <p className="text-md pb-4">{props.description}</p>
      {props.children}
      {props.action}
    </section>
  );
};
