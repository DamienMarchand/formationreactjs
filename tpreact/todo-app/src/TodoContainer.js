import React, { Component } from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// TODO : Un exemple est disponible dans le repo dont le lien est page 43 du PDF de TP
/**
 * Composant où sont gérés les appels pour manager les données
 */
class TodoContainer extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            listTodo: [
                {id: 1, title : 'Send a mail', isDone: false},
                {id: 2, title : 'Develop', isDone: true},
                {id: 3, title : 'Test', isDone: true},
                {id: 4, title : 'Take a beer', isDone: false}
            ]
        };*/

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoTitle) {
        this.setState((prevState) => ({
            listTodo: [...prevState.listTodo, {id : prevState.listTodo.length + 1, title : todoTitle, isDone: false}]
        }));
    }

    removeTodo() {
        this.setState(() => ({
            listTodo: []
        }));
    }

    render() {
        return (
            <div>
                <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo}/>
                <TodoList listTodo={this.state.listTodo}>
                </TodoList>
            </div>
        );
    }
}

export default TodoContainer;
