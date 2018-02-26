import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import NoMatch from "./components/NoMatch";
import NanaProfile from "./components/NanaProfile";
import NanaRegister from "./components/NanaRegister";
import UserRegister from "./components/UserRegister";
import UserProfile from "./components/UserProfile";
import LoginPage from "./pages/LoginPage";
import Landing from "./pages/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";

// authenticate = userInfo => {
//   this.setState({userInfo})
// }

const App = () =>
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/nanas" component={SearchPage} />
        <Route path="/nana" component={NanaRegister} />
        <Route path="/user" component={UserRegister} />
        <Route path="/nana/:id" component={NanaProfile} />
        <Route path="/user/:id" component={UserProfile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

    
export default App;


