import React from 'react'
import HomePage from './HomePage'
import { Link,useNavigate } from 'react-router-dom';

function Products() {

  return (
    <div style={{textAlign:"center" ,marginBottom:"300px"}}>Products
  
        
        {/* <Link to='/HomePage'>Return to the home page, click here</Link> */}
        {/* <Link to='/' style={{fontSize:'10px'}}>home page</Link> */}
        
         {/* <div className="links">
      
        <Link to='/Customers'href="#">Customers</Link> <br />
        <Link to='/Categories' href="#">Categories</Link> <br />
        <Link to='/Statistics' href="#">Statistics</Link> <br />
       </div> */}
        {/* <Link to='/' style={{border:'2px black'}}>home page</Link> */}

    </div>
  )
}

export default Products