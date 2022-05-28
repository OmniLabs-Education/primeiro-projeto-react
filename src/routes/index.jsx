import {Routes, Route} from 'react-router-dom'
import CreateUser from '../pages/CreateUser'
import ListUsers from '../pages/ListUsers'

function Router() {
  return(
    <Routes>
      <Route index element={<CreateUser />} />
      <Route path="/listUsers" element={<ListUsers />} />
    </Routes>
  )
}

export default Router