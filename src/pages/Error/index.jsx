import { Link } from "react-router-dom"
import "./Error.scss"

function Error({ majAccueil, majAbout }) {
  majAccueil(false)
  majAbout(false)
  return (
    <main className="error">
      <h1>404</h1>
      <h2>
        Oups! La page que{window.innerWidth <= 1275 ? <br /> : " "}vous demandez
        n'existe pas.
      </h2>
      <p>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </p>
    </main>
  )
}

export default Error
