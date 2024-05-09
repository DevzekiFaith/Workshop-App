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
import Footer from "./Pages/Meet Our Team/components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Navbar from "./Pages/Meet Our Team/components/Navbar"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {


  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
       
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Method" element={<Method />} />
            <Route path="/contact" element={<ContacUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/Portfolio" element={<OurPortFolio />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App
