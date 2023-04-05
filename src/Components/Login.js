import React from "react";
import './Style.css'

export default function Login()
{
    return(
        <div id="login">
        <div id='Login'>
        <h1>WELCOME TO PRIYAS HOSPITAL</h1>
        <h3>Kindly Register or Login with email or Userid </h3>
        <form>
        <input type="text" placeholder="Enter your username or email id"></input>
        <br></br>
        <br></br>
        <input type="password" placeholder="Enter your Password"></input>
        <br></br>
        <br></br>
        <button>Login</button>
        <br></br>
        <br></br>
        </form></div>
        </div>
    )
}