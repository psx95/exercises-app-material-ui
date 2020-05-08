import React, { Fragment, Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Form from './Form'

export default class extends Component {
    state = {
        open: false,
    }

    handleToggle = () => {
        const prevOpen = this.state.open;
        this.setState({
            open: !prevOpen
        });
    }

    render() {
        const { open } = this.state;
        const { categories, onExerciseCreate } = this.props;

        return <Fragment>
            <Fab size="small" color="secondary" onClick={this.handleToggle}>
                <AddIcon />
            </Fab>
            <Dialog
                fullWidth
                maxWidth='sm'
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
                    <Form categories={categories}
                        onSubmit={onExerciseCreate}
                        postSubmitTask={this.handleToggle} />
                </DialogContent>
            </Dialog>
        </Fragment>
    }
}