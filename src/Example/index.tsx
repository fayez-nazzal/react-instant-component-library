import React from "react";
import "./index.css";
import { ReactComponent as CoffeIcon } from "./coffee.svg";
import { css } from "../../styled-system/css";

const ExampleComponent = () => (
  <h1
    className={css({
      fontSize: 18,
      display: "flex",
      gap: 2,
      alignItems: "center",
    })}
  >
    Edit me! and have a nice{" "}
    <CoffeIcon className={css({ width: 5, height: 5, fill: "#a56905" })} />{" "}
    while building!
  </h1>
);

export default ExampleComponent;
