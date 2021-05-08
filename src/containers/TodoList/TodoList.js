import React, { Component } from "react";

import classes from "./TodoList.module.css";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";

class TodoList extends Component {
  state = {
    heading: "",
    todoList: [],
  };

  headingHandler = (e) => {
    let heading = e.target.value;
    let updatedHeading = heading
      ? heading.replace(e.target.value[0], e.target.value[0].toUpperCase())
      : "";
    this.setState({
      heading: updatedHeading,
    });
  };

  addTodoHandler = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let todoArr = [...this.state.todoList];
      todoArr.push(e.target.value, false);
      e.target.value = "";
      this.setState({ todoList: todoArr });
    }
  };

  checkedHandler = (e, i) => {
    if (e.target.checked) {
      let todoArr = [...this.state.todoList];
      todoArr[i + 1] = true;
      this.setState({ todoList: todoArr });
    } else {
      let todoArr = [...this.state.todoList];
      todoArr[i + 1] = false;
      this.setState({ todoList: todoArr });
    }
  };

  render() {
    let progress =
      (this.state.todoList.reduce((a, item) => {
        if (item === true) {
          return (a = a + 1);
        } else {
          return a;
        }
      }, 0) /
        (this.state.todoList.length / 2)) *
      100;

    let style = {
      width: isNaN(progress) ? "0%" : progress + "%",
    };

    return (
      <div className={classes.Container}>
        <div style={style} className={classes.Progressbar}></div>
        <div className={classes.TodoList}>
          <Heading
            value={this.state.heading}
            changed={(event) => this.headingHandler(event)}
          />
          <List todoList={this.state.todoList} checked={this.checkedHandler} />
          <Input onEnter={(event) => this.addTodoHandler(event)} />
        </div>
      </div>
    );
  }
}

export default TodoList;
