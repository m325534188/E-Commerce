import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
function HomePage() {
    const navigate=useNavigate();

    const squareStyle = {
      width: '500x',
      height: '300px',
      border: '2px solid black',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'lightblue',
      
    };
  return (
    <div>
      <h1 style={{fontSize:'20px'}}>Next Generation E-Commerce</h1>
     <div style={squareStyle}>
     user name <br />
     <input type="text" style={{ width: '94%',display: 'block',padding: '10px'}} /><br />
     password <br />
     <input type="password" style={{ width: '94%',display: 'block',padding: '10px'}}/> <br />
     <Link to='/HomePage' style={{ width: '95%', background:'blue',display: 'block',padding: '10px'}}>Login</Link><br />
     NewUser? <Link to='/'>register</Link>
   </div>
        {/* <h1 style={{fontSize:'20px'}}>Home Page</h1>
        <div  style={{background:'gray', width:'400px', height:'400px'}}>
          User name:<input type="text box"></input><br />
          Password<input type='password'></input> */}

       </div>
    // </div>
  )
}

export default HomePage