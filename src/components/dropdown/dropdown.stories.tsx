import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const StartCounterStory: Story = {
  render: () => (
    <>
      <Dropdown />
    </>
  ),
};
