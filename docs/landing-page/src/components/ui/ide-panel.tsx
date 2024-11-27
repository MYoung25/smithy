import React from "react";

import { cn } from "@/lib/utils";

const idePanelClasses =
  "inline-block w-fit border border-smithy-dark-gray rounded-xl before:content-['_'] before:block before:w-full before:h-5 before:border-b before:border-smithy-dark-gray";

export const IdePanel = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(idePanelClasses, props.className)}>{props.children}</div>
  );
};
