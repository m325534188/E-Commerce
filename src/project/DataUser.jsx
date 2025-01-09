import React from 'react'
import HomePage from './HomePage'
import { Link,useNavigate } from 'react-router-dom';

function DataUser() {

// const navigate=useNavigate();
  return (
    
    <div>
      
         <Link to="/PurchaseForm">מנהל</Link><br />
       
         <Link to="/Shop">חנות</Link><br />
        <span >Hello </span>
      <span className="words">Hello {sessionStorage.name} {sessionStorage.lastname}</span>
     {/* <div className="links">
        <Link to='Products' >Products</Link> <br />
        <Link to='Customers'href="#">Customers</Link> <br />
        <Link to='Categories' href="#">Categories</Link> <br />

        <Link to='Statistics' href="#">Statistics</Link> <br />
       </div> */}
        <Link to='/' style={{border:'2px black'}}>home page</Link>
        
        </div>
  )
}

export default DataUser