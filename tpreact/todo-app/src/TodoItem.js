import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        isDone: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {isDone: props.isDone};
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }


    handleCheckboxChange(event) {
        this.setState((prevState) => ({isDone: !prevState.isDone}));
    }

    render() {
        const title = this.state.isDone ? <del>{this.props.title.toUpperCase()}</del> : <span>{this.props.title.toUpperCase()}</span>;
        const showItem = <div> {title} <input type="checkbox" name={this.props.title} checked={this.state.isDone} onChange={this.handleCheckboxChange}/> </div>;

        return (
            <div>
                {showItem}
            </div>
        );
    }
}

export default TodoItem;
