import React, { useCallback, useMemo } from "react";

type Coords = {
  x: number;
  y: number;
};

export interface SpiderProps {
  height: number;
  width: number;
  connections: { start: Coords; end: Coords; curveLevel?: number }[];
}

export const Spider = (props: SpiderProps) => {
  /**
   * curveLevel is the amount of curve present in the line, 2 is roughly vertical
   */
  const connect = useCallback(
    (start: Coords, end: Coords, curveLevel: number = 2) => {
      const paths: React.ReactNode[] = [];

      const distanceBetweenPoints = Math.sqrt(
        Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2),
      );

      const midpoint = {
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2,
      };
      const offset = distanceBetweenPoints / curveLevel;

      paths.push(
        <path
          key={JSON.stringify(start)}
          d={`M ${start.x} ${start.y} C ${start.x} ${start.y}, ${start.x} ${midpoint.y - offset}, ${midpoint.x} ${midpoint.y}`}
          stroke="url(#topGradient)"
          fill="transparent"
        />,
      );
      paths.push(
        <path
          key={JSON.stringify(end)}
          d={`M ${end.x} ${end.y} C ${end.x} ${end.y}, ${end.x} ${midpoint.y + offset}, ${midpoint.x} ${midpoint.y}`}
          stroke="url(#gradient)"
          fill="transparent"
        />,
      );

      return paths;
    },
    [],
  );

  const paths = useMemo(() => {
    return props.connections.map((connection) => {
      return connect(connection.start, connection.end, connection.curveLevel);
    });
  }, [props.connections]);

  return (
    <svg height={props.height} width={props.width} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="topGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop
            offset="100%"
            stopColor="hsl(var(--smithy-gradient-midpoint))"
          />
        </linearGradient>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="hsl(var(--smithy-gradient-midpoint))" />
          <stop offset="100%" stopColor="hsl(var(--smithy-pink))" />
        </linearGradient>
      </defs>
      {paths}
    </svg>
  );
};
