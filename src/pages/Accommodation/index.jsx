import { useParams } from "react-router-dom"
import { useEffect } from "react"
import "./Accommodation.scss"
import Slideshow from "../../components/Slideshow"
import bdd from "../../logements.json"
import Collapse from "../../components/Collapse"

function Accommodation() {
  const { id } = useParams()
  let logement = {}
  let rating = []
  for (let i = 0; i < bdd.length; i++) {
    if (bdd[i].id === id) {
      logement = bdd[i]
    }
  }

  for (let i = 0; i < 5; i++) {
    rating[i] = (
      <span
        key={`star${i}`}
        className={`accommodation__indications__stars${logement.rating <= i ? "--inactive" : ""}`}
      >
        <i className="fa-solid fa-star"></i>
      </span>
    )
  }

  console.log(logement.equipments)

  return (
    <main className="accommodation">
      <Slideshow id={id} />
      <div className="accommodation__infos">
        <div className="accommodation__infos__title">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
        </div>
        <div className="accommodation__infos__host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="propriétaire du bien" />
        </div>
      </div>
      <div className="accommodation__indications">
        <div className="accommodation__indications__tags">
          {logement.tags.map((e) => {
            return (
              <span key={e} className="accommodation__indications__tags__tag">
                {e}
              </span>
            )
          })}
        </div>
        <div className="accommodation__indications__stars">
          {rating.map((e) => {
            return e
          })}
        </div>
      </div>
      <div className="accommodation__details">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </main>
  )
}

export default Accommodation
