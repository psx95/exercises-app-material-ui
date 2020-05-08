import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/CreateDialog';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    Flex: {
        flex: 1
    }
}

export default withStyles(styles)(({ classes, muscles, createExercise }) =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="body1" color="inherit" className={classes.Flex}>
                Exercises Database
            </Typography>

            <CreateDialog categories={muscles} onExerciseCreate={createExercise} />
        </Toolbar>
    </AppBar>
)
