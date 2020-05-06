import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
};

export default ({ exercises, category }) =>
    <Grid container>
        <Grid item sm>
            <LeftPane
                styles={styles.Paper}
                data={exercises}
                category={category} />
        </Grid>
        <Grid item sm>
            <RightPane styles={styles.Paper} />
        </Grid>
    </Grid>