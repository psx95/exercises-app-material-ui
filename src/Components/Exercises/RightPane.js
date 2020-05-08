import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';
import Form from './Form';

export default ({ styles, exercise, editMode, muscles, onSubmit }) => {
    const isExerciseEmpty = !exercise || Object.keys(exercise).length === 0;
    const title = !isExerciseEmpty ? exercise.title : "Welcome!";
    const description = !isExerciseEmpty ? exercise.description : "Please select an execise from the list on the left";

    return editMode ?
        <Paper className={styles}>
            <Form
                key={exercise.id}
                categories={muscles}
                onSubmit={onSubmit}
                exercise={exercise} />
        </Paper>
        : <Fragment>
            <Paper className={styles}>
                <Typography
                    variant="h5"
                    gutterBottom>
                    {title}
                </Typography>

                <Typography
                    variant="body1">
                    {description}
                </Typography>
            </Paper>
        </Fragment>
}
