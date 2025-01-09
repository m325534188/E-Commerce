import { Link,useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import axios from 'axios';
// import img1 from './image/רקע1.jpeg';

function Entering() {
    const navigate=useNavigate()
     const [name,setname]=useState('');
     const[password,setpassword]=useState('');
      const [users,setusers]=useState([]);

 const finduser=async()=>{
    const response=await axios.get(' http://localhost:5000/buyers')
    const users=response.data
    setusers(users)
    const user=users.find((item)=>item.name===name && item.password===password)
    if (user)
         navigate('/NewUser/DataUser')
      else{
        alert('You are not registered')
        navigate('/Entering/HomePage')
      }     
}
      
       return (
        // style={{backgroundImage:`url(${img1})`,backgroundSize:'cover',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}
    <div className='styleofregister'><br/>
        Enter User name<br/>
     <input type='text' onChange={(e)=>{setname(e.target.value)}}/><br />
      Entre Password <br/>
       <input type='password' onChange={(e)=>{setpassword(e.target.value)}}/><br /><br></br>
       <button  onClick={finduser}>Enter</button>
    </div>
  )
}

export default Entering
