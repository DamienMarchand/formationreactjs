import React from 'react';
import './TrainingTitle.css';

class TrainingTitle extends React.Component {

    shouldComponentUpdate() {
        console.log("TrainingTitle shouldComponentUpdate");
        return true;
    }

    render() {
        return (
            <div className="title">
                Formations :
            </div>
        );
    }
}

export default TrainingTitle;
