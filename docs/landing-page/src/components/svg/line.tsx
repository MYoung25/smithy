import React, { useRef, useEffect, RefObject } from "react";

import { SVG } from "./svg";
import { useResizeObserver } from "./useResizeObserver";

interface LineConnectorProps {
  startComponent: RefObject<HTMLElement>;
  endComponent: RefObject<HTMLElement>;
  lineColor?: string;
}

type LineDetails = {
  start: {
    x: number;
    y: number;
  };
  end: {
    x: number;
    y: number;
  };
  color: string;
};

function getCoordinates(startRect: DOMRect, endRect: DOMRect): LineDetails {
  const start = {
    x: startRect.left + startRect.width / 2,
    y: startRect.top + startRect.height / 2,
  };

  const end = {
    x: endRect.left + endRect.width / 2,
    y: endRect.top + endRect.height / 2,
  };

  let color = "hsl(var(--primary)";

  if (startRect.top > endRect.bottom) {
    start.y = startRect.top;
    end.y = endRect.bottom;
  }
  if (startRect.bottom < endRect.top) {
    start.y = startRect.bottom;
    end.y = endRect.top;
  }

  if (startRect.left > endRect.right) {
    start.x = startRect.left;
    end.x = endRect.right;
  }
  if (startRect.right < endRect.left) {
    start.x = startRect.right;
    end.x = endRect.left;
  }

  // ignore "roughly vertical lines"
  if (Math.abs(start.x - end.x) < 10) {
    color = "hsl(var(--smithy-gradient-midpoint))";
  }

  // ignore "roughly vertical lines"
  if (start.x - end.x > 20) {
    color = "url(#lineGradient)";
  }
  if (end.x - start.x > 20) {
    color = "url(#lineGradientTwo)";
  }

  return {
    start,
    end,
    color,
  };
}

export const LineConnector: React.FC<LineConnectorProps> = ({
  startComponent,
  endComponent,
  lineColor,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const size = useResizeObserver();

  useEffect(() => {
    const startRect = startComponent.current?.getBoundingClientRect();
    const endRect = endComponent.current?.getBoundingClientRect();

    if (!startRect || !endRect) {
      return;
    }

    const { start, end, color } = getCoordinates(startRect, endRect);

    // Update the SVG line
    const line = svgRef.current?.querySelector("line");
    if (line) {
      line.setAttribute("x1", start.x.toString());
      // the 0.001 allows a horizontal line to display a gradient
      // see https://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox for the spec
      line.setAttribute("y1", (start.y + 0.001).toString());
      line.setAttribute("x2", end.x.toString());
      line.setAttribute("y2", end.y.toString());
      line.setAttribute("stroke", lineColor || color);
    }
  }, [startComponent, endComponent, size]);

  return (
    <SVG ref={svgRef}>
      <defs>
        <linearGradient id="lineGradient">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--smithy-pink))" />
        </linearGradient>
        <linearGradient id="lineGradientTwo">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--smithy-pink))" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="0"
        stroke={"hsl(var(--smithy-gradient-midpoint))"}
        strokeWidth="1"
      />
    </SVG>
  );
};
