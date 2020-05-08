import React, { Fragment } from 'react';
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

export default ({ styles, data, category, onSelect, onDelete, onEdit }) =>
    <Paper className={styles}>
        {data.map(([group, exercises]) =>
            !category || category === group ?
                <Fragment
                    key={group}>
                    <Typography style={{ textTransform: 'capitalize' }}
                        variant='body1'>
                        {group}
                    </Typography>
                    <List component="ul">
                        {exercises.map(({ id, title }) =>
                            <ListItem
                                key={id}
                                onClick={() => onSelect(id)}
                                button>
                                <ListItemText primary={title} />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <Edit onClick={() => onEdit(id)} />
                                    </IconButton>
                                    <IconButton>
                                        <Delete onClick={() => onDelete(id)} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                    </List>
                </Fragment>
                : null
        )}
    </Paper>