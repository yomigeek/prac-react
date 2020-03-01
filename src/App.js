import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.scss';
import AddTodo from './components/AddTodo';
import * as uuid from 'uuid';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Take out the trash',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Burn the bushes',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Watch the toilet',
				completed: false
			}
		]
	};

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	delTodo = (id) => {
		this.setState({
			todos: [ ...this.state.todos.filter((todo) => todo.id !== id) ]
		});
	};

	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		};
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		return (
				<div className="App">
					<div className="container">
						<Header />
						<AddTodo addTodo={this.addTodo} />
						<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
					</div>
				</div>
		);
	}
}

export default App;
