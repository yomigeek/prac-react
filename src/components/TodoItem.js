import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
    const { completed } = this.props.todo;
      return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: completed ? 'line-through' : 'none'
      }
  }
  render() {
    const { todo, markComplete, delTodo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input 
            type='checkbox' 
            onChange={markComplete.bind(this, todo.id)}
          />
          {' '}
          {todo.title}
          <button 
          style={buttonStyle} 
          onClick={delTodo.bind(this, todo.id)}>
            x
          </button>
        </p>
      </div>
    )
  }
}

const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  borderRadius: '50%',
  border: 'none',
  padding: '5px 8px',
  cursor: 'pointer',
  float: 'right',
  fontSize: '10px'
}

export default TodoItem
