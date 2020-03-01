import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    const { todos, markComplete, delTodo } = this.props;
    return (
      todos.map((todo) => ( 
        <TodoItem 
          key={todo.id} 
          todo={todo}
          markComplete={markComplete}
          delTodo={delTodo}
        />
      // <div><h3>{todos.title}</h3></div>
      ))
    );
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Todos;
