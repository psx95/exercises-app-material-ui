import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit">
                Exercises Database
            </Typography>
        </Toolbar>
    </AppBar>