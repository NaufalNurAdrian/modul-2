import { Route, Routes } from "react-router-dom"
import HomePage from "../src/pages/homepage"
import DetailUserPages from "./pages/DetailUserPages"
import Berandapage from "./pages/berandapage"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/berandapage" element={<Berandapage />}/>
        <Route path="/:id" element={<DetailUserPages/>}/>   
      </Routes>
    </div>

  )
}

export default App
