import { Link } from "react-router-dom"
import logo from "../../assets/LOGO.png"

function Banner() {
  return (
    <header>
      <img src={logo} alt="Logo kasa" />
      <nav className="navMenu">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Banner
