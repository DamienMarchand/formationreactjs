import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTitle: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({todoTitle: event.target.value});
    }

    handleValidation() {
        console.log('handleValidation', this.state);
        // Appel du callback pour mettre à jour la liste
        this.props.addTodo(this.state.todoTitle);
    }

    render() {
        return (
            <div>
                Titre : <input type="text" name="todoTitle"  onChange={this.handleChangeTitle}/>
                <input type="button" onClick={this.handleValidation} value="Add"/>
            </div>
        );
    }
}

export default TodoForm;

