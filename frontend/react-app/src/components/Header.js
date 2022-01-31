import React from "react";
import {  Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, NavDropdown, Button } from 'react-bootstrap'
import {useCookies} from 'react-cookie';
import {LogoutUser} from '../APIService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckSquare, faCoffee ,faHeartbeat} from '@fortawesome/fontawesome-free-solid'

 function Header() {
  const [token,setToken,removeToken]=useCookies(['mytoken'])
  const logout_user = (e) => {
    e.preventDefault();

    LogoutUser(token['mytoken']).then(res=>removeToken(['mytoken'])).catch(error => console.log(error))
};
        return (
            <div>
           <Navbar bg="dark" variant="dark">

    <div className="container">
          <Link className="navbar-brand" to={"/"}>StrokePredict
          <FontAwesomeIcon icon={faHeartbeat} />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {!token['mytoken']?
            <ul className="navbar-nav ml-auto">
            
              <li className="nav-item">
            
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Sign up</Link>
              </li>
              
            </ul>
            :
            <ul className="navbar-nav ml-auto">
            <li>
            <a className='nav-link' href='/' onClick={e=>logout_user(e)}>Logout</a>
            </li>
            </ul>
 }
          </div>
        </div>
  
  </Navbar>
            </div>
        );
    
}

export default Header