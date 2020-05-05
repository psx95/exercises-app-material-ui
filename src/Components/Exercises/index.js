import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default ({ exercises }) =>
    <Grid container>
        <Grid item sm>
            <LeftPane
                styles={styles.Paper}
                data={exercises} />
        </Grid>
        <Grid item sm>
            <RightPane styles={styles.Paper} />
        </Grid>
    </Grid>