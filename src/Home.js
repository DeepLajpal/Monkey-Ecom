import React from 'react';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import FeatureSection from './components/FeatureSection';

const Home = () => {

  const myData = {
    name : "Monkey ECOM"
  }

  return (
    <>
    <HeroSection myData={myData}/>
    <FeatureSection/>
    <Services/>
    <Trusted/>
    </>
  )
}


export default Home