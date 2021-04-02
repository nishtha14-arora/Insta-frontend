import React, { Component } from 'react'
import "./ProfileList.css";

// const ProfileList=(props) =>{
//     let {view ,userList}=props;
//             // console.log(userList);

//     return(
//         <div className="profile-list">
//             <div className="view-name">{view}</div>
            
//                {userList.map( (user) =>{
                
//                  return <div key = {user.uid}  className="user">
//                     <div className="user-image">
//                         <img src="profile.jpeg" alt=""/>
//                     </div>
//                     <div className="user-details">
//                         <div className="user-name">{user.name}</div>
//                         <div className="user-handle">{user.handle}</div>
//                     </div>
//                 </div>

//             })}
//         </div>

//     );
// }



const ProfileList = (props) => {
    let {view , userList} = props;
    

    return (  
        <div className="profile-list">
            <div className="view-name">{view}</div>

            {userList.map(  (user) =>{
                // console.log(user.pImage);
                return <div  className="user">
                    <div className="user-image">
                        <img src={user.pImage} alt="profile.jpeg"/>
                    </div>
                    <div className="user-details">
                   <div className="user-name">{user.name}</div>
                   <div className="user-handle">{user.handle}</div>
                    </div>

                </div>
            }  )}

        </div>
    );
}


export default ProfileList ;