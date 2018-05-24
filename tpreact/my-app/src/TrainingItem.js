import React from 'react';

class TrainingItem extends React.Component {
    constructor(props) {
        super(props);
        this.openTraining = this.openTraining.bind(this);
    }

    componentDidMount() {
        console.log(this.props.name);
    }

    shouldComponentUpdate() {
        console.log("TrainingItem shouldComponentUpdate");
        console.log(this.props.name);
        return true;
    }

    openTraining(event) {
        console.log(event.nativeEvent.type);
        alert(this.props.name);
    }

    render() {
        const showItem = this.props.name !== 'Angular' && (<div onClick={this.openTraining}>{this.props.name}</div>);

        return (
            <div>
                {showItem}
            </div>
        );
    }
}


export default TrainingItem;
