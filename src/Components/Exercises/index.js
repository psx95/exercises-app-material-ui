import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    Paper:
    {
        padding: 20,
        marginTop: 10,
        height: 500,
        overflowY: 'auto'
    }
});

export default withStyles(styles)(
    ({ classes, exercises, category, onExerciseSelected,
        onExerciseDeleted, selectedExercise, editMode, muscles,
        onExerciseEdited, onEdit }) =>
        <Grid container spacing={1}>
            <Grid item sm={6} xs={12}>
                <LeftPane
                    styles={classes.Paper}
                    data={exercises}
                    category={category}
                    onEdit={onExerciseEdited}
                    onSelect={onExerciseSelected}
                    onDelete={onExerciseDeleted} />
            </Grid>
            <Grid item sm={6} xs={12}>
                <RightPane styles={classes.Paper}
                    exercise={selectedExercise}
                    editMode={editMode}
                    muscles={muscles}
                    onSubmit={onEdit} />
            </Grid>
        </Grid>
)