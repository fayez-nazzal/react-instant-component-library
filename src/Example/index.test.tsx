import React from "react";
import { render } from "@testing-library/react";
import ExampleComponent from ".";

describe("Test Component", () => {
  const emoji = "hello";

  it(`shows ${emoji}`, () => {
    const { getByText } = render(<ExampleComponent emoji={emoji} />);

    expect(getByText(/hello/)).toBeInTheDocument();
  });
});
