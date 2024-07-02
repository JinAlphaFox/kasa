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
`
const Gallery = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  background-color: #f6f6f6;
  padding: 60px;
  border-radius: 25px;
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
`
const Logement = styled.article`
  width: 340px;
  height: 340px;
`

function Home() {
  return (
    <Main>
      <Title>Chez vous, partout et ailleurs</Title>
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
