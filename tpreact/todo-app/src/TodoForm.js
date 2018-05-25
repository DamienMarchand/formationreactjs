import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ todoTitle: event.target.value });
  }

  handleValidation() {
    console.log('handleValidation', this.state);
    // Appel du callback pour mettre à jour la liste
    this.props.addTodo(this.state.todoTitle);
    this.setState(() => ({
      todoTitle: '',
    }));
  }

  handleRemoveClick() {
    this.props.removeTodo();
  }

  render() {
    return (
      <div>
                Titre : <input type="text" name="todoTitle" value={this.state.todoTitle} onChange={this.handleChangeTitle} />
        <input type="button" onClick={this.handleValidation} value="Add" />
        <input type="button" onClick={this.handleRemoveClick} value="Remove" />
      </div>
    );
  }
}

export default TodoForm;

