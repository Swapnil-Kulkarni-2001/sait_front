import React from "react"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Events from "./components/Events"
import ClubServices from "./components/ClubServices"
import Members from "./components/Members"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Otheractivities from "./components/Otheractivities"
import SEvent from "./components/SEvent";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/clubservices" element={<ClubServices/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/otheractivities" element={<Otheractivities/>}/>
          <Route path="/events/:name" element={<SEvent/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
