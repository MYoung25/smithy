import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineConnector } from "@/components/svg/line";
import { Arrow } from "@/components/svg/arrow";
import { Spider } from "@/components/svg/spider";

export const Diagram = () => {
  const modelRef = useRef<HTMLDivElement>(null);
  const serviceExampleRef = useRef<HTMLDivElement>(null);
  const smithyBuildRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const waterRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col justify-center items-center w-1/2 pt-20">
      <Card
        variant={"gradient-border"}
        className="bg-smithy-gray text-center"
        ref={modelRef}
      >
        <CardHeader>
          <CardTitle>Model</CardTitle>
        </CardHeader>
      </Card>
      <div className="mt-32">
        <Card
          variant={"gradient-border"}
          className="bg-smithy-gray text-center"
          ref={serviceExampleRef}
        >
          <CardHeader>
            <CardTitle>Service Example</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-20">
        <Card
          variant={"gradient-border"}
          className="bg-smithy-gray text-center"
          ref={smithyBuildRef}
        >
          <CardHeader>
            <CardTitle>
              <code>&gt; smithy build</code>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="flex flex-row justify-between w-full mt-20">
        <Card ref={sunRef} variant={"gradient-border"}>
          <CardHeader>
            <CardTitle>Sun</CardTitle>
          </CardHeader>
        </Card>
        <Card ref={moonRef} variant={"gradient-border"}>
          <CardHeader>
            <CardTitle>Moon</CardTitle>
          </CardHeader>
        </Card>
        <Card ref={earthRef} variant={"gradient-border"}>
          <CardHeader>
            <CardTitle>Earth</CardTitle>
          </CardHeader>
        </Card>
        <Card ref={waterRef} variant={"gradient-border"}>
          <CardHeader>
            <CardTitle>Water</CardTitle>
          </CardHeader>
        </Card>

        <LineConnector
          startComponent={modelRef}
          endComponent={serviceExampleRef}
        />

        <Arrow
          startComponent={serviceExampleRef}
          endComponent={smithyBuildRef}
        />

        <Spider
          startComponent={smithyBuildRef}
          endComponents={[sunRef, moonRef, earthRef, waterRef]}
        />
      </div>
    </div>
  );
};
