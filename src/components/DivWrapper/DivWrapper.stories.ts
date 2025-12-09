import type { Meta, StoryObj } from "@storybook/react";
import { DivWrapper } from ".";

const meta: Meta<typeof DivWrapper> = {
  title: "Components/DivWrapper",
  component: DivWrapper,
};

export default meta;

type Story = StoryObj<typeof DivWrapper>;

export const Default: Story = {
  args: {
    className: {},
  },
};
