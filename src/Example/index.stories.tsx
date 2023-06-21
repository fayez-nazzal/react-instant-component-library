import React from "react";
import ExampleComponent from ".";
import "./index.css";

export default {
  title: "Example Component!",
};

const ExampleComponentStory = (args) => <ExampleComponent {...args} />;

export const Example = ExampleComponentStory.bind({});
Example.args = {
  emoji: "👀",
};
