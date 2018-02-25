import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SearchPage from "./pages/SearchPage";
// import NoMatch from "./components/NoMatch";
import NanaProfile from "./components/NanaProfile";
import NanaRegister from "./components/NanaRegister";
import UserRegister from "./components/UserRegister";
import UserProfile from "./components/UserProfile";
import LoginPage from "./pages/LoginPage";
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NanaRegister from "./components/NanaRegister/NanaRegister";
import UserRegister from "./components/UserRegister/UserRegister";
import Landing from "./pages/Landing/Landing";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";
>>>>>>> e8136e1df62fb50fb4d7aa1d49382ae81216364f

// authenticate = userInfo => {
//   this.setState({userInfo})
// }

const App = () =>
<<<<<<< HEAD
  <Router>
    <div>
      <Route exact path="/" component={LoginPage} />
      <Route path="/nana_register" component={NanaRegister} />
      <Route path="/user_register" component={UserRegister} />
      <Route path="/nanaprofile/:id" component={NanaProfile} />
      <Route path="/userprofile/:id" component={UserProfile} />
    </div>
  </Router>
=======
    <Router>
    	<div>
	    	<Route exact path="/" component={Landing} />
	    	<Route exact path="/profile" component={ProfilePage} />
	    	<Route exact path="/search" component={SearchPage} />
	    	<Route exact path="/nanaregister" component={NanaRegister} />
	    	<Route exact path="/userregister" component={UserRegister} />
	    	




    	</div>
    </Router>
>>>>>>> e8136e1df62fb50fb4d7aa1d49382ae81216364f
    
export default App;


