import React from "react";
import {Link} from "react-router-dom";

import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import{RegisterUser} from '../APIService'
import { Container,Form,Alert} from 'react-bootstrap';
function Register(props) {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [password2,setPassword2]=useState('')
    const [reg,setReg]=useState(false)
    let history=useNavigate()
    //this is to redirect the user to articles page when he logs
    
    useEffect(() => {
        if(reg){
            history("/login")
       
        }else{
           
        }
    }, [reg,])


    const [error,setError]=useState("")
    const registerBtn=(e)=>{
        e.preventDefault();
          RegisterUser(username,email,password,password2).then(res=>setReg(true)).catch(error => {
            error.response && error.response.data.detail
            ? console.log(error.response.data.detail)
            : console.log(error.message)
        }); 
    }
        return (
            <form style={{marginBottom:80}}>
            <h3>Sign Up</h3>

            <div className="form-group">
            <div className="btn-Alert">{error? <Alert variant="danger">veuillez resaisir vos cordonnées</Alert>:<p></p>
                    }
                    </div>
                <label>First name</label>
                <input value={username} type="text" className="form-control" placeholder="Username" id="username" required
                
                onChange={e=>{setUsername(e.target.value)}}/>
            </div>

           

            <div className="form-group">
                <label>Email address</label>
                <input value={email} type="email" className="form-control" placeholder="Enter email" id="email" required
                onChange={e=>{setEmail(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value={password} type="password" className="form-control" placeholder="Enter password" id="password" required
                onChange={e=>{setPassword(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label>Password Confirmation</label>
                <input  value={password2} type="password" className="form-control" placeholder="Enter your password confirmation" id="password2" required
                onChange={e=>{setPassword2(e.target.value)}}/>
            </div>
           <br></br>
            <button onClick={e=>registerBtn(e)} type="submit" className="btn btn-dark btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link className="btn btn-dark btn-block" to={"/login"}>sign in?</Link>
            </p>
        </form>
        );
    
}

export default Register