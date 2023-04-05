import React from "react";
import './Style.css'
export default function Register()
{
    const handleSubmit=()=>{
        alert("You are registered successfully! Go back to login page");
    }
    return(
        <div id="register">
        <h3> REGISTRATION FORM</h3>
            <table id='tab'>
            <tbody>
            <tr >
            <td>Name:</td>
            <td><input type="text" size="25 px"></input></td>
            </tr>
            <tr>
            <td>Phone Number:</td>
            <td><input type="text" size="25 px"></input></td></tr>
            <tr>
            <td>Father Name</td>
            <td><input type="text" size="25 px"></input></td>
            </tr>
            <tr>
            <td>Email:</td>
            <td><input type="text" size="25px"></input></td></tr>
            <tr>
            <td>Date of Birth:</td>
            <td><input type="date" size="25px"></input></td>
            </tr>
            <tr>
            <td>Address</td>
            <td><textarea rows='2' cols='20'></textarea></td>
            </tr>
            <tr>
            <td>Gender</td>
            <td><input type="radio"></input>Male</td>
            <td><input type="radio"></input>Female</td>
            </tr><tr>
            <td>Blood Group</td>
            <td><input type='checkbox'/>A+
            <input type='checkbox'/>A-
            <input type='checkbox'/>B+
            <input type='checkbox'/>B-
            <input type='checkbox'/>AB+
            <input type='checkbox'/>AB-
            <input type='checkbox'/>O+
            <input type='checkbox'/>O-</td>
            </tr>
            </tbody>
            </table>
            <br></br>
            <br></br>
            <button onClick={handleSubmit}>SUBMIT</button>
            </div>
    )
}