import React, { Component, useState } from 'react';


export const Exp2 = () => {
    const container = "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    const container2 = "max-w-xl sm:mx-auto lg:max-w-2xl"
    const judultengah = "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
    const headline = "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
    const subheadline = "text-base font-semibold text-gray-700 md:text-lg"
    const gridtulisankiri = "grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2"
    const juduldescription = "mb-4 text-xl font-medium"
    const jobdescription = "text-gray-700"


    return (
      <div className={container}>
        <div className={container2}>
          <div className={judultengah}>
            <h2 className={headline}>
              <span className="relative inline-block">
                <span className="relative">Badan Ekonomi Kreatif Indonesia</span>
              </span>{' '}
            </h2>
            <p className={subheadline}>
              as Public Communication Intern from September 2017 - December 2017
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className={gridtulisankiri}>
            <div className="space-y-8">
              <div>
                <p className={juduldescription}>
                  What is Bekraf?
                </p>
                <p className={jobdescription}>
                  Bekraf was Indonesian Agency for Creative Economy. Now it already disbanded and rebranded as Ministry of Tourism and Creative Economy
                </p>
              </div>
              
              <div>
                <p className={juduldescription}>
                  Can you describe what's your task there?
                </p>
                <p className={jobdescription}>
                I worked under "Public Communication" division to provide graphics for press conference-related and press releases.
                  <br />
                  <br />
                I also took part on Head Bureau's project for PPID (Pejabat Pengelola Informasi dan Dokumentasi / Information Management and Documentation Officer) launch. 
                Sometimes I work as videographer and photographer as well.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className={juduldescription}>
                  Can you show us your works at Bekraf?
                </p>
                <p className={jobdescription}>
                  Sure. Click the link below
                  <br />
                  <br />
                    <a
                        href="https://drive.google.com/drive/folders/1UjgdRksS1xmM6QHPOfcAMpLIGOTutXGv?usp=sharing"
                        target="_blank"
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Bekraf
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Exp2