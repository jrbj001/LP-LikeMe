import type { Meta, StoryObj } from "@storybook/react";
import { Group } from ".";

const meta: Meta<typeof Group> = {
  title: "Components/Group",
  component: Group,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};
