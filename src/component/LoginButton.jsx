import React from 'react';

const LoginButton = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
          MonsterMailer Optium
        </button>
        <button className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
          MonsterMailer API Creator
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
