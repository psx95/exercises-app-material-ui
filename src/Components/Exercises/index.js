import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper:
    {
        padding: 20,
        overflowY: 'auto',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            marginTop: 5,
        }
    },
    '@global': {
        'html ,body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
    }
});

export default withStyles(styles)(
    ({ classes, exercises, category, onExerciseSelected,
        onExerciseDeleted, selectedExercise, editMode, muscles,
        onExerciseEdited, onEdit }) =>
        <Grid container spacing={1} className={classes.container}>
            <Grid item className={classes.item} sm={6} xs={12}>
                <LeftPane
                    styles={classes.paper}
                    data={exercises}
                    category={category}
                    onEdit={onExerciseEdited}
                    onSelect={onExerciseSelected}
                    onDelete={onExerciseDeleted} />
            </Grid>
            <Grid item className={classes.item} sm={6} xs={12}>
                <RightPane styles={classes.paper}
                    exercise={selectedExercise}
                    editMode={editMode}
                    muscles={muscles}
                    onSubmit={onEdit} />
            </Grid>
        </Grid>
)