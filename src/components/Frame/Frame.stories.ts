import type { Meta, StoryObj } from "@storybook/react";
import { Frame } from ".";

const meta: Meta<typeof Frame> = {
  title: "Components/Frame",
  component: Frame,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Frame>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
    groupClassName: {},
    likeMe: "/img/like-me-11.svg",
    vectorClassName: {},
    vector: "/img/vector-3.svg",
    navigation: "/img/navigation-components.svg",
  },
};
