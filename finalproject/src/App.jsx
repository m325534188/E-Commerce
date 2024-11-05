import { useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import NewUser from '../project/NewUser'
function App() {
 

  return (
    <>
   <h1>React Routing</h1>
   {/* <Link to='/'>Login</Link> */}
   <Route>
    <Route path='/' element={<NewUser/>}/>
   </Route>
    </>
  )
}

export default App
