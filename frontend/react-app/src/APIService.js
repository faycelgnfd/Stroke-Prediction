import React from 'react';
import * as settings from './settings';
import {useCookies} from 'react-cookie';
import axios from 'axios';

 
export const LoginUser=(username,password)=>{
   
  return        axios.post(`${settings.API_SERVER}/api/auth/login/`, {
    username: username,
    password: password
})
}

export const LogoutUser=(token_my)=>{
  
    return  axios.post(`${settings.API_SERVER}/api/auth/logout/`, {
    }, {headers: {'Authorization': `Token ${token_my}`}} )
  }
 
export const RegisterUser=(username,email,password,password2)=>{
  return  axios.post(`${settings.API_SERVER}/api/auth/rest-auth/registration/`, {
    username:username,
   password1:password,
    password2:password2,
    email:email
})
}
