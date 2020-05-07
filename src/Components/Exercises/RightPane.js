import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';
import Form from './Form';

export default ({ styles, exercise, editMode, muscles, onSubmit }) => {
    const title = exercise ? exercise.title : "Welcome!";
    const description = exercise ? exercise.description : "Please select an execise from the list on the left";

    return editMode ?
        <Form categories={muscles}
            onSubmit={onSubmit} />
        : <Fragment>
            <Paper style={styles}>
                <Typography
                    variant="h5">
                    {title}
                </Typography>

                <Typography
                    variant="body1"
                    style={{ marginTop: 20 }}>
                    {description}
                </Typography>
            </Paper>
        </Fragment>
}
