import {  Routes, Route } from "react-router-dom"
import OurPortFolio from "./Pages/Store/OurPortFolio"
import Home from "./Pages/Home/Home"
import AboutUs from "./Pages/About Us/AboutUs"
import Method from "./Pages/Our Method/Method"
import ContacUs from "./Pages/Contact/ContacUs"
import Team from "./Pages/Meet Our Team/Team"
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage"
import './App.css'
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<AboutUs /> } />
          <Route path="/Method" element={<Method /> } />
          <Route path="/contact" element={<ContacUs  /> } />
          <Route path="/team" element={<Team  /> } />
          <Route path="/Portfolio" element={<OurPortFolio/> } />
          <Route path="*" element={<NotFoundPage/> } />
        </Routes>
          <Footer/>
      </div>
    </>
  )
}

export default App
