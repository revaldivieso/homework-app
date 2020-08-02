import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MaterialUIPickers from './MaterialUIPickers';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 700,
    },
}));


const SimpleCard = ({ addTodo }) => {
    const classes = useStyles();
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
        date: new Date()
    });

    const clearData = () => {
        setTodo({ ...todo, task: "", date: new Date() });
    }

    const handleTaskInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            clearData();
        }
    }


  const handleDateChange = date => {
    setTodo({ ...todo, date: date });
  };


    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={6}>
                        <Grid item>
                            <TextField
                                label="Task"
                                name="task"
                                type="text"
                                value={todo.task}
                                onChange={handleTaskInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <MaterialUIPickers 
                                handleDateChange={handleDateChange} 
                                selectedDate={todo.date} 
                            />
                        </Grid>
                    </Grid>
                    <input type="submit" style={{ display: "none" }} />
                </form>
            </Paper>
        </Container>
    );
}
export default SimpleCard;