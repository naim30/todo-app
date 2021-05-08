import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  return (
    <input
      className={classes.Input}
      type="text"
      placeholder="Write a todo... + Enter"
      onKeyUp={props.onEnter}
    />
  );
};

export default input;
