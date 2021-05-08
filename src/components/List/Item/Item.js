import React from "react";

import classes from "./Item.module.css";

const item = (props) => {
  return (
    <div className={classes.Item}>
      <input type="checkbox" onClick={props.onchecked} />
      <div className={props.checked ? classes.checked : ""}>{props.name}</div>
    </div>
  );
};

export default item;
