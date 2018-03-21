import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Footer from "./components/Footer/Footer";
import PreComponent from "./components/PreComponent";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <PreComponent />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/nanas" component={SearchPage} />
          <Route exact path="/nana" component={NanaRegister} />
          <Route exact path="/user" component={UserRegister} />
          <Route path="/nana/:id" component={NanaProfile} />
          <Route path="/user/:id" component={UserProfile} />
          <Route path="/nana/:" component={NoMatch} />
          <Route path="/user/:" component={NoMatch} />
          <Route path="/schedule" component={SchedulePage} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
