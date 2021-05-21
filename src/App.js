import React, { useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage"

function App() {
  const handleLogOut=()=>{
    localStorage.removeItem("token");
  }
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogOut} data-testid="logoutButton" href="#">logout</a>
        </header> 
        <PrivateRoute path="/bubbles" component={BubblePage}/>
        <Route exact path="/" component={Login}  />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.