import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import { Button, ButtonProps } from "./Button";

type StoryProps = ButtonProps & {
  children: string;
};

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<StoryProps> = (args) => {
  const { children, ...props } = args;
  return <Button {...props}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  onClick: action("Default button clicked"),
  children: "Default button",
  title: "Default button",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  onClick: action("Primary button clicked"),
  children: "Primary button",
  title: "Primary button",
};
