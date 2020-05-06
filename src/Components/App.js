import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises
  };

  getExercisesByMuscle() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const muscles = exercise.muscles;

      exercises[muscles] = exercises[muscles] ?
        [...exercises[muscles], exercise] // if already present copy previous entries in a new array and add the current exercies to the array
        : [exercise];
      return exercises;
    }, {})
    );
  }

  handleCategoryChange = category => {
    this.setState({
      category
    });
  }

  render() {
    const exercises = this.getExercisesByMuscle();
    const { category } = this.state;
    return <Fragment>
      <Header />

      <Exercises exercises={exercises} category={this.state.category} />

      <Footer muscles={muscles}
        onSelect={this.handleCategoryChange}
        category={category} />
    </Fragment>;
  }
}
