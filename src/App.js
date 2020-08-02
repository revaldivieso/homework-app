import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeTemplate from './Templates/HomeTemplate';


const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={HomeTemplate} />
        </Switch>

      </div>
    </Router>
  );
};

export default App;
