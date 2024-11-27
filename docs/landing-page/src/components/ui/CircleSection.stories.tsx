import type { Meta, StoryObj } from "@storybook/react";

import { CircleSection } from "./CircleSection";

const meta = {
  title: "Smithy/ui/CircleSection",
  component: CircleSection,
  args: {
    title: "hello world",
    description: "some random text",
    circleUrls: [
      "/icons/dark/swift.svg",
      "/icons/dark/javaScript.svg",
      "/icons/dark/rust.svg",
    ],
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CircleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
