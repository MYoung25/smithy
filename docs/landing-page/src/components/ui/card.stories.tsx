import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps } from './card';

const meta = {
  title: 'Smithy/ui/Card',
  component: (props) => {
    // console.log(props)
    return (<Card {...props}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="w-48 h-10 bg-smithy-gray p-1 flex flex-row">
        <div className="w-1/4 h-full bg-smithy-pink"/>
        <div className="w-1/4 h-full bg-smithy-burgundy"/>
        <div className="w-1/4 h-full bg-smithy-purple"/>
        <div className="w-1/4 h-full bg-smithy-magenta"/>
      </div>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>);
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gradient-border'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};
export const OutlineGradient: Story = {
  args: {
    variant: 'gradient-border',
  },
};
