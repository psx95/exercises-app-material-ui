import React, { Fragment, Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Fab, Button, DialogActions } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        const prevOpen = this.state.open;
        this.setState({
            open: !prevOpen
        });
    }

    render() {
        const { open } = this.state;

        return <Fragment>
            <Fab size="small" color="secondary" onClick={this.handleToggle}>
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Create a new exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
}
