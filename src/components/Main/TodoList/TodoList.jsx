import React, { Component } from "react";
import data from './todoItems.json';

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: data
    }
  }

  render() {
    return <div>TodoList</div>;
  }
}

export default TodoList;
