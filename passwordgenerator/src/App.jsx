import { useCallback, useEffect, useState,useRef } from 'react'
//import './App.css'

function App() {
  const [length,setLength]=useState(8);//for the length of password
  const [noAllowed,setNoAllowed]=useState(false);//for number will be present in password or not
  const [charAllowed,setCharAllowed]=useState(false);//for number will be present in password or not
  const [password,setPassword]=useState("");//for password is present in unput field

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(noAllowed)str+="0123456789"
    if(charAllowed)str+="/*-+`~!@#$%^&*()_="

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char)
    }
    setPassword(pass)

  },[length,noAllowed,charAllowed,setPassword])//based on this "length,noAllowed,charAllowed" defendicies generate diff password
  
  //above setPassword is passed so that the code is optimised and valued is stored
  const copytoclipBoard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,noAllowed,charAllowed])//it means when ever length,no allowed charallowed is changed call passwordGenerator()

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-500'>
      <h1 className='text-white font-medium text-center my-3 text-xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg mb-4'>
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button onClick={()=>{copytoclipBoard()}} 
            className='outlinr-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg hover:bg-violet-900'>Copy</button>
        </div>
        <div className='flex text-lg gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Lenght:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={noAllowed}
            id="numberInput"
            onChange={()=>{
              setNoAllowed((prev)=>!prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
            />
            <label>Characters</label>
          </div>
        </div>
     </div>    
    </>
  )
}

export default App
