import React from 'react'
import image from '/image.png'
import './Home.css'
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className='homebody'>
      <h4 className='homeh4'>
        A Venture studio with a ‘unique’ twist
      </h4>
      <p className='homep'>
        Explore the 24 apps with unique solutions and their metrics
      </p>
      <img className='image' src={image} alt="" />
      <a className='text-decoration-none' href='#'>
        <button className='homebtn'>
          <span className='textbtn'>Our Portfolio</span> <GoArrowRight className='iconbtn' />
        </button>
      </a>
      <h5 className='homeh5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h5>
    </div>
  )
}

export default Home
