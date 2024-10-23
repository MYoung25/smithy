import React from 'react';

import { cn } from '@/lib/utils';

const glowClasses = "smithy-glow";

export const SmithyGlow = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(glowClasses, props.className)}
    >
      { props.children }
    </div>
  )
}
