import React from "react"
import Router from "./components/Router"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import "./style/App.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    </style>
    <Router />
  </React.StrictMode>,
)
