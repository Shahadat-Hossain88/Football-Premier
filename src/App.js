import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './component/TeamDetail/TeamDetail';
import Header from './component/Header/Header';

function App() {
  return (
    <div >

      <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route  path="/team-detail/:teamId">
            <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="*">

        </Route>

      </Switch>
    </Router>

    </div>
  );
}

export default App;
