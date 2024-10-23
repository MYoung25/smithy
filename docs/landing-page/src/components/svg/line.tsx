import React, { useRef, useEffect, RefObject } from 'react';

import { SVG } from './svg';
import { useResizeObserver } from './useResizeObserver';

interface LineConnectorProps {
  startComponent: RefObject<HTMLElement>;
  endComponent: RefObject<HTMLElement>;
}

export const LineConnector: React.FC<LineConnectorProps> = ({ startComponent, endComponent }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const size = useResizeObserver();

  useEffect(() => {
    const startRect = startComponent.current?.getBoundingClientRect();
    const endRect = endComponent.current?.getBoundingClientRect();

    if (!startRect || !endRect) {
      return;
    }

    // Calculate the start and end points of the line
    const startX = startRect.left + startRect.width / 2;
    const startY = startRect.bottom;
    const endX = endRect.left + endRect.width / 2;
    const endY = endRect.top;

    // Update the SVG line
    const line = svgRef.current?.querySelector('line');
    if (line) {
      line.setAttribute('x1', startX.toString());
      line.setAttribute('y1', startY.toString());
      line.setAttribute('x2', endX.toString());
      line.setAttribute('y2', endY.toString());
    }
  }, [startComponent, endComponent, size]);

  return (
    <SVG ref={svgRef}>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="0"
        stroke="hsl(var(--smithy-gradient-midpoint))"
        strokeWidth="1"
      />
    </SVG>
  );
};
