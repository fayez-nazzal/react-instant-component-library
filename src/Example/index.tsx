import React from "react";
import "./index.css";
import { ReactComponent as CoffeIcon } from "./coffee.svg";
import { css } from "../../styled-system/css";

const ExampleComponent = () => (
  <h1 className={css({ fontSize: 18 })}>
    Edit me! and have a nice <CoffeIcon /> while building!
  </h1>
);

export default ExampleComponent;
