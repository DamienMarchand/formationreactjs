import React from 'react';
import PropTypes from 'prop-types';

class TrainingItem extends React.Component {
    static defaultProps = {
        name: 'unknown training'
    };

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

// .isRequired permet de rendre obligatoire la props
// Attention lorsqu'on met un defaultProps, le isRequired ne sera jamais faux
TrainingItem.propTypes = {
  name: PropTypes.string
};

export default TrainingItem;
