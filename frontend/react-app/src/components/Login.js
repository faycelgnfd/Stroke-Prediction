import React from "react";
import { Container,Form,Alert} from 'react-bootstrap';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useNavigate,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {LoginUser} from '../APIService'

 function Login(props) {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    //this is to save the cookie tht we crated for token in cookies so the user will be allways loged

    const [token,setToken]=useCookies(['mytoken'])
    let history=useNavigate()
    //this is to redirect the user to articles page when he logs
    
    useEffect(() => {
        if(token['mytoken']){
            history("/")
            
        }else{
         
        }
    }, [token,])
    const [error,setError]=useState("")
    const loginBtn=(e)=>{
        e.preventDefault();
          LoginUser(username,password).then(res=>setToken('mytoken',res.data.key)).then(setError("")).catch(error => {
            setError(true)
        });
    }
        return (
            <div>
                <form  style={{marginBottom:207}}>
                    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <h3>Sign In</h3>

                <div className="form-group">
                <div className="btn-Alert">{error? <Alert variant="danger">veuillez resaisir vos cordonnées</Alert>:<p></p>
                    }
                    </div>
                    <label>UserName</label>
                    <input value={username} type="text"  className="form-control" placeholder="Enter username" id="username"
                    onChange={e=>{setUsername(e.target.value)}}/>
                </div>
      
                <div className="form-group">
                    <label>Password</label>
                    <input value={password}  type="password" className="form-control" id="password" placeholder="Please enter password"
            onChange={e=>{setPassword(e.target.value) }}/>
                </div>

            
                <br></br>
                <button onClick={e=>loginBtn(e)} type="submit" className="btn btn-dark btn-block">Submit</button>
                <p className="forgot-password text-right">
                Not registered yet? <Link className="btn btn-dark btn-block" to={"/register"}>sign up?</Link>
            </p>
                </Form.Group>
            </form>
            </div>
        );
    
}

export default Login