
import { Link,useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import axios from 'axios';

function HomePage() {
    const navigate=useNavigate();
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

    const squareStyle = {
      width: '500x',
      height: '300px',
      border: '2px solid black',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'lightblue',
      
    };
 
    const Newcustomer=async(e)=>{
      e.preventDefault();

     const newcustomer={
       name:name,
       email:email,
       password:password,
       joinedat: new Date().toISOString().split('T')[0],
   }

try{

  const response=await axios.post('http://localhost:5000/buyers',newcustomer)
  console.log("User added successfully:", response.data);
  alert("User registered successfully!");
  if (response.status === 201) {
    navigate('/NewUser/DataUser');
  }
   }catch(error){
  console.log("Error registering user:", error);
  alert("Failed to register user. Please try again.");
  console.error("Error details:", error.response ? error.response.data : error.message);

   }
  }

  return (
    <div>
      <h1 style={{fontSize:'20px'}}>Next Generation E-Commerce</h1>
      <div>
     <form style={squareStyle} onSubmit={Newcustomer}>
    
     user name <br />
     <input type="text" onChange={(e)=>setname(e.target.value)} required style={{ width: '94%',display: 'block',padding: '10px'}} /><br />
     password <br />
     <input type="password" onChange={(e)=>setpassword(e.target.value)}required style={{ width: '94%',display: 'block',padding: '10px'}}/> <br />
     email: <br/>
     <input type="email" onChange={(e)=>setemail(e.target.value)}required style={{ width: '94%',display: 'block',padding: '10px'}}/> <br />
    <button type="submit"  to='/NewUser/DataUser' style={{ width: '95%', background:'blue',display: 'block',padding: '10px'}}>Register</button><br />
     NewUser? <Link to='/NewUser'>Log in</Link>
     </form>
     </div>
     </div>

  )
}

export default HomePage




  
