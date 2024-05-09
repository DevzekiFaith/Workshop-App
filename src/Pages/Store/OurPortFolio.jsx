import React from 'react'
import Statistics from "./Statistics"
import Products from "./Products"
const OurPortFolio = () => {
  const className = "max-w-6xl  w-10/12 mt-10 py-8 m-auto";
  return (
    <>
      <section className={`${className}`}>
        <h2 className="text-center text-3xl sm:text-6xl capitalize mb-4">our porfolio</h2>
        <Statistics />
        <Products />
      </section>
    </>
  );
}

export default OurPortFolio
