import { Story } from "@storybook/react";
import React from "react";
import ExampleComponent from ".";
import { ExampleComponentProps } from "./index.types";

export default {
  title: "ExampleComponent",
};

const ExampleComponentStory: Story<ExampleComponentProps> = (args) => (
  <ExampleComponent {...args} />
);

export const EyesMoji = ExampleComponentStory.bind({ emoji: "👀" });
export const LikeMoji = ExampleComponentStory.bind({ emoji: "👍" });
export const HeartMoji = ExampleComponentStory.bind({ emoji: "❤️" });
export const SmileMoji = ExampleComponentStory.bind({ emoji: "😀" });
