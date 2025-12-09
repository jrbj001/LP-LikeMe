import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from ".";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,

  argTypes: {
    state: {
      options: ["selected"],
      control: { type: "select" },
    },
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    sizes: {
      options: ["large"],
      control: { type: "select" },
    },
    type: {
      options: ["file", "activity"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    state: "selected",
    mode: "dark",
    sizes: "large",
    type: "file",
    className: {},
  },
};
