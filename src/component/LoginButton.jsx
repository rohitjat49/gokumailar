import React from 'react';

const LoginButton = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
        Gokumailar Optium
        </button>
        <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
        Gokumailar API Creator
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
