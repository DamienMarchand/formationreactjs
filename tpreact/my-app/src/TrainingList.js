import React from 'react';
import TrainingItem from "./TrainingItem";
import TrainingTitle from "./TrainingTitle";

function TrainingList(props) {
    return (
        <div>
            <TrainingTitle />
            <TrainingItem name="React.js"/>
            <TrainingItem name="React Native"/>
            <TrainingItem name="Angular"/>
            <TrainingItem name="Typescript"/>
        </div>
    );
}

export default TrainingList;