import React, { Component } from 'react'
import axios from 'axios';

class CreatePost extends Component{
    state={
        caption:"",
    }
    uploadImage=React.createRef();

    onSubmitHandler=async (e)=>{
        e.preventDefault()//=> prevent unwanted page upload
        let caption=this.state.caption;
        let uploadedImage=this.uploadImage.current.files[0];
        let formData=new FormData();
        formData.append('postImage',uploadedImage);
        formData.append('uid',"714068e1-423c-4d35-83b9-8f7a95313820");
        formData.append('caption',caption);
        let createPostData=await axios.post("http://localhost:3000/post",formData);
        console.log(createPostData);
        // to see the update post in ui
        this.props.updatePosts();

        
    }
    onChangeHandler=(e)=>{
        let caption=e.target.value;
        this.setState({
            caption:caption,
        })

    }
    render(){

        return (
            <div className="create-post">
                <form onSubmit={(e)=>{this.onSubmitHandler(e)}}>
                <input type="file" name="post-caption" id="postUpload" ref={this.uploadImage}/>
                <input type="text" value={this.state.caption} onChange={(e)=>{this.onChangeHandler(e)}}/>
                <button type="submit">CREATE POST</button>

                </form>
            </div>
        )
    }
}

export default CreatePost ;