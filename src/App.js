import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [data, setData] = useState([])

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>{setData(res.data);console.log(res.data)})
    },[])
 
  return (
    <div>
     {data.map((value, i)=> {
       return <p key={i}>{value.name}</p>
     })}  
    </div>
  )
}
