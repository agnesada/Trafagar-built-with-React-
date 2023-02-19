import React from 'react'
import "./hero.css"
import HeroImage from "../../assets/heroImg.png"

const Hero = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6'>
            <div className='health'>
                <h2>Virtual healthcare <br/> for you</h2>
                <p className='mb-4'>Trafalgar provides progressive, and affordable <br/>
                    healthcare, accessible on mobile and online <br/>
                    for everyone
                </p>
                <button className='hero-btn'>Consult today</button>
            </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 col-xlg-6 '>
            <div>
                <img className='hero-image' src={HeroImage} alt/>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
