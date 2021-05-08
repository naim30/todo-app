import React from "react";

import Item from "./Item/Item";

const list = (props) => {
  let itemArr = props.todoList.map((item, i, arr) => {
    if (i % 2 === 0) {
      return (
        <Item
          name={item}
          key={i}
          checked={arr[i + 1]}
          onchecked={(event) => props.checked(event, i)}
        />
      );
    }
    return null;
  });

  return itemArr;
};

export default list;
