import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default ({ styles, exercise }) => {
    const title = exercise ? exercise.title : "Welcome!";
    const description = exercise ? exercise.description : "Please select an execise from the list on the left";
    console.log("exercise is  " + exercise + "-----" + title + " +  " + description);

    return <Paper style={styles}>
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
}
