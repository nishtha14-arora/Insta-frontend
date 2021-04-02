import React, { Component } from 'react';
import "./header.css";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faHome , faUsersCog ,faSignInAlt} from '@fortawesome/fontawesome-free-solid'




const Header= () =>{
    return(
    <div className="header">
        <div className="header-image">
            <img src="https://Instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
        </div>
        <div className="header-navlinks">
            <ul className="header-navlinks-ul">
                <li>
                    <NavLink to="/"> 
                    <FontAwesomeIcon icon={faHome} style={{color:"black"}}/></NavLink>
                </li>
                <li>
                    <NavLink to="/myposts"><FontAwesomeIcon icon={faUpload} style={{color:"black"}}/></NavLink>
                </li>
                <li>
                    <NavLink to="/Settings"><FontAwesomeIcon icon={faUsersCog} style={{color:"black"}}/></NavLink>
                </li>
                <li>
                    <NavLink to="/login"><FontAwesomeIcon icon={faSignInAlt} style={{color:"black"}}/></NavLink>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Header;