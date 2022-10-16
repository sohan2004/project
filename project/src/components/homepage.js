import React from "react"
//import "./homepage.css"
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from './EditUser';
import Video from './video';
import AllUsers from './AllUsers';
import AddTeams from './AddTeams';
import App from "../App";
import Dash from "./Dash_Test";
import Login from "./login";

const homepage = ({setLoginUser}) => {
    return (
        <Router>
        <div >
            <Navbar/>
             <Switch>
         <Route path='/v' exact component={Video}/>
          <Route path='/all' exact component={AllUsers}/> 
          <Route path="/add" exact component={AddTeams}/>
          <Route path='/edit/:id' exact component={EditUser}/>
          <Route path='/dash' exact component={Dash}/>
          <Route path='/login' component={Login}/>
       </Switch>  
            </div>
            </Router>
            
        
    )
}
export default homepage