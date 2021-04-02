import React, { Component } from 'react'
import axios from 'axios';
import "./Profile.css";




class Profile extends Component{
    state={
        name:"test name",
        handle:"testHandle",
        bio:"test.bio", 
        pImage:"profile.jpeg",
        postCount:10,
        followerCount:200,
        followingCount:150,
        requestCount:100
    }
    

    async componentDidMount(){
        
        let userObj=await axios.get("https://instagram-backend-api.herokuapp.com/714068e1-423c-4d35-83b9-8f7a95313820");
        // console.log("hello");
        let user=userObj.data.data;
        let requestObj=await axios.get("https://instagram-backend-api.herokuapp.com/user/pending/714068e1-423c-4d35-83b9-8f7a95313820")
        // console.log(requestObj);
        let pendingRequest=requestObj.data.data;

        let followingObj =await axios.get("https://instagram-backend-api.herokuapp.com/user/following/714068e1-423c-4d35-83b9-8f7a95313820")
        console.log(followingObj);
      let followerObj =await axios.get("https://instagram-backend-api.herokuapp.com/user/follower/714068e1-423c-4d35-83b9-8f7a95313820")
      console.log(followerObj);
      let following = followingObj.data.data;
      let followers = followerObj.data.data;


      let postData=await axios.get("https://instagram-backend-api.herokuapp.com/post/714068e1-423c-4d35-83b9-8f7a95313820");
      let postCount=postData.data.data
      
        // let followingObj=await axios.get("http://localhost:3000/user/following/bba22e81-e704-40cc-b723-4cd1507b249a")
        // // console.log(followingObj);
        // let followings=followingObj.data.data;

        // let followersObj=await axios.get("http://localhost:3000/user/follower/bba22e81-e704-40cc-b723-4cd1507b249a");
        // // console.log(followersObj);
        // let followers=followersObj.data.data;

        this.setState({
            name:user.name,
            handle:user.handle,
            bio:user.bio,
            postCount:postCount.length,
            pImage:user.pImage,
            followerCount:followers.length,
            followingCount:following.length,
            requestCount:pendingRequest.length
        })
        

    }
    render(){
        
        let {name,handle,bio,pImage,postCount,followerCount,followingCount,requestCount}=this.state;
        // console.log(props);
        // console.log(pImage)
        let changeView=this.props.changeViewHandler;
        console.log(changeView);
        return(
          <div className="profile">
              <div className="profile-details">
                  <div className="profile-img">
                      <img src={pImage} alt="profile.jpeg"/>
                  </div>
                  <div className="profile-name">
                      {name}
                  </div>
                  <div className="profile-handle">
                      {handle}
                  </div>
                  <div className="profile-bio">
                      {bio}
                  </div>
              </div>
              <div className="profile-stats">
                  <div className="post">
                      <div className="count">{postCount}</div>
                      POST
                  </div>
                  <div className="follower">
                      <div className="count">{followerCount}</div>
                      FOLLOWER
                  </div>
                  <div className="following">
                      <div className="count">{followingCount}</div>
                      FOLLOWING
                  </div>
              </div>
              <div className="profile-info">
                  <div className="suggestions" onClick={()=>{changeView("SUGGESTIONS")}}>SUGGESTIONS</div>
                  <div className="request" onClick={()=>{changeView("REQUESTS")}}>REQUEST  {requestCount}</div>
                  <div className="follower" onClick={()=>{changeView("FOLLOWERS")}}>FOLLOWERS</div>
                  <div className="following" onClick={()=>{changeView("FOLLOWINGS")}}>FOLLOWINGS</div>
              </div>
          </div>

        );
    }
}

export default Profile;