import React, { Component } from 'react';

export default class TodoForm extends Component {
  state = {
    inputText: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddTodo(this.state.inputText);
  };

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    });
  };

  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
              placeholder="Enter a Task"
            />
          </label>
          <button>Submit Todo</button>
        </form>
      </div>
    );
  }
}
