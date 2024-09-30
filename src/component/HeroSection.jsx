import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center pl-44">
      <div className="max-w-2xl ">
        <h1 className="text-6xl font-bold mb-4">
          <span className="block text-teal-400">The future of</span> 
          E-Mail <br/>Communication
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Bring your campaigns to the next level with MonsterMailer API.
        </p>
        <button className="mt-8 bg-teal-700 text-white px-6 py-3 rounded transition duration-200 hover:bg-teal-600">
          Login
        </button>
        <p className="mt-4 text-gray-300">Download our Tools here!</p>
        <div className="mt-4">
          <button className="bg-teal-700 text-white px-4 py-2 rounded mx-2 transition duration-200 hover:bg-teal-600">
            Download MonsterMailer Opium
          </button>
        
        </div>
        <div>
        <button className="bg-teal-700 text-white px-4 py-2 mt-4 rounded mx-2 transition duration-200 hover:bg-teal-600">
            Download API Creator
          </button>
        </div>
      </div>
      <div className="ml-16 hidden md:block mr-11">
        <img 
          src="/Img/Laptop-11.png" // Replace with the actual path to your laptop image
          alt="Laptop"
          className="w-80"
        />
      </div>
    </div>
  );
};

export default HeroSection;
