import React from 'react';

import TodoItem from './TodoItem';
import { addTodo, loadTodos } from './store/todo.action';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  displayTodos() {
    if (this.props.loading) {
      return <p>Loading ....</p>;
    }

    return this.props.listTodo.map(todo => <TodoItem key={todo.id} title={todo.title} isDone={todo.isDone} />);
  }

  render() {
    const listItemsLength = this.props.listTodo.length;

    return (
      <div>
        <div>Items : {listItemsLength}</div>
        {
                    this.displayTodos()
                }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.list,
  loading: state.todos.loading,
});

const mapDispatchToProps = dispatch => ({
  addTodo: name => dispatch(addTodo(name)),
  loadTodos: () => dispatch(loadTodos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
