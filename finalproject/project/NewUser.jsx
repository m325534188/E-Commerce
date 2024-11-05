import React from 'react'
import {useParams  } from 'react-router-dom'
function NewUser() {

  const{name}=useParams()
  return (
    <div style={{background:'red', width:'400px', height:'400p'}}>
        <h1>New user Registation</h1>
        First name:<input type="text box"></input>
        Last name:<input type="text box"></input>
        User name:<input type="text box"></input>
        Password  <input type="Password"></input>

        {/* <h1>Hello{name}</h1> */}
    </div>
  )
}

export default NewUser