import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
// import NoMatch from "./components/NoMatch";
import NanaProfile from "./components/NanaProfile";
import NanaRegister from "./components/NanaRegister";
import UserRegister from "./components/UserRegister";
import UserProfile from "./components/UserProfile";
import LoginPage from "./pages/LoginPage";
import Landing from "./pages/Landing/Landing";

// authenticate = userInfo => {
//   this.setState({userInfo})
// }

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route path="/nana_register" component={NanaRegister} />
      <Route path="/user_register" component={UserRegister} />
      <Route path="/nanaprofile/:id" component={NanaProfile} />
      <Route path="/userprofile/:id" component={UserProfile} />
    </div>
  </Router>

    
export default App;


