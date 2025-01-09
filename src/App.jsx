import { useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import NewUser from './project/NewUser'
import HomePage from './project/HomePage'
import DataUser from './project/DataUser'
import Products from './project/Products'
import Categories from './project/Categories'
import Statistics from './project/Statistics'
import Customers from './project/Customers'
import Shop from './project/redux/Shop'
import PurchaseForm from './project/redux/PurchaseForm'
import Entering from './project/Entering' 
function App() {


  return (
    <>

  <nav className='navbar'>
        
            <Link to="/Customers">Customers</Link>
          
            <Link to="/Categories">Categories</Link>
         
            <Link to="/Products">Products</Link>
          
            <Link to="/Statistics">Statistics</Link>
         
      </nav>
          
   <Routes>  
    <Route path='/' element={<Entering/>}/>

    <Route path='/NewUser' element={<NewUser/>}/>
    <Route path='/Entering/HomePage' element={<HomePage/>}/>

    <Route path='NewUser/DataUser' element={<DataUser/>}/>

        {/* Nested Routing */}
    <Route path='/NewUser/DataUser' element={<DataUser/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Customers' element={<Customers/>}/>
    <Route path='/Categories' element={<Categories/>}/>
    <Route path='/Statistics' element={<Statistics/>}/>

       <Route path='/NewUser/DataUser/Products' element={<Products/>}/>
       <Route path='/NewUser/DataUser/Statistics' element={<Statistics/>}/>
       <Route path='/NewUser/DataUser/Customers' element={<Customers/>}/>
       <Route path='/NewUser/DataUser/Categories' element={<Categories/>}/>

       <Route path="/Shop" element={<Shop />} />
       <Route path="/PurchaseForm" element={<PurchaseForm />} />

   
    </Routes>
    


  
    </>
  )
}

export default App
