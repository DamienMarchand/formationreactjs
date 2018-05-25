import React from 'react';

import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Render list");
        const listItems = this.props.listTodo.map((todo) => <TodoItem key={todo.id} title={todo.title} isDone={todo.isDone} />);
        const listItemsLength = this.props.listTodo.length;

        return (
            <div>
                <div>Items : {listItemsLength}</div>
                <ul>{listItems}</ul>
                {/*<div>
                    {this.props.children}
                </div>*/}
            </div>
        );
    }
}

// Mock des todos
/*const todos = [
    {id: 1, title : 'Send a mail', isDone: false},
    {id: 2, title : 'Develop', isDone: true},
    {id: 3, title : 'Test', isDone: true},
    {id: 4, title : 'Take a beer', isDone: false}
];*/

export default TodoList;
