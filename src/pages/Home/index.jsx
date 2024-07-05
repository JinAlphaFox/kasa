import bdd from "../../logements.json"
import styled from "styled-components"
import background from "../../assets/Image.jpg"
import Card from "../../components/Card"

const Main = styled.main`
  width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media (max-width: 1275px) {
    width: 335px;
    gap: 22px;
  }
`
const Gallery = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  background-color: #f6f6f6;
  padding: 60px;
  border-radius: 25px;
  @media (max-width: 1275px) {
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 0;
    box-sizing: border-box;
  }
`
const Title = styled.h2`
  font-size: 48px;
  width: 100%;
  color: white;
  height: 223px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  @media (max-width: 1275px) {
    height: 111px;
    font-size: 24px;
    justify-content: flex-start;
    padding-left: 24px;
    box-sizing: border-box;
    margin: 0;
    border-radius: 10px;
  }
`
const Logement = styled.article`
  width: 340px;
  height: 340px;
`

function Home({ majAccueil, majAbout }) {
  majAccueil(true)
  majAbout(false)

  return (
    <Main>
      <Title>
        Chez vous,{window.innerWidth <= 1275 ? <br /> : " "}partout et ailleurs
      </Title>
      <Gallery>
        {bdd.map((element) => {
          return (
            <Logement key={element.id}>
              <Card
                id={element.id}
                cover={element.cover}
                title={element.title}
              />
            </Logement>
          )
        })}
      </Gallery>
    </Main>
  )
}

export default Home
