import { Link } from "react-router-dom"
import logo from "../../assets/LOGO.png"
import "./Banner.scss"

function Banner({ accueilActive, aboutActive }) {
  return (
    <header>
      <img src={logo} alt="Logo kasa" />
      <nav className="navMenu">
        <Link to="/" className={`link-black ${accueilActive ? "-active" : ""}`}>
          Accueil
        </Link>
        <Link
          to="/about"
          className={`link-black ${aboutActive ? "-active" : ""}`}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Banner
