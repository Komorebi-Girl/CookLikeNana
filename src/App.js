import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import NoMatch from "./components/NoMatch";
import NanaProfile from "./components/NanaProfile";
import NanaRegister from "./components/NanaRegister";
import UserRegister from "./components/UserRegister";
import UserProfile from "./components/UserProfile";
import SchedulePage from "./pages/SchedulePage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import PreComponent from "./components/PreComponent";

const baseUrl = process.env.PUBLIC_URL; 

const App = () => {

return (
 <Router>
   <div>
    <NavBar />
    <PreComponent />
    <Switch>
      <Route exact path={baseUrl+"/"} component={LandingPage} />
      <Route exact path={baseUrl+"/login"} component={LoginPage} />
      <Route exact path={baseUrl+"/nanas"} component={SearchPage} />
      <Route exact path={baseUrl+"/nana"} component={NanaRegister} />
      <Route exact path={baseUrl+"/user"} component={UserRegister} />
      <Route path={baseUrl+"/nana/:id"} component={NanaProfile} />
      <Route path={baseUrl+"/user/:id"} component={UserProfile} />
      <Route path={baseUrl+"/schedule"} component={SchedulePage} />
      <Route component={NoMatch} />
    </Switch>
   </div>
</Router>);
}

export default App;


