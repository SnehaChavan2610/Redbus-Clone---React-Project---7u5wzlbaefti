import React from 'react'
import '../styles/App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../components'

import Home from './Home';
import List from './List';
const App = () => {


  return (

   <BrowserRouter>
   <Routes>
    <Route path='/home'element={<Home/>}/>
    <Route path='/list'element={<List/>}/>
    

  
   </Routes>
   </BrowserRouter>
  )
}


export default App;
