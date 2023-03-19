import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'


function AppRouter() {
  return (
    <Routes>
        <Route exact path={'/'} element={<Home/>} />
        <Route exact path={'/about'} element={<About/>} />
        <Route exact path={'/portfolio'} element={<Portfolio/>} />
    </Routes>
  )
}

export default AppRouter