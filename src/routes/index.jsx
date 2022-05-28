import {Routes, Route} from 'react-router-dom'
import CreateUser from '../pages/CreateUser'
import ListUsers from '../pages/ListUsers'
import UpdateUser from '../pages/UpdateUser'

function Router() {
  return(
    <Routes>
      <Route index element={<CreateUser />} />
      <Route path="/listUsers" element={<ListUsers />} />
      <Route path="/updateUser/:id" element={<UpdateUser />} />
    </Routes>
  )
}

export default Router