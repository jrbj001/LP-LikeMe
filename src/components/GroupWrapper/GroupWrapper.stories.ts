import type { Meta, StoryObj } from "@storybook/react";
import { GroupWrapper } from ".";

const meta: Meta<typeof GroupWrapper> = {
  title: "Components/GroupWrapper",
  component: GroupWrapper,
};

export default meta;

type Story = StoryObj<typeof GroupWrapper>;

export const Default: Story = {
  args: {
    className: {},
  },
};
