//Ask if the user is a host or trucker

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './MySplashPage.css';
import MotherPage from './MotherPage';


const mySplashPage = () => (
    <div class = "mySplashPage">
        <body> 
            <div class = "box"> 
                <h2>Welcome!</h2>
                <h4>Are you a Mother or are you a Trucker?</h4>
                <Link to = "/mother"><button class="btn">I am a Mother</button></Link>
                <br/>
                <br/>
                <Link to = "/trucker"><button class="btn">I am a Trucker</button></Link>
            </div>
        </body>   
    </div>
);

export default mySplashPage;