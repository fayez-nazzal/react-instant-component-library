import React from "react";

import { ExampleComponentProps } from "./index.types";
import { ReactComponent as RollupLogo } from "./rollup.svg";

import "./index.styles.scss";

const ExampleComponent: React.FC<ExampleComponentProps> = ({ emoji, icon }) => (
  <div>
    <h1 className="title">
      <RollupLogo style={{ marginRight: 8 }} />
      Welcome to <span>react-rollup-component-library</span> {emoji}
      {!!icon && <div style={{ marginTop: "8px" }}>Prop Icon: {icon}</div>}
    </h1>
  </div>
);

export default ExampleComponent;
