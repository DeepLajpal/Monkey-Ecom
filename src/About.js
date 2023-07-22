import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const myData = {
    name : "Monkey ECOM Store"
  }
  return (
    <HeroSection myData={myData}/>
  )
};

export default About;