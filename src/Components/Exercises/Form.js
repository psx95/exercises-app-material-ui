import React, { Component } from 'react'
import { TextField, FormControl, MenuItem, InputLabel, Select, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(class extends Component {
    state = {
        title: '',
        description: '',
        muscles: ''
    }

    handleExerciseChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = () => {
        console.log("in handle submiit");
        this.props.onSubmit({
            title: this.state.title,
            description: this.state.description,
            muscles: this.state.muscles,
            id: this.state.title.toLowerCase().replace(/ /g, '-')
        });
        this.setState({
            title: '',
            description: '',
            muscles: ''
        });
        this.props.postSubmitTask();
    }

    render() {
        const { title, description, muscles } = this.state;
        const { classes, categories } = this.props;

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
                Create
            </Button>
        </form>
    }
})