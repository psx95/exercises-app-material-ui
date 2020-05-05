import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default props =>
    <Paper style={props.styles}>
        <Typography
            variant="h5">
            Welcome!
        </Typography>
        <Typography
            variant="body1"
            style={{ marginTop: 20 }}>
            Please select an execise from the list on the left
        </Typography>
    </Paper>