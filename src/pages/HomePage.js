import React from 'react';
import Banner from '../components/Servises/Banner';
import Featured from '../components/Features/Featured';
import SwiperPage from '../components/Swiper/Swiper';
import Testmonials from '../components/Testmoniel/Testmonial';
import SubScribe from '../components/subscripe/subscripe';

function HomePage() {
  return (
    <>
      <SwiperPage />
      <Banner />
      <Featured />
      <Testmonials />
      <SubScribe />
    </>
  );
}

export default HomePage;
