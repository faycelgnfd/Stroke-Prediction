import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Layout from './components/Layout';
import Register from "./components/Register";
import {CookiesProvider} from 'react-cookie';
function Urls(props) {
   
    return (
        <div >
               <CookiesProvider>
            <BrowserRouter>
            <Layout>   
            <Routes>
         
                    <Route exact path="/login" element={<Login {...props}/>} />
                    <Route exact path="/register" element={<Register {...props}/>} />
                    <Route exact path="/" element={<Home {...props}/>}/>
                
            </Routes>
            </Layout>
            </BrowserRouter>
            </CookiesProvider>
        </div>
    )
};
export default Urls;