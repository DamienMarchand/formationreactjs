import React from 'react';
import { connect } from 'react-redux';
import TrainingItem from './TrainingItem';
import TrainingTitle from './TrainingTitle';
import { addTraining, loadTrainings } from './store/trainings.action';


class TrainingList extends React.Component {
  componentDidMount() {
    this.props.loadTrainings();
  }

  displayTrainings() {
    if (this.props.loading) {
      return <p>Loading ....</p>;
    }

    return this.props.trainings.map(training => <TrainingItem key={training.id} name={training.name} />);
  }


  render() {
    return (
      <div>
        <TrainingTitle />
        {
                    this.displayTrainings()
                }
        <div>
          <button onClick={() => this.props.addTraining('formation ajoutée via redux')}> Add training</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trainings: state.trainings.list,
  loading: state.trainings.loading,
});

const mapDispatchToProps = dispatch => ({
  addTraining: name => dispatch(addTraining(name)),
  loadTrainings: () => dispatch(loadTrainings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingList);
