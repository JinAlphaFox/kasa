import { useState } from "react"
import "./Collapse.scss"

function Collapse({ title, content }) {
  const [onOff, majOnOff] = useState(false)

  function inversionCollapse() {
    majOnOff(!onOff)
  }

  return (
    <div className="dropdown">
      <div className="dropdown__titre">
        <h2>{title}</h2>
        <span className="dropdown__titre__collapse" onClick={inversionCollapse}>
          <i className={`fa-solid fa-chevron-up ${onOff ? "open" : ""}`}></i>
        </span>
      </div>
      <div className={`dropdown__contenu ${onOff ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((e) => {
              return <li key={e}>{e}</li>
            })}
          </ul>
        ) : (
          content
        )}
      </div>
    </div>
  )
}

export default Collapse
