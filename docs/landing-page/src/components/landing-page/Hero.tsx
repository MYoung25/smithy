import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SmithyGlow } from "@/components/ui/SmithyGlow"

export const Hero = () => {
  return (<>
    <div className="dark py-20 flex flex-row w-full justify-around smithy-glow">
      <div>
        <h1 className="text-smithy-pink">Hero</h1>
      </div>
      <Card variant={"gradient-border"} className="bg-smithy-gray">
        <div className="px-10">
          <CardHeader>
            <CardTitle>Model</CardTitle>
          </CardHeader>
        </div>
      </Card>
    </div>
  </>
  );
};
