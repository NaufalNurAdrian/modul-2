import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/homepages"
import RegisterPage from "./pages/registerpage"
import Navbar from "./component/navbar"
import DetailUserPages from "./pages/DetailUserPages"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/:id" element={<DetailUserPages/>}/>   
      </Routes>
    </div>

  )
}

export default App
