import React from 'react';
import Foods from './components/foods';
import Home from './components/home';
import Todos from './components/todos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path="/foods" component={Foods} />
        <Route path="/Todos" component={Todos} />
      </Switch>
    </Router>
  );
}

export default App;
