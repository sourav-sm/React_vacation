import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
/****--------useState-------
useState is used to manage state in functional components. It allows you to add state variables to your component.

When to use:
When you need to store and manage dynamic values within a component.
For managing simple state such as form inputs, toggles, or counters.*/


// function App() {
//   const [count,setCount]=useState(0);
//   return (
//     <div>
//         <h1>count is {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Click</button>
//     </div>
//   )
// }

// export default App

/*****useEffect
useEffect is used to handle side effects in functional components. It runs after the component renders and can be configured to run based on changes to specific values.

When to use:
When you need to perform side effects such as data fetching, subscriptions, or manually changing the DOM.
When you need to clean up resources to avoid memory leaks (e.g., removing event listeners or canceling API requests). */

function App() {
  const [data,setData]=useState(0);
  const [loading,setLoading]=useState(true);
  const[err,setErr]=useState(null);
  
  useEffect(()=>{
    fetch('https://exampleapi.com/data')
    .then((response)=>response.json())
    .then((data)=>
      setData(data),
    setLoading(false)
    )
    .catch((err)=>(
      setErr(err),
      setLoading(true)
    ))
  },[])// Empty dependency array means this effect runs once on mount

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>  
  )
}

export default App