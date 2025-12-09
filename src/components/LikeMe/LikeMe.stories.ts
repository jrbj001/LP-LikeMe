import type { Meta, StoryObj } from "@storybook/react";
import { LikeMe } from ".";

const meta: Meta<typeof LikeMe> = {
  title: "Components/LikeMe",
  component: LikeMe,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LikeMe>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
    likeMe: "/img/like-me-19.svg",
  },
};
