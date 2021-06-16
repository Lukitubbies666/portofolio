import React, { Component, useState } from 'react';
import ST from '../contents/sangti.png'
import undip from '../contents/undip.jpg'
import pwdk from '../contents/pwdk.png'


export const Education = () => {
    return (
      <div 
      id="Education"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
        <h2 className="mb-6 font-sans space-y-1 text-3xl font-bold tracking-tight  sm:text-3xl sm:leading-none">
              Educational background
        </h2>
        <div className="py-8 grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={ST}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                    2011 — 2014
                </span>
              </p>
              <a
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Sang Timur
              </a>
              <p className="mb-2 text-gray-700">
                Graduated from Sang Timur Catholic High School as a social studies student (IPS)
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={undip}
              className="object-contain w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                        2011 — 2014
                    </span>
                </p>
                <a
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    Universitas Diponegoro
                </a>
                <p className="mb-2 text-gray-700">
                    Bachelor of Communication Science from Faculty of Political and Social Science.
                    Graduated with 3,42 GPA with Thesis Title
                </p>
                <h3
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Thesis Title: Young Lex's Personal Branding Strategy through Negative Self-Image and Haters Maintenance
              </h3>
            </div>
            </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={pwdk}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                        July 2020-December 2020
                    </span>
                </p>
                <a
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    Purwadhika Digital Technology School
                </a>
                <p className="mb-2 text-gray-700">
                    took Job Connector Web & Mobile Development Course. a ≤ 6 months Full Stack Developer bootcamp program. 
                </p>
                <h3
                className="italic inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Non formal
              </h3>
            </div>
            </div>
        </div>
      </div>
    );
  };

export default Education