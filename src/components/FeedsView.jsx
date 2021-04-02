import axios from 'axios';
import React, { Component } from 'react';
import CreatePost from './CreatePost';
import "./FeedsView.css";
import Posts from "./Posts"
// import CreatePost from "./CreatePost";

class FeedsView extends Component{
    state={
        posts:[
            {
                pid:1,
                uid:1,
                name:"demo post",
                caption:"this is a  dumy post",
                pImage:"profile.jpeg",
                // postImage:"https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
             {
                pid:2,
                uid:1,
                name:"demo post",
                caption:"this is a  dumy post",
                pImage:"profile.jpeg",
                // postImage:"https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
             {
                pid:3,
                uid:1,
                name:"demo post",
                caption:"this is a  dumy post",
                pImage:"profile.jpeg",
                // postImage:"https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
             {
                pid:4,
                uid:1,
                name:"demo post",
                caption:"this is a  dumy post",
                pImage:"profile.jpeg",
                // postImage:"https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }

        ]
    }

    async componentDidMount(){
        // api se saari post fetch

        // backend => axios.get();
        console.log("hello");

        let postData=await axios.get("http://localhost:3000/post")
        // console.log(postData);
        let posts=postData.data.body;
        // console.log(posts);
        let uids=posts.map((post)=>{
            return post.uid;
        })
        // console.log(uids);
        
        let users=[];
        // console.log(userData);
        for(let i=0;i<uids.length;i++)
        {
            let userData=await axios.get(`http://localhost:3000/user/${uids[i]}`)
            users.push(userData.data.data);

        }
        // console.log(users);
        let postsObj=[];
        for(let i=0;i<users.length;i++)
        {
            let postDetails={
                pid:posts[i].pid,
                name:users[i].name,
                caption:posts[i].caption,
                pImage:users[i].pImage,
                postImage:posts[i].postImage,
            }
            postsObj.push(postDetails);

        }
        console.log(postsObj);
        this.setState({
            posts:postsObj,

        })

    }
    updatePosts=()=>{
        this.componentDidMount();
    }

    render(){
        let {posts}=this.state;
        return(
            <React.Fragment>
                <div className="feeds-view">
                    <h1>FEEDS</h1>
                     {/* to update ui after creating new post */}
                    <CreatePost updatePosts={this.updatePosts}/>
            <div className="post">
            {
            posts.map((post)=>{
                 return <Posts key={post.pid} posts={post}/>
            })}
            </div>
            </div>
            </React.Fragment>
        );

    }
} 

export default FeedsView;