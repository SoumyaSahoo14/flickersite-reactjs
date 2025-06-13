import "./CSS/App.css";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import Favorites from "./pages/Favorites";
import NavBar from "./Components/NavBar";
import { PictureProvider } from "./contexts/PictureContext";

function App() {

  return (
  <div>
    <PictureProvider>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </PictureProvider>
  </div>
  );
}
    

export default App;
