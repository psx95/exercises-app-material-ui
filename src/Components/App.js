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

  handleExerciseChange = id => {
    const newEx = this.state.exercises.find(ex => ex.id === id);
    this.setState({
      selectedExercise: newEx,
      editMode: false
    });
  }

  handleExerciseCreate = exercise => {
    console.log("Creating exercise " + JSON.stringify(exercise));
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));
  }

  handleExerciseDelete = exerciseId => {
    this.setState(({ exercises, selectedExercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== exerciseId),
      editMode: selectedExercise.id === exerciseId ? false : editMode,
      selectedExercise: selectedExercise.id === exerciseId ? {} : selectedExercise
    }));
  }

  handleExerciseEdit = exerciseId => {
    this.setState(({ exercises }) => ({
      selectedExercise: exercises.find(ex => ex.id === exerciseId),
      editMode: true
    }));
  }

  handleEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      selectedExercise: exercise // Updates the currently selected exercise to the new value.
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscle();
    const { category, selectedExercise } = this.state;
    return <Fragment>
      <Header
        muscles={muscles}
        createExercise={this.handleExerciseCreate} />

      <Exercises
        exercises={exercises}
        category={this.state.category}
        selectedExercise={selectedExercise}
        editMode={this.state.editMode}
        muscles={muscles}
        onExerciseSelected={this.handleExerciseChange}
        onExerciseDeleted={this.handleExerciseDelete}
        onExerciseEdited={this.handleExerciseEdit}
        onEdit={this.handleEdit}
      />

      <Footer muscles={muscles}
        onSelect={this.handleCategoryChange}
        category={category} />
    </Fragment>;
  }
}
