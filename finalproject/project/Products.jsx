import React from 'react'
import HomePage from './HomePage'
import { Link,useNavigate } from 'react-router-dom';

function Products() {

  return (
    <div>

        <p1 style={{color:"black"}}>Clothes</p1> <br />
        {/* <Link to='/HomePage'>Return to the home page, click here</Link> */}
        <Link to='/HomePage' style={{fontSize:'10px'}}>Return to the home page, click here</Link>


    </div>
  )
}

export default Products