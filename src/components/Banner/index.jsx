import { Link } from "react-router-dom"
import logo from "../../assets/LOGO.png"
import "./Banner.scss"
import { useLocation } from "react-router-dom"

function Banner() {
  const where = useLocation()
  let accueilActive = false
  let aboutActive = false
  switch (where.pathname) {
    case "/":
      accueilActive = true
      aboutActive = false
      break
    case "/about":
      accueilActive = false
      aboutActive = true
      break
    default:
      accueilActive = false
      aboutActive = false
      break
  }

  return (
    <header>
      <img src={logo} alt="Logo kasa" />
      <nav className="navMenu">
        <Link
          to="/"
          className={`navMenu__link-black${accueilActive ? "--active" : ""}`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`navMenu__link-black${aboutActive ? "--active" : ""}`}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Banner
