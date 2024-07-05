import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Accommodation from "../../pages/Accommodation"
import About from "../../pages/About"
import Error from "../../pages/Error"
import Banner from "../Banner"
import Footer from "../Footer"
import { useState } from "react"

function Rout() {
  const [accueilActive, majAccueil] = useState()
  const [aboutActive, majAbout] = useState()
  return (
    <Router>
      <Banner accueilActive={accueilActive} aboutActive={aboutActive} />
      <Routes>
        <Route
          path="/"
          element={<Home majAccueil={majAccueil} majAbout={majAbout} />}
        />
        <Route
          path="/accommodation/:id"
          element={
            <Accommodation majAccueil={majAccueil} majAbout={majAbout} />
          }
        />
        <Route
          path="/about"
          element={<About majAccueil={majAccueil} majAbout={majAbout} />}
        />
        <Route
          path="*"
          element={<Error majAccueil={majAccueil} majAbout={majAbout} />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Rout
