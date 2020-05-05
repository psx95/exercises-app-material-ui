import React, { Fragment } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

export default ({ styles, data }) =>
    <Paper style={styles}>
        {data.map(([group, exercises]) =>
            <Fragment>
                <Typography style={{ textTransform: 'capitalize' }}
                    variant='body1'>
                    {group}
                </Typography>
                <List component="ul">
                    {exercises.map(({ title }) =>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    )}
                </List>
            </Fragment>
        )}
    </Paper>