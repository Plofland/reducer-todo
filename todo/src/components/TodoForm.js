import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    return (
      <div className="todoForm">
        <form>
          <label>
            Title:
            <input />
          </label>
          <button>Submit Todo</button>
        </form>
      </div>
    );
  }
}
