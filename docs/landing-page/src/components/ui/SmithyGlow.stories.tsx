import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SmithyGlow } from "./SmithyGlow";

const meta = {
  title: "Smithy/ui/SmithyGlow",
  component: () => {
    return (
      <SmithyGlow className="w-full h-96">
        <h1 className="">Header</h1>
        <div>hello world</div>
      </SmithyGlow>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SmithyGlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
