import React, { Component } from 'react'
import "./Settings.css";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

class Settings extends Component{
    state={
        name:"",
        handle:"",
        bio:"",
        phone:"",
        email:"",
        pImage:"",
        is_public:"",
        isDisabled:true, 
    };


    async componentDidMount(){
        let userObj=await axios.get("http://localhost:3000/user/714068e1-423c-4d35-83b9-8f7a95313820/");
        let user=userObj.data.data;
        let {name,handle,bio,phone,email,pImage,is_public}=user;
        this.setState({
            name:name,
            handle:handle,
            bio:bio,
            phone:phone,
            email:email,
            pImage:pImage,
            is_public:is_public,
            isDisabled:true,
        })

    }
    fileUpload=React.createRef();

    onChangeHandler=(event)=>{
        // console.log("hey");
        // event.preventDefault();
        // console.log(event.target.id);
        // console.log(event.target.value);
        let id=event.target.id;
        let value=event.target.value;
        this.setState({
            [id]:value,
        })
    }

    editHandler=()=>{
        if(this.state.isDisabled)
        {
                this.setState({
            isDisabled:!this.state.isDisabled,
        })
        }
        else{
            this.componentDidMount();        }
        
    }
    handleSubmit=async (e)=>{
        //we have to run this line to stop any problem to cause
        
        
        e.preventDefault();
        // console.log("hello");
        let file=this.fileUpload.current.files[0];
        // console.log(file);
        let formData=new FormData();
        // console.log(formData);
        formData.append("photo",file);
        formData.append("name",this.state.name);
        formData.append("handle",this.state.handle);
        formData.append("bio",this.state.bio);
        console.log(formData);
        let patchData=await axios.patch("http://localhost:3000/user/714068e1-423c-4d35-83b9-8f7a95313820/",formData);
        console.log(patchData); 
        this.componentDidMount();
        
        

    }

    render(){
        let {name,handle,bio,phone,email,pImage,isPublic,isDisabled}=this.state;
        let onChangeHandler=this.onChangeHandler;
        return (
            
            <div className="settings d-flex justify-content-around">
                <div className="settings-profile-photo">
                    <img src={pImage} alt="profile.jpeg"/>
                    <input type="file" name="upload" id="uploadPhoto/" ref={this.fileUpload}/>
                </div>
                <div className="settings-profile-data">
                    <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">
                            NAME
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" value={name} id="name" disabled={isDisabled} onChange={(e)=>onChangeHandler(e)}/>
                                </div>

                            </div>
                        
                        <div className="form-group row">
                            <label htmlFor="handle" className="col-sm-2 col-form-label">
                            HANDLE
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" value={handle} id="handle" disabled={isDisabled} onChange={(e)=>onChangeHandler(e)}/>
                                </div>

                            </div>
                        <div className="form-group row">
                            <label htmlFor="bio" className="col-sm-2 col-form-label">
                            BIO
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" value={bio} id="bio" disabled={isDisabled} onChange={(e)=>onChangeHandler(e)}/>
                                </div>

                            </div>

                            {isDisabled&&<div className="edit btn btn-warning" onClick={this.editHandler}>EDIT</div>}
                            {!isDisabled&&<div className="edit btn btn-warning" onClick={this.editHandler}>CANCEL CHANGES</div>}

                        
                        <button type="submit" className="submit btn btn-danger">SUBMIT</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings ;