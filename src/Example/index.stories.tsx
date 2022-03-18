import { Story } from "@storybook/react";
import React from "react";
import ExampleComponent from ".";
import { ExampleComponentProps } from "./index.types";
import { ReactComponent as CoffeeIcon } from "./coffee.svg";

export default {
  title: "ExampleComponent",
};

const ExampleComponentStory: Story<ExampleComponentProps> = (args) => (
  <ExampleComponent {...args} />
);

export const EyesMoji = ExampleComponentStory.bind({});
EyesMoji.args = {
  emoji: "👀",
};

export const LikeMoji = ExampleComponentStory.bind({});
LikeMoji.args = {
  emoji: "👍",
};

export const WithCoffeeIcon = ExampleComponentStory.bind({});
WithCoffeeIcon.args = {
  emoji: "☕",
  icon: <CoffeeIcon style={{ width: 32, height: 32 }} />,
};
