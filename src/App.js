import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NanaRegister from "./components/NanaRegister/NanaRegister";
import UserRegister from "./components/UserRegister/UserRegister";
import Landing from "./pages/Landing/Landing";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";


const App = () =>
    <Router>
    	<div>
	    	<Route exact path="/" component={Landing} />
	    	<Route exact path="/profile" component={ProfilePage} />
	    	<Route exact path="/search" component={SearchPage} />
	    	<Route exact path="/nanaregister" component={NanaRegister} />
	    	<Route exact path="/userregister" component={UserRegister} />
	    	




    	</div>
    </Router>
    
export default App;


