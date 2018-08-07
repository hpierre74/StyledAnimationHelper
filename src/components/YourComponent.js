import React from "react";
import withAnim from "./withAnim.hoc";

const YourComponent = props => (
  <div style={{ padding: "2.5%" }}>
    I'm a random component, I {props.animation}
  </div>
);

export default withAnim(YourComponent);
