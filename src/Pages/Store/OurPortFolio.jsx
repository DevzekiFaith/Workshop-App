// import React from 'react'

import Navbar from "./Navbar";
import Products from "./Products";
import Statistics from "./Statistics";

const OurPortFolio = () => {
 const className = "max-w-6xl  w-10/12 mt-10 py-8 m-auto";
 return (
   <>
    
     <section className={`${className}`}>
       <h2 className="text-center text">our porfolio</h2>
       <Statistics />
       <Products />
     </section>
   </>
 );
}

export default OurPortFolio
