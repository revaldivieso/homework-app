import React, { useState, useEffect } from 'react';
import SimpleCard from '../Components/SimpleCard';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from '../Components/TodoList';
import Typography from '@material-ui/core/Typography';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const HomeTemplate = () => {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        );
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    return (
        <Container className={classes.root}>
            <Typography style={{ padding: 16 }} variant="h2">
            Cosas por hacer
            </Typography>
            <SimpleCard addTodo={addTodo} />
            <TodoList 
            todos={todos} 
            toggleComplete={toggleComplete} 
            removeTodo={removeTodo}
            />
        </Container>
    );
}

export default HomeTemplate;