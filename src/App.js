import React from 'react';
import Topbar from './Components/Topbar'
import Homepage from './Pages/Homepage'
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Settings from "./Pages/Settings";
import Single from "./Pages/Single";
import Write from "./Pages/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Posts">
          <Homepage />
        </Route>
        <Route path="/Register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/Login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/Post/:id">
          <Single />
        </Route>
        <Route path="/Write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/Settings">{currentUser ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
