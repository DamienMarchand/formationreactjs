import React from 'react';
import TrainingItem from "./TrainingItem";
import TrainingTitle from "./TrainingTitle";

class TrainingList extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        console.log("TrainingList shouldComponentUpdate");
        console.log(this.props.name);
        return true;
    }

    render() {
        return (
            <div>
                <TrainingTitle/>
                <TrainingItem name="React.js"/>
                <TrainingItem name="React Native"/>
                <TrainingItem name="Angular"/>
                <TrainingItem name="Typescript"/>
            </div>
        );
    }
}

export default TrainingList;