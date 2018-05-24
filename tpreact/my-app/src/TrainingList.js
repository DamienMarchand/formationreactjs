import React from 'react';
import TrainingItem from "./TrainingItem";
import TrainingTitle from "./TrainingTitle";

class TrainingList extends React.Component {

    shouldComponentUpdate() {
        console.log("TrainingList shouldComponentUpdate");
        console.log(this.props.name);
        return true;
    }

    render() {
        const trainings = [
            {id: 1, name : 'Reac.js'},
            {id: 2, name : 'React Native'},
            {id: 3, name : 'Angular'},
            {id: 4, name : 'Typescript'}
        ];

        const listItems = trainings.map((training) => <TrainingItem key={training.id} name={training.name}/>);

        return (
            <div>
                <TrainingTitle/>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default TrainingList;
