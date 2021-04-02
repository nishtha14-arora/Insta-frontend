import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Redirect, Route,Switch,NavLink } from "react-router-dom";
import Settings from './components/Settings';
import UserView from './components/UserView.jsx';

// jsx => js
function App() {
  return (
  <React.Fragment>

    
    
    <Router>
      
      <Header/>
       <Switch>
    <Route path="/" exact>
       <UserView />
     </Route>

     <Route path="/settings" exact>
        <Settings/>
     </Route>
    <Redirect to="/">
    <UserView />
      </Redirect>

   </Switch>
    </Router>
    </React.Fragment>)
  
}

export default App;
