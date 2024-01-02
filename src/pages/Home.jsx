import React from 'react'
import HomeHeader from '../components/HomeHeader';
import Carousal from '../components/Carousal';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import SearchDomain from '../components/SearchDomain';
import Endorsment from '../components/Endorsment';

const Home = () => {
  return (
    <div>
    <Carousal/>
    <SearchDomain/>
    <Features/>
    <Testimonials/>
    <Endorsment/></div>
  )
}

export default Home;