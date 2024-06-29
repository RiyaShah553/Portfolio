import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllComponents from './Components/AllComponents'
const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <BrowserRouter>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Routes>
        <Route path='/' element={<AllComponents toggle={toggle} setToggle={setToggle} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
