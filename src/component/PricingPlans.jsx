import React from "react";
import { FaPlusCircle, FaAsterisk, FaStar } from "react-icons/fa";

const PricingPlans = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-center text-teal-500 mb-8 text-xl font-semibold">PRICING</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Plan 1 */}
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-teal-500 text-center">
            <div className="flex justify-center mb-4">
              <FaPlusCircle className="text-4xl text-teal-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">20,000</h2>
            <p className="text-lg font-semibold">Daily Credit Plan</p>
            <p className="text-teal-500 text-lg font-bold mt-4">₹20,000 / month</p>
            <p className="text-sm text-gray-400 mt-2">
              Credits will be recharged every day at 7:30am IST
            </p>
          </div>

          {/* Plan 2 */}
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-teal-500 text-center">
            <div className="flex justify-center mb-4">
              <FaAsterisk className="text-4xl text-teal-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">50,000</h2>
            <p className="text-lg font-semibold">Daily Credit Plan</p>
            <p className="text-teal-500 text-lg font-bold mt-4">₹50,000 / month</p>
            <p className="text-sm text-gray-400 mt-2">
              Credits will be recharged every day at 7:30am IST
            </p>
          </div>

          {/* Plan 3 */}
          <div className="bg-gray-900 p-6 rounded-lg border-2 border-teal-500 text-center">
            <div className="flex justify-center mb-4">
              <FaStar className="text-4xl text-yellow-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">100,000</h2>
            <p className="text-lg font-semibold">Daily Credit Plan</p>
            <p className="text-teal-500 text-lg font-bold mt-4">₹100,000 / month</p>
            <p className="text-sm text-gray-400 mt-2">
              Credits will be recharged every day at 7:30am IST
            </p>
          </div>

           {/* Plan 4 */}
           <div className="bg-gray-900 p-6 rounded-lg border-2 border-teal-500 text-center">
            <div className="flex justify-center mb-4">
              <FaPlusCircle className="text-4xl text-teal-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">20,000</h2>
            <p className="text-lg font-semibold">Daily Credit Plan</p>
            <p className="text-teal-500 text-lg font-bold mt-4">₹20,000 / month</p>
            <p className="text-sm text-gray-400 mt-2">
              Credits will be recharged every day at 7:30am IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
