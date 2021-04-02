import React, { Component } from 'react'
// import Profile from "/components/Profile.jsx"
import Profile from "./Profile";
import ProfileList from "./ProfileList";
import "./ProfileView.css";
import axios from 'axios';

class ProfileView extends Component{
    state={
        currentView:"SUGGESTIONS",
        userList:[
        {id:1,name:"test name",handle:"test handle",pImage:"profile.jpeg"},
        {id:2,name:"test name",handle:"test handle",pImage:"profile.jpeg"},
        
    ],
    }

    changeView=async (view)=>{
        //  console.log("Inside changeView");
        if(view ==="SUGGESTIONS" && this.state.currentView!=="SUGGESTIONS")
        {
            this.setState({
                currentView:view,
                userList:[
            {id:1,name:"test name",handle:"test handle",pImage:"profile.jpeg  "},
            {id:2,name:"test name",handle:"test handle",pImage:"profile.jpeg  "},
        ]
            })

        }else if(view ==="REQUESTS" &&this.state.currentView!=="REQUESTS")
        {
            let requestObj=await axios.get("https://instagram-backend-api.herokuapp.com/user/pending/714068e1-423c-4d35-83b9-8f7a95313820/")
        // console.log(requestObj);
            let pendingRequest=requestObj.data.data;
            console.log(pendingRequest);
            this.setState({
                currentView:view,
                userList:pendingRequest
            })

        }
        else if(view ==="FOLLOWERS" && this.state.currentView!=="FOLLOWERS")
        {
            let followersObj=await axios.get("http://localhost:3000/user/follower/714068e1-423c-4d35-83b9-8f7a95313820/");
        console.log(followersObj.data);
        let follower=followersObj.data.data;
            this.setState({
                currentView:view,
                userList:follower,
            }) 

        }
        else if(view ==="FOLLOWINGS" && this.state.currentView!=="FOLLOWINGS")
        {
            let followingObj=await axios.get("http://localhost:3000/user/following/714068e1-423c-4d35-83b9-8f7a95313820/")
        
        let following=followingObj.data.data;
        
        // console.log(following);

            this.setState({
                currentView:view,
                userList:following,
            }) 

        }

    }

    render(){
        
        return ( 
            // console.log("Inside render"),
           <div className="profile-view">
               <Profile changeViewHandler={this.changeView}/>
                <ProfileList view={this.state.currentView} userList={this.state.userList}/>
           </div> 
        );
    }
}

export default ProfileView;