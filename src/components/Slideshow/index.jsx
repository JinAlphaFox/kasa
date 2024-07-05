import bdd from "../../logements.json"
import { useState, useEffect } from "react"
import "./Slideshow.scss"

function Slideshow({ id }) {
  let logement = {}
  const [actualPictures, majActual] = useState(0)
  const [nbPictures, majNb] = useState(0)
  useEffect(() => {
    for (let i = 0; i < bdd.length; i++) {
      if (bdd[i].id === id) {
        logement = bdd[i]
      }
    }
    const carrousel = document.getElementsByClassName("carrousel")
    carrousel[0].style.backgroundImage = `url(${logement.pictures[actualPictures]})`
    majNb(logement.pictures.length)
  }, [actualPictures])
  function imgChangeMoins() {
    majActual(actualPictures - 1)
    if (actualPictures < 1) {
      majActual(nbPictures - 1)
    }
  }
  function imgChangePlus() {
    majActual(actualPictures + 1)
    if (actualPictures >= nbPictures - 1) {
      majActual(0)
    }
  }
  return (
    <div className="carrousel">
      <span
        className={`carrousel__arrow ${nbPictures > 1 ? "" : "--hidden"}`}
        onClick={imgChangeMoins}
      >
        <i className={`fa-solid fa-chevron-left`}></i>
      </span>
      <span className={`carrousel__nbPage ${nbPictures > 1 ? "" : "--hidden"}`}>
        {actualPictures + 1}/{nbPictures}
      </span>
      <span
        className={`carrousel__arrow ${nbPictures > 1 ? "" : "--hidden"}`}
        onClick={imgChangePlus}
      >
        <i className={`fa-solid fa-chevron-right`}></i>
      </span>
    </div>
  )
}

export default Slideshow
