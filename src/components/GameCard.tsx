import Link from "next/link";
import React from "react";

type GameCardProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  href: string;
};
const GameCard = ({ id, name, description, image, href }: GameCardProps) => {
  return (
    <div
      key={id}
      className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {image ? (
        <img
          src={image}
          alt={`AI ${name} game preview`}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-48 bg-gray-300">
          <p className="text-2xl font-bold text-white mb-2">Coming soon...</p>
        </div>
      )}

      <div className="p-6 pb-16">
        {" "}
        <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
        <p className="text-white mb-4">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 p-6">
        {image && (
          <Link
            className="bg-white text-[#4CA9DF] font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-300"
            href={href}
            target="blank"
          >
            Play Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default GameCard;
