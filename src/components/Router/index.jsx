import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Accommodation from "../../pages/Accommodation"
import About from "../../pages/About"
import Error from "../../pages/Error"
import Banner from "../Banner"

function Rout() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default Rout
