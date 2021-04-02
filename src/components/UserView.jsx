import React, { Component } from 'react'
import ProfileView from './ProfileView'
import FeedsView from './FeedsView';
import "./UserView.css";

const UserView=()=>{
    return (
        <div className="user-view">
            
            <ProfileView/>
            <FeedsView/>

        </div>
    )
}

export default UserView;