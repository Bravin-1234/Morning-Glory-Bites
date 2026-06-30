import { BrowserRouter, Routes, Route}
from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./Menu";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App(){

  return(
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/menu" element={<Menu/>}/>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/location" element={<Location/>}/>
      <Route path = "/contact" element={<Contact/>}/>
    </Routes>

    <Footer/>
    
    </BrowserRouter>
  )
}

export default App;