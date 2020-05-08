import React, { Component } from 'react'
import { TextField, FormControl, MenuItem, InputLabel, Select, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    FormControl: {
        width: 500,
        [theme.breakpoints.only('xs')]: {
            width: 250
        },
        [theme.breakpoints.only('sm')]: {
            width: 350
        }
    }
});

export default withStyles(styles)(class extends Component {
    state = this.getInitialState();

    getInitialState() {
        // using props this way is an anti pattern
        // since we extract from props, our state will not update if the props get updated.
        // in this case this is useful to us since its a controlled compnent and we want the Form
        // to be responsible for its own state.
        const { exercise } = this.props;
        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleExerciseChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = () => {
        console.log("in handle submiit");
        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state
        });
        const { postSubmitTask } = this.props;
        if (postSubmitTask) {
            postSubmitTask();
        }
    }

    render() {
        const { title, description, muscles } = this.state;
        const { classes, categories, exercise } = this.props;
        const buttonText = exercise ? "Update" : "Create";

        return <form>
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
                    required
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
            <br />
            <Button color="primary" variant="contained" onClick={this.handleSubmit}>
                {buttonText}
            </Button>
        </form>
    }
})