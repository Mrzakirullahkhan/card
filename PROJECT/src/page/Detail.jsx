

import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const { card } = location.state; 

  return (
    <div className="min-h-screen flex items-center mt-10 justify-center px-6">
      <div className="max-w-3xl w-full mt-0">
        <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
        <p><strong>Name:</strong> {card.name}</p>
        <p><strong>Client:</strong> {card.client}</p>
        <p><strong>Year:</strong> {card.year}</p>
        <p><strong>Location:</strong> {card.location}</p>
        <p><strong>Type:</strong> {card.type}</p>
        <p className="mt-4 text-gray-500">{card.description}</p>

        {/* Image centered */}
         <div className="">
          {card.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${card.title} ${index + 1}`}
              className="w-full h-auto mt-4 "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
