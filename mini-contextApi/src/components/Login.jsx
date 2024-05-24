import React,{useState,useContext} from 'react'
import userContext from '../context/UserContext';

//method for sending data

function Login() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    
    //here setUser is came from userContext.js file 
    const {setUser} = useContext(userContext)

    const handleSubmit=(e)=>{///here this e can be anything like username,password,
        e.preventDefault();//preventing default behaviour
        setUser({userName,password})//way for passing username and password to gobal variable using contextapi
    }
    return (
    <div>
        <h2>LoginIn</h2>
        <input type="text" 
          placeholder='Username'
          value={userName} 
          onChange={(e)=>setUserName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;