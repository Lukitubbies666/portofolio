import React, { Component, useState } from 'react';


export const Exp1 = () => {
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
                <span className="relative">Canon Semarang Photo Marathon 2017</span>
              </span>{' '}
            </h2>
            <p className={subheadline}>
              as Chief Creative Officer from March 2017 - June 2017
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className={gridtulisankiri}>
            <div className="space-y-8">
              <div>
                <p className={juduldescription}>
                  What is Canon Semarang Photo Marathon (CSPM)?
                </p>
                <p className={jobdescription}>
                  An annual photography contest event that held in Central Java and associated with Canon and Datascrip.
                </p>
              </div>
              
              <div>
                <p className={juduldescription}>
                  Can you describe what's your task there?
                </p>
                <p className={jobdescription}>
                Our division were responsible for providing graphics, audiovisual stuffs, social media handling, etc that related with 
                information about Canon Semarang Photo Marathon 2017 until d-day of the event.
                  <br />
                  <br />
                Audiovisual means we produce content like commercial, minitron in the stage, social media content, aftermovie, etc. 
                </p>
              </div>
            </div>
            <div className="space-y-7">
              <div>
                <p className={juduldescription}>
                  Can you show us those contents?
                </p>
                <p className={jobdescription}>
                  Sure. Click the link below
                  <br />
                  <br />
                    <a
                        href="https://drive.google.com/drive/u/1/folders/1vU9haeqtF6ZDuImSeNX_-0vqjxEPFuO_"
                        target="_blank"
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Canon Semarang Photo Marathon 2017 contents
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Exp1