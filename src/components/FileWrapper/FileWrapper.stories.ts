import type { Meta, StoryObj } from "@storybook/react";
import { FileWrapper } from ".";

const meta: Meta<typeof FileWrapper> = {
  title: "Components/FileWrapper",
  component: FileWrapper,
};

export default meta;

type Story = StoryObj<typeof FileWrapper>;

export const Default: Story = {
  args: {},
};
