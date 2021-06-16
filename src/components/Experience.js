import React, { Component, useState } from 'react';
import bekraf from '../contents/bekraf.png'
import cspm from '../contents/cspm.png'
import bxt from '../contents/bxt.png'
import others from '../contents/ETC.png'

export const Experience = () => {

  const backgroundungu ="px-4 py-16 mx-auto bg-deep-purple-accent-400 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  const container = "flex flex-col mb-6 lg:flex-row md:mb-8"
  const judul = "max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group"
  const garispas = "inline-block mb-1 sm:mb-4"
  const garis = "h-1 ml-auto duration-300 origin-left transform bg-teal-accent-400 scale-x-30 group-hover:scale-x-100"
  const gridkotak = "grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2"
  const backgroundputihkotak = "relative overflow-hidden bg-white transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
  const logocompany = "object-contain w-full h-56 md:h-64 xl:h-80"
  const hoverbuatcaption = "absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
  const fontjudulcaption = "mb-4 text-lg font-bold text-gray-100"
  const fontcaption = "text-sm tracking-wide text-gray-300"

    return (
      <div id="Experience" className={backgroundungu}>
        <div className={container}>
          <h2 className={judul}>
            <span className={garispas}>
              Work Experience
            </span>
            <div className={garis} />
          </h2>
        </div>
        <div className={gridkotak}>

          <a href="/exp1" aria-label="View Item">
            <div className={backgroundputihkotak}>
              <img
                className={logocompany}
                src={cspm}
                alt=""
              />
              <div className={hoverbuatcaption}>
                <p className={fontjudulcaption}>
                  Canon Semarang Photo Marathon 2017
                </p>
                <p className={fontcaption}>
                March 2017 - June 2017
                </p>
              </div>
            </div>
          </a>
          <a href="/exp2" aria-label="View Item">
            <div className={backgroundputihkotak}>
              <img
                className={logocompany}
                src={bekraf}
                alt=""
              />
              <div className={hoverbuatcaption}>
                <p className={fontjudulcaption}>
                  Bekraf (Badan Ekonomi Kreatif Indonesia)
                </p>
                <p className={fontcaption}>
                  September 2017-December 2017
                </p>
              </div>
            </div>
          </a>
          <a href="/exp3" aria-label="View Item">
            <div className={backgroundputihkotak}>
              <img
                className={logocompany}
                src={bxt}
                alt=""
              />
              <div className={hoverbuatcaption}>
                <p className={fontjudulcaption}>
                  Becextech Australia
                </p>
                <p className={fontcaption}>
                  May 2019-June 2020
                </p>
              </div>
            </div>
          </a>
          <a href="/exp4" aria-label="View Item">
            <div className={backgroundputihkotak}>
              <img
                className={logocompany}
                src={others}
                alt=""
              />
              <div className={hoverbuatcaption}>
                <p className={fontjudulcaption}>
                  Other Works
                </p>
                <p className={fontcaption}>
                  Anything I do, mostly freelance related
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };

export default Experience