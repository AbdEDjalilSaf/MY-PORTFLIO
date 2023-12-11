import React, { useRef, useState } from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import './App.css'
import Home from './Home.jsx'
import AboutME from './AboutME';


function App() {

  console.log(window.location.pathname);  


return (
<>


<Routes>

<Route path='/' element={<Home />}/>
<Route path='/AboutME' element={<AboutME />}/>

</Routes>













</>
)
}






export default App
