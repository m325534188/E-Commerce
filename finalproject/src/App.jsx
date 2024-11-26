import { useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import NewUser from '../project/NewUser'
import HomePage from '../project/HomePage'
import DataUser from '../project/DataUser'
import Products from '../project/Products'
import Categories from '../project/Categories'
import Statistics from '../project/Statistics'
import Customers from '../project/Customers'
function App() {


  return (
    <>

   <Routes>
    <Route path='/' element={<NewUser/>}/>
    <Route path='/HomePage' element={<HomePage/>}/>

    <Route path='NewUser/DataUser' element={<DataUser/>}/>

        {/* Nested Routing */}


    <Route path='/NewUser/DataUser' element={<DataUser/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Customers' element={<Customers/>}/>
    <Route path='/Categories' element={<Categories/>}/>

       <Route path='/NewUser/DataUser/Products' element={<Products/>}/>
       <Route path='/NewUser/DataUser/Statistics' element={<Statistics/>}/>
       <Route path='/NewUser/DataUser/Customers' element={<Customers/>}/>
       <Route path='/NewUser/DataUser/Categories' element={<Categories/>}/>



   
    </Routes>
    


  
    </>
  )
}

export default App
