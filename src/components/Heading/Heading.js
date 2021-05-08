import React from "react";

import classes from "./Heading.module.css";

const heading = (props) => {
  return (
    <input
      onChange={props.changed}
      value={props.value}
      className={classes.Heading}
      type="text"
      placeholder="Title"
    />
  );
};

export default heading;
