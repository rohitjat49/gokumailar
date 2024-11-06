import React from "react";
import {
  FaInbox,
  FaPaperPlane,
  FaSyncAlt,
  FaCode,
  FaPuzzlePiece,
  FaRocket,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      name: "Inbox Tester",
      icon: <FaInbox size={48} />,
      description:
        "Track your campaign performance and see your e-mails are going into Spam or Inbox.",
    },
    {
      name: "Multi Sending",
      icon: <FaPaperPlane size={48} />,
      description: "Send to multiple recipients easily and effectively.",
    },
    {
      name: "Body Rotation",
      icon: <FaSyncAlt size={48} />,
      description: "Rotate the body of emails for better variation.",
    },
    {
      name: "5-in-1 Converter",
      icon: <FaCode size={48} />,
      description: "Convert different formats into one consistent format.",
    },
    {
      name: "Unique Syntaxes",
      icon: <FaPuzzlePiece size={48} />,
      description: "Handle unique syntaxes easily with our parser.",
    },
    {
      name: "Fast Server",
      icon: <FaRocket size={48} />,
      description: "Experience fast and reliable server performance.",
    },
  ];

  return (
    <div className=" text-white py-10">
      <div className="text-center mb-8">
        <p className="text-green-400 uppercase tracking-wider">Features</p>
        <h2 className="text-4xl font-bold text-white">Mailing Solution</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition-transform duration-300 ease-in-out group border border-transparent hover:border-green-400 hover:bg-Features-bg hover:scale-105 hover:shadow-lg"
          >
            <div className="text-green-400 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-125">
              {feature.icon}
            </div>

            <p className="text-lg font-semibold transition-transform duration-300 ease-in-out group-hover:transform group-hover:scale-110 group-hover:mb-4">
              {feature.name}
            </p>

            <p className="opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out mt-4 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
