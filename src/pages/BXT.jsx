import React, { Component, useState } from 'react';


export const Exp3 = () => {
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
                <span className="relative">Becextech Australia</span>
              </span>{' '}
            </h2>
            <p className={subheadline}>
              as Content & Marketing Staff from May 2019-June 2020
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className={gridtulisankiri}>
            <div className="space-y-8">
              <div>
                <p className={juduldescription}>
                  What is Becextech?
                </p>
                <p className={jobdescription}>
                  Becextech is is a retailer and specialize in electronic goods that carries and stock unlocked Mobile Phones, Smart Phones, Digital SLR Cameras, Tablets, and more from the various brands.
                </p>
              </div>
            </div>

            <div className="space-y-8">
                <div>
                    <p className={juduldescription}>
                    Can you describe what's your task there?
                    </p>
                    <p className={jobdescription}>
                    Responsible for every price changes in the website everyday in 3 web servers (Australia, New Zealand, USA). Also, in those 3 servers, I also edit the picture and uploaded it in the backend.
                    <br />
                    <br />
                    By all that means, our division coordinates with Purchasing division for every content and item that shown in the website. Especially item stocks related.
                    </p>
                </div>            
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Exp3