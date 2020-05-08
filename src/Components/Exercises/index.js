import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
};

export default ({ exercises, category, onExerciseSelected, onExerciseDeleted, selectedExercise, editMode, muscles, onExerciseEdited, onEdit }) =>
    <Grid container>
        <Grid item sm={6} xs={12}>
            <LeftPane
                styles={styles.Paper}
                data={exercises}
                category={category}
                onEdit={onExerciseEdited}
                onSelect={onExerciseSelected}
                onDelete={onExerciseDeleted} />
        </Grid>
        <Grid item sm={6} xs={12}>
            <RightPane styles={styles.Paper}
                exercise={selectedExercise}
                editMode={editMode}
                muscles={muscles}
                onSubmit={onEdit} />
        </Grid>
    </Grid>