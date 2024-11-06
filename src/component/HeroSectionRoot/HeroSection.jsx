import React from 'react';

const HeroSection = () => {
  return (
    <div className=" text-white h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-44">
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="block text-teal-400">The future of</span> 
          E-Mail <br/> Communication
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-400">
          Bring your campaigns to the next level with Gokumailar API.
        </p>
        <button className="mt-8 bg-teal-700 text-white px-6 py-3 rounded transition duration-200 hover:bg-teal-600">
          Login
        </button>
        <p className="mt-4 text-gray-300">Download our Tools here!</p>
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-center md:justify-start">
          <button className="bg-teal-700 text-white px-4 py-2 rounded mx-2 transition duration-200 hover:bg-teal-600 mb-4 sm:mb-0">
            Download Gokumailar Opium
          </button>
          <button className="bg-teal-700 text-white px-4 py-2 rounded mx-2 transition duration-200 hover:bg-teal-600">
            Download API Creator
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-16 hidden md:block">
        <img 
          src="/Img/Laptop-11.png" // Replace with the actual path to your laptop image
          alt="Laptop"
          className="w-64 md:w-80"
        />
      </div>
    </div>
  );
};

export default HeroSection;
