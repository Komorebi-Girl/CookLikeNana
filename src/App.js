import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import NoMatch from "./components/NoMatch";
import NanaRegister from "./components/NanaRegister/NanaRegister";
import UserRegister from "./components/UserRegister/UserRegister";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

const App = () =>
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/nana" component={NanaRegister} />
        <Route exact path="/nanas" component={SearchPage} />
        <Route exact path="/nana/:nanaid" component={NanaRegister} />
        <Route exact path="/user" component={UserRegister} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;


