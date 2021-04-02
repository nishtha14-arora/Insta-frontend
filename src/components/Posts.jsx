import React, { Component } from 'react'

import "./Posts.css";

const Posts =(props)=>{
    let {name,caption,postImage,pImage}=props.posts;
    return (
        <div className="posts">
            <div className="post-header">
                <div className="post-profile-image">
                    <img src={pImage} alt=""/>
                </div>
                <div className="post-profile-name">{name}</div>
            </div>
            <div className="post-image">
                <img src={postImage} alt=""/>
            </div>
            <div className="post-stats">
                <div className="post-stats-name">{name}</div>
                 <div className="post-stats-caption">{caption}</div>
            </div>
            <div className="post-comments"></div>
            <div className="post-add-comments">
                <input type="text" />
                <div className="add-comments">POST</div>
            </div>

        </div>
    )

}
export default Posts;