import React, { Component, useState } from 'react';


export const Footer = () => {
    return (
      <div id="Footer" className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
              <span className=" text-xl font-bold tracking-wide text-gray-800 uppercase">
                Luki Viali Tobing
              </span>
            <div className="mt-2 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Hi, my name is Luki Viali Tobing and lately I've been trying into Javascript/React and CSS stuffs. 
                Before I dive into it, I did a lot of something that work with Adobe Premiere, After Effects, and Photoshop before. 
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Anyway, thanks for visiting my online CV.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                087854888522
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=vialitobing@gmail.com&su=Hi,+Luki&body=Hi,+we+just+clicked+into+your+profile&tf=cm"
                target="_blank"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                vialitobing@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <div
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Jl. Mangga Raya Blok O, No.431, Duri Kepa, 11510
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 25 September 1996 Luki Viali Tobing. All rights reserved.
          </p>
        </div>
      </div>
    );
  };

export default Footer