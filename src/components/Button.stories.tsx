import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import { Button, ButtonProps } from "./Button";

type StoryProps = ButtonProps & {
  label: string;
};

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<StoryProps> = ({ label, ...args }) => (
  <Button {...args} onClick={action("clicked")}>
    {label}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true,
};
