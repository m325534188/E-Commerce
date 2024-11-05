import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
function HomePage() {
    const navigate=useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        <div  style={{background:'gray', width:'400px', height:'400px'}}>
          User name:<input type="text box"></input>
          Password<input type='password'></input>
       <button onClick={() => navigate('/')} style={{background: 'red', width: '200px', height: '200px'}}>New user?</button>
       </div>
    </div>
  )
}

export default HomePage