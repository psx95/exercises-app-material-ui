import React, { Fragment } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

export default ({ styles, data, category }) =>
    <Paper style={styles}>
        {data.map(([group, exercises]) =>
            !category || category === group ?
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
                : null
        )}
    </Paper>