import React from "react";
import ExampleComponent from ".";

export default {
  title: "Example Component!",
};

const ExampleComponentStory = (args) => <ExampleComponent {...args} />;

export const Example = ExampleComponentStory.bind({});
