import logo from "../../assets/logo-footer.jpg"
import "./Footer.scss"

function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="Logo Kasa" />
        <p>
          <span>© 2020 Kasa. All</span>
          <span>rights reserved</span>
        </p>
      </footer>
    </>
  )
}

export default Footer
