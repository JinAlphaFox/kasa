import logo from "../../assets/logo-footer.jpg"
import "./Footer.scss"

function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="Logo Kasa" />
        <p>
          © 2020 Kasa. All{window.innerWidth <= 1275 ? <br /> : " "}rights
          reserved
        </p>
      </footer>
    </>
  )
}

export default Footer
