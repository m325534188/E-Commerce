import axios from 'axios';
// import React from 'react'
import React, { useState ,useEffect} from 'react'
<link rel="stylesheet" href="styles.css"></link>
import { Link } from 'react-router-dom';
function Customers() {

  const[custom,setcustom]=useState([])

  const getdata=async()=>{
  const res=await axios.get('http://localhost:5000/buyers')
  setcustom(res.data)
  }
   
  useEffect(() => {
    getdata();
  }, []);
 

  return (
    <div style={{textAlign:"center" }}>Customers

    <span className="words">Hello {sessionStorage.name} {sessionStorage.lastname}</span>
     {/* <div className="links">
                <Link to='/Products'href="#">Products</Link> <br />
                <Link to='/Categories' href="#">Categories</Link> <br />
                <Link to='/Statistics' href="#">Statistics</Link> <br />

       </div> */}
       
<table style={{width:"50%",height:"100px",border:"1px solid black",marginBottom:"200px",border: "1px solid black",bordercollapse: "collapse"}}>
    <thead>
	   	  <tr >
			<th>Name</th>
			<th>Joind at</th>
      <th>Prodact bought</th>
	    	</tr>
	</thead>


	 <tbody>
          {custom.map((item, index) => (
            <tr key={index}>
              <td style={{border:" 1px solid black",padding: "8px"}}>{item.name|| 'N/A'}</td>
              <td style={{border:" 1px solid black",padding: "8px"}}>{item.joinedat}</td>
              <td style={{border:" 1px solid black",padding: "8px"}}>{item.productbought}</td>
            </tr>
          ))}
        </tbody>

  </table>
       </div>
  )
}

export default Customers