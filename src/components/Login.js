import React, { useEffect,useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
const initialState = {
  credentials:{
    username: 'Lambda School',
    password: 'i<3Lambd4'
  }
}
const Login = () => {
  const {push} =useHistory()
const [login,setLogin] = useState(initialState)
const [error,setError] = useState("")
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  const handleChange=(e)=>{
e.preventDefault()
setLogin({
  credentials:{
    ...login,
   [e.target.name] : e.target.value
  }
}
)
  }
  const handleSubmit = (e) => {
  e.preventDefault()
  login.credentials.username==="" || login.credentials.password==="" || login.credentials.username!==initialState.credentials.username|| login.credentials.password!==initialState.credentials.password ? setError("Username or Password not valid."):
  axios.post(`http://localhost:5000/api/login`,login.credentials)
  .then((response)=>{
    console.log(response.data.payload)
    localStorage.setItem('token',response.data.payload)
    push("/")

  })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form>
          <input data-testid="username" type="text" value={login.credentials.username} name="username" onChange={handleChange}/>
          <input data-testid="password" type="password" value={login.credentials.password} name="password" onChange={handleChange}/>
          <button onClick={handleSubmit}>Log In</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.