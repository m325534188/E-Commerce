import React, { useState } from 'react'
import {useParams  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link,Outlet } from 'react-router-dom';
function NewUser() {
  const navigate = useNavigate();

  const{name}=useParams()
  const [Savedata,setsavedata]=useState({name: '' ,lastname:''})
  const next=()=>{
   sessionStorage.name=Savedata.name;
   sessionStorage.lastname=Savedata.lastname;
    navigate('NewUser/DataUser')
  }


  
  return (
    <div >
       {/* style={{border:'black', height:'200px', width:'300px'}} */}
        First name:<input type="text" style={{ width: '94%',display: 'block',padding: '10px', height:'10px'}} onChange={(e)=>setsavedata({...Savedata,name:e.target.value})}></input><br />
        Last name:<input type="text box" style={{ width: '94%',display: 'block',padding: '10px', height:'10px'}} onChange={(e)=>setsavedata({...Savedata,lastname:e.target.value})}></input><br />
        User name:<input type="text box" style={{ width: '94%',display: 'block',padding: '10px', height:'10px'}} ></input><br />
        Password  <input type="Password" style={{ width: '94%',display: 'block',padding: '10px', height:'10px'}}></input><br />
       
        <button onClick={next} >Creat</button>
        {/* <Link to='DataUser'>About Page</Link> <br /> */}
        
        {/* <Outlet /> */}
        {/* < style={{ width: '95%', background:'blue',display: 'block',padding:'10px'}}/>creat<br /> */}

        {/* <h1>Hello{name}</h1> */}
    </div>
  )
}

export default NewUser