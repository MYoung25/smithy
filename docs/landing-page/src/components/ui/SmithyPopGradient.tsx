import React from "react";

import { cn } from "@/lib/utils";

// from is bottom right
// to is top left
const gradientPopClasses =
  "from-smithy-magenta/95 via-smithy-purple/95 to-smithy-burgundy/95 bg-[linear-gradient(-20deg,var(--tw-gradient-stops))]";

export const SmithyPopGradient = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  return (
    <div className={cn(gradientPopClasses, props.className)}>
      {props.children}
    </div>
  );
};
