import React from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header'
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer'

export const LandingPage = () => {
    return (
        <div>
        <Nav/>
        <Header/>
        <Education/>
        <Experience/>
        <Footer/>
        </div>

    );
  };

export default LandingPage