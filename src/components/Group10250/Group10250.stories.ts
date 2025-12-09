import type { Meta, StoryObj } from "@storybook/react";
import { Group10250 } from ".";

const meta: Meta<typeof Group10250> = {
  title: "Components/Group10250",
  component: Group10250,
};

export default meta;

type Story = StoryObj<typeof Group10250>;

export const Default: Story = {
  args: {
    className: {},
  },
};
