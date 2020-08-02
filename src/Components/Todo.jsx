import React from "react";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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

const Todo = ({ todo, toggleComplete, removeTodo }) => {
    const classes = useStyles();
    const handleChexboxClick = () => {
        toggleComplete(todo.id);
    }

    const handleRemoveClick = () => {
        removeTodo(todo.id);
    }
    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <ListItem style={{ display: "flex" }}>
                    <Grid container spacing={6}>
                        <Grid item>
                            <Checkbox
                                checked={todo.completed}
                                onClick={handleChexboxClick}
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                style={{
                                    color: "black",
                                    textDecoration: todo.completed ? "line-through" : null
                                }}
                            >
                                <Grid item>
                                    {todo.task}
                                </Grid>
                                <Grid item>
                                    {todo.date}
                                </Grid>
                            </Typography>
                        </Grid>
                        <IconButton onClick={handleRemoveClick}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </ListItem>
            </Paper>
        </Container>
    );
}

export default Todo;