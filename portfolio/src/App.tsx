
import Homepage from "./pages/homepage";
import { Routes, Route} from "react-router-dom";
import PortfolioPages from "./pages/portfoliopages";
import AboutPage from "./pages/aboutpage";
import ContacPage from "./pages/contacpage";

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/port" element={<PortfolioPages/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/contac" element={<ContacPage/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
