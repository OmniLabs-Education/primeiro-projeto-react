import { useParams } from "react-router-dom"

function UpdateUser() {
  const { id } = useParams()

  console.log(id)

  return (
    <h1>adfadf</h1>
  )
}

export default UpdateUser