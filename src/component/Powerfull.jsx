import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";

const Powerfull = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className=" text-white">
      <div className="text-xl text-center pt-10 text-teal-400">POWERFUL</div>
      <div className="text-center text-4xl mt-12">
        <h1>API & SMTP</h1>
      </div>
      <div className="min-h-screen  text-white flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <div className="flex flex-col items-start justify-center h-full">
              <div className="mb-4">
                <div className="w-12 h-12 bg-teal-500 flex items-center justify-center">
                  <FiPhone className="text-black text-2xl" />
                </div>
              </div>

              <h1 className="text-5xl font-bold mb-4">Stay Connected</h1>

              <p className="text-lg mb-6">
                Use the most powerful protocols in the Mailing Business to stay
                connected with your list of customers.
              </p>

              <ul className="mb-6">
                <li className="flex items-center mb-2">
                  <span className="bg-teal-500 w-2 h-2 rounded-full mr-2"></span>
                  Simple Mail Transfer Protocol (SMTP)
                </li>
                <li className="flex items-center">
                  <span className="bg-teal-500 w-2 h-2 rounded-full mr-2"></span>
                  Gmail API
                </li>
              </ul>

              <button
                className="bg-teal-500 text-black px-6 py-3 rounded-lg hover:bg-teal-600 transition"
                onClick={() => setPopupOpen(true)}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <img src="Img/Vector-1.png" alt="Cubes" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-Features-bg p-6 rounded-lg">
            <h2 className="text-lg font-bold">Contact us on</h2>
            <p> WhatsApp for purchase inquiries:+91 90730 29819</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Powerfull;
