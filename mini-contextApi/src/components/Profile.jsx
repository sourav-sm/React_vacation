import React,{useContext} from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const {user} =useContext(userContext)//here we import user using usercontext 
    if(!user)return <div>Please Login</div>
    return <div>Welcome {user.userName}</div>
}

export default Profile