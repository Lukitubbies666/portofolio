import React, { Component, useState } from 'react';
import Typical from 'react-typical'
import FotoLuki from '../contents/pasfoto.jpg'


export const Header = () => {

  const bgungu = "relative bg-deep-purple-accent-400"
  const containerungu = "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  const textcenter = "relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center"
  const headlineatas = "mb-6 font-sans space-y-1 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
  const textgantiganti = "absolute inset-0 transform -skew-x-12 bg-teal-accent-400"
  const placementfoto = "absolute object-contain w-full h-full"
  const sizingfoto = "relative pb-56 mb-4 lg:pb-64"


    return (
      <div id="Header" className={bgungu}>
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        
        <div className={containerungu}>
          <div className={textcenter}>
            <h2 className={headlineatas}>
              Hi, I'm Luki
              <br className="hidden sm:block md:block" />
              and welcome to my {''}
              <span className="relative inline-block px-2">
                <div className={textgantiganti}/>
                <Typical
                  steps={[
                    "Portofolio", 2000,
                    "Curriculum Vitae", 2000
                  ]}
                  loop={Infinity}
                  className="inline-block relative text-teal-900"
                  wrapper="p"
                />
              </span>
            </h2>
            <div className={sizingfoto}>
              <img
                className={placementfoto}
                src={FotoLuki}
                alt="Person"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Header