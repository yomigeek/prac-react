import React, { Component } from 'react'

export default class AddTodo extends Component {
  state ={
    title: ''
  }

  formHandler = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  
  submitForm = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          placeholder="Add Todo ..."
          name="title"
          value={this.state.title}
          onChange={this.formHandler}
        />
        <input 
          type="submit" 
          value="Submit"
          className="btn" 
        />
      </form>
    )
  }
}
