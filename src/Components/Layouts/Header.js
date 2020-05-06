import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="body1" color="inherit">
                Exercises Database
            </Typography>
        </Toolbar>
    </AppBar>