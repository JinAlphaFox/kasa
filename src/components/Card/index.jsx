import styled from "styled-components"
import { Link } from "react-router-dom"

const CoverLogement = styled.img`
  width: 340px;
  height: 340px;
`
const TitleLogement = styled.h3`
  color: white;
  position: relative;
  top: -90px;
  left: 20px;
`

function Card(logement) {
  return (
    <Link to={`/accommodation/${logement.element.id}`}>
      <CoverLogement
        src={logement.element.cover}
        alt={logement.element.title}
      />
      <TitleLogement>{logement.element.title}</TitleLogement>
    </Link>
  )
}

export default Card
