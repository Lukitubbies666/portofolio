import React, { Component, useState } from 'react';
import Reactplayer from 'react-player'
import artwork1 from '../contents/jh99.jpg'
import artwork2 from '../contents/kai11.jpg'
import artwork3 from '../contents/utahjazz.jpg'
import artwork4 from '../contents/dpoy.jpg'



export const Exp4 = () => {
    const container = "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    const container2 = "max-w-xl sm:mx-auto lg:max-w-2xl"
    const judultengah = "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
    const headline = "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
    const subheadline = "text-base font-semibold text-gray-700 md:text-lg"
    const gridartwork = "grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto"
    const objectartwork = "object-contain w-full h-56 rounded shadow-lg"
    const tombolmenuju = "inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"

    return (
      <div className={container}>
        <div className={container2}>
          <div className={judultengah}>
            <h2 className={headline}>
              <span className="relative inline-block">
                <span className="relative">Other works</span>
              </span>{' '}
            </h2>
                <p className={subheadline}>
                    I also did freelance video editing since college days. Here is one that I did for Pertamina Boyolali.
                </p>
                <br/>
                <div className="flex flex-wrap content-center">
                    <Reactplayer
                        url='https://www.youtube.com/watch?v=cxaNC9tVdWY'
                        controls
                    />
                </div>
                <br/>
                <p className={subheadline}>
                    Check out the other works {''}
                    <a
                    href="https://drive.google.com/drive/folders/1b22myXs9xhDVF4FmVAxyR-SfOemlVN4M?usp=sharing"
                    target="_blank"
                    className=" font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    here
                    </a>
                </p>
          </div>
        </div>

        <div className={judultengah}>
            <h2 className={headline}>
                <span className="relative inline-block">
                    <span className="relative">And 1 Podcast</span>
                </span>{' '}
            </h2>
            <p className={subheadline}>
            In a spare time, my friend and I made a podcast about NBA. Both are the host and edit the whole content. My partner did the audio editing while I did the episodes cover artwork. Available on spotify.
            </p>
        </div>
            <div className={gridartwork}>
                <img
                className={objectartwork}
                src={artwork1}
                alt=""
                />
                <img
                className={objectartwork}
                src={artwork2}
                alt=""
                />
                <img
                className={objectartwork}
                src={artwork3}
                alt=""
                />
                <img
                className={objectartwork}
                src={artwork4}
                alt=""
                />
            </div>
            <div className="flex items-center sm:justify-center">
                <a
                href="https://open.spotify.com/show/4bYlhTL8zh3PrJOd9Tzvzr?si=bT91GoK_Re2tQ1vTMYymcQ&dl_branch=1"
                target="_blank"
                className={tombolmenuju}
                >
                    Click here to head to our podcast
                </a>
            </div>
    </div>
    );
  };

export default Exp4