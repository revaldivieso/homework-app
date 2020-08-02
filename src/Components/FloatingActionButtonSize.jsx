import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


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

const FloatingActionButtonSize = () => {
  const classes = useStyles();
  const [task, newTask] = useState([]);

  const handleCreateTask = (e) => {
    e.preventDefault();
  
  }

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={6}>
          <Grid item>
            <Button
            type="submit"
            >
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
export default FloatingActionButtonSize;