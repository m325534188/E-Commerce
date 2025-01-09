import React from 'react'
import { Link } from 'react-router-dom';
function Statistics() {
  return (
    <div style={{textAlign:"center" ,marginBottom:"300px" }}>Statistics
   

<span className="words">Hello {sessionStorage.name} {sessionStorage.lastname}</span>
  
   {/* <div className="links">
     <Link to='/Customers'href="#">Customers</Link> <br />
     <Link to='/Categories' href="#">Categories</Link> <br />           
     <Link to='/Products' href="#">Products</Link> <br />   
    </div> */}
   
    </div>
  )
}

export default Statistics