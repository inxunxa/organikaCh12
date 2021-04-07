import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoText: "",
    todos: [],
  };

  render() {
    return (
      <div>
        <h5>Simple todo app</h5>

        <div>
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.handleTextChange}
            placeholder="Todo text"
          ></input>
          <button onClick={this.addTodo}>Add</button>
        </div>

        <div>
          <ul>
            {this.state.todos.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  handleTextChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = () => {
    // dispatch the action, send the text as payload
    // this.props.actionNameHere(this.state.todoText)
  };
}

// create the mapStateToProps


// connect the component
export default Todo;
