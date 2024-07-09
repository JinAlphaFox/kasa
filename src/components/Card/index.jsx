import styled from "styled-components"
import { Link } from "react-router-dom"

const CoverLogement = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  @media (max-width: 1275px) {
    width: 335px;
    height: 255px;
  }
`
const TitleLogement = styled.h3`
  color: white;
  position: relative;
  top: -90px;
  left: 20px;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

function Card({ id, cover, title }) {
  return (
    <StyledLink to={`/accommodation/${id}`}>
      <CoverLogement src={cover} alt={title} />
      <TitleLogement>{title}</TitleLogement>
    </StyledLink>
  )
}

export default Card
