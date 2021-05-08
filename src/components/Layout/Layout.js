import React from "react";

import classes from "./Layout.module.css";
import TodoList from "../../containers/TodoList/TodoList";

const layout = (props) => {
  return (
    <div className={classes.Layout}>
      <TodoList />
    </div>
  );
};

export default layout;
