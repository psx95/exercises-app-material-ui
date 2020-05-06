import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';

export default ({ muscles, createExercise }) =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="body1" color="inherit" style={{ flex: 1 }}>
                Exercises Database
            </Typography>

            <CreateDialog categories={muscles} onExerciseCreate={createExercise} />
        </Toolbar>
    </AppBar>