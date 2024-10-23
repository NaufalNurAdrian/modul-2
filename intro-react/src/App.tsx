import Navbar from "./components/navbar"
import AboutPage from "./pages/about"
import Contact from "./pages/contact"
import HomePage from "./pages/home"
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
