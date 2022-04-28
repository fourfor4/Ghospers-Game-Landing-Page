import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';

import Cta from '../components/sections/Cta';
import './style.scss'
const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
      <div id='bag'>
        <span className='white-color '>Need Help?</span>

        <div id="discord">
          <a href='https://discord.com/invite/6rgqWdJ7VP'>

          <img
            src={require('../assets/images/discord.png')}
          />
            Join discord
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;