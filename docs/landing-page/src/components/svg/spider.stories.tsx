import type { Meta, StoryObj } from "@storybook/react";

import { Spider } from "./spider";

const meta = {
  title: "Smithy/svg/Spider",
  component: Spider,
  parameters: {
    layout: "centered",
  },
  args: {
    height: 200,
    width: 200,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    connections: [
      { start: { x: 50, y: 2 }, end: { x: 1, y: 70 }, curveLevel: 8 },
      { start: { x: 50, y: 2 }, end: { x: 30, y: 70 }, curveLevel: 8 },
      { start: { x: 50, y: 2 }, end: { x: 70, y: 70 }, curveLevel: 8 },
      { start: { x: 50, y: 2 }, end: { x: 99, y: 70 }, curveLevel: 8 },
    ],
  },
};
export const Short: Story = {
  args: {
    connections: [
      { start: { x: 50, y: 2 }, end: { x: 1, y: 40 }, curveLevel: 8 },
      { start: { x: 50, y: 2 }, end: { x: 30, y: 40 }, curveLevel: 8 },
      { start: { x: 50, y: 2 }, end: { x: 70, y: 40 }, curveLevel: 8 },
      { start: { x: 50, y: 2 }, end: { x: 99, y: 40 }, curveLevel: 8 },
    ],
  },
};
export const MoreLinear: Story = {
  args: {
    connections: [
      { start: { x: 50, y: 2 }, end: { x: 1, y: 70 }, curveLevel: 4 },
      { start: { x: 50, y: 2 }, end: { x: 30, y: 70 }, curveLevel: 4 },
      { start: { x: 50, y: 2 }, end: { x: 70, y: 70 }, curveLevel: 4 },
      { start: { x: 50, y: 2 }, end: { x: 99, y: 70 }, curveLevel: 4 },
    ],
  },
};
export const MoreCurvy: Story = {
  args: {
    connections: [
      { start: { x: 50, y: 2 }, end: { x: 1, y: 70 }, curveLevel: 24 },
      { start: { x: 50, y: 2 }, end: { x: 30, y: 70 }, curveLevel: 24 },
      { start: { x: 50, y: 2 }, end: { x: 70, y: 70 }, curveLevel: 24 },
      { start: { x: 50, y: 2 }, end: { x: 99, y: 70 }, curveLevel: 24 },
    ],
  },
};
