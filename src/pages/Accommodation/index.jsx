import { useParams } from "react-router-dom"

function Accommodation() {
  const { id } = useParams()
  return <main>{id}</main>
}

export default Accommodation
