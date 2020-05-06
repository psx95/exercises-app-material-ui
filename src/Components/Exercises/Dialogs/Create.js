import React, { Fragment, Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Fab, Button, DialogActions, TextField, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
    FormControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        const prevOpen = this.state.open;
        this.setState({
            open: !prevOpen
        });
    }

    handleExerciseChange = name => event => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: event.target.value
            }
        });
    }

    handleSubmit = () => {
        const { exercise } = this.state;
        console.log(JSON.stringify(exercise));
        this.props.onExerciseCreate(exercise);
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        });
    }

    render() {
        const { open, exercise: { title, description, muscles } } = this.state;
        const { classes, categories } = this.props;

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
                    <form>
                        <TextField
                            required
                            label="Title"
                            value={title}
                            onChange={this.handleExerciseChange('title')}
                            className={classes.FormControl}
                            margin="normal" />
                        <br />
                        <FormControl className={classes.FormControl}>
                            <InputLabel htmlFor="muscles">Muscles</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={muscles}
                                onChange={this.handleExerciseChange('muscles')}
                            >
                                {categories.map(category =>
                                    <MenuItem
                                        key={category}
                                        value={category}>
                                        {category}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <br />
                        <TextField
                            required
                            multiline
                            label="Description"
                            rows="4"
                            value={description}
                            onChange={this.handleExerciseChange('description')}
                            className={classes.FormControl}
                            margin="normal" />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={this.handleSubmit}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
})