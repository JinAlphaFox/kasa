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

function Card({ id, cover, title }) {
  return (
    <Link to={`/accommodation/${id}`}>
      <CoverLogement src={cover} alt={title} />
      <TitleLogement>{title}</TitleLogement>
    </Link>
  )
}

export default Card
