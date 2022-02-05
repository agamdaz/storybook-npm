import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import { Button, ButtonProps } from "./Button";

type StoryProps = ButtonProps & {
  text: string;
};

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<StoryProps> = ({ text, ...args }) => (
  <Button {...args} onClick={action(`${text} clicked`)} title={text}>
    {text}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  text: "Default button",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  text: "Primary button",
};
