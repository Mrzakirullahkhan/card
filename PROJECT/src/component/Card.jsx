import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-64 object-cover"
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" 
        alt="Circle"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Circle</h2>
        <p className="text-sm text-gray-600"><span className="font-semibold">Name:</span> circle</p>
        <p className="text-sm text-gray-600"><span className="font-semibold">Client:</span> N/A</p>
        <p className="text-sm text-gray-600"><span className="font-semibold">Year:</span> 2009</p>
        <p className="text-sm text-gray-600"><span className="font-semibold">Location:</span> Los Angeles, CA – Boulder, CO</p>
        <p className="text-sm text-gray-600"><span className="font-semibold">Type:</span> interior design</p>
      </div>
    </div>
  );
};

export default Card;
