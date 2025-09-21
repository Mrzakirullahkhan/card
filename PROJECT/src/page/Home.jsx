
import React from "react";
import circle from "../assets/circle/circle.webp"
import kitty from "../assets/kitty/kitty.webp"
import mallean from "../assets/mallean/mallean.webp"
import shade from "../assets/shade/shade.webp"
import waterfront from "../assets/waterfront/waterfront.webp"
import mallean1 from "../assets/mallean/mallean1.webp"
import mallean2 from "../assets/mallean/mallean2.webp"
import mallean3 from "../assets/mallean/mallean3.webp"
import mallean4 from "../assets/mallean/mallean4.webp"
import mallean5 from "../assets/mallean/mallean5.webp"
import circle1 from "../assets/circle/circle1.webp"
import circle2 from "../assets/circle/circle2.webp"
import circle3 from "../assets/circle/circle3.webp"
import circle4 from "../assets/circle/circle.webp"
import shade1 from "../assets/shade/shade1.webp"
import shade2 from "../assets/shade/shade2.webp"
import shade3 from "../assets/shade/shade3.webp"
import kitty1 from "../assets/kitty/kitty1.webp"
import kitty2 from "../assets/kitty/kitty2.webp"
import kitty3 from "../assets/kitty/kitty3.webp"
import kitty4 from "../assets/kitty/kitty4.webp"
import kitty5 from "../assets/kitty/kitty5.webp"
import kitty6 from "../assets/kitty/kitty6.webp"
import waterfront1 from "../assets/waterfront/waterfront1.webp"
import waterfront2 from "../assets/waterfront/waterfront2.webp"
import waterfront3 from "../assets/waterfront/waterfront3.webp"
import waterfront4 from "../assets/waterfront/waterfront4.webp"
import waterfront5 from "../assets/waterfront/waterfront5.webp"


import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const updateScale = () => {
      const containerWidth = 1400; // Fixed width
      const viewportWidth = window.innerWidth;

      // Always scale proportionally to fit viewport
      const newScale = Math.min(viewportWidth / containerWidth, 1);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const cardsData = [
    {
      image: circle,
      images:[circle1,circle2,circle3,circle4],
      title: "Circle",
      name: "circle",
      client: "N/A",
      year: "2009",
      location: "Los Angeles, CA – Boulder, CO",
      type: "interior design",
    },
    {
      image: kitty,
      images:[kitty1,kitty2,kitty3,kitty4,kitty5,kitty6],
      title: "Kitty",
      name: "Hello Kitty",
      client: "Sonae Sierra",
      year: "2011",
      location: "Los Angeles, CA",
      type: "installation",
    },
    {
      image: shade,
      images:[shade1,shade2,shade3],
      title: "Shade Structure",
      name: "Shade Structure",
      client: "N/A",
      year: "2008",
      location: "Los Angeles, CA",
      type: "Tensegrity Structure",
    },
    {
      image: mallean,
      images:[mallean1,mallean2,mallean3,mallean4,mallean5],
      title: "Skrzyniarz & Mallean",
      name: "Skrzyniarz & Mallean",
      client: "Skrzyniarz & Mallean",
      year: "2007",
      location: "Los Angeles, CA",
      type: "interior design",
    },
    {
      image: waterfront,
      images:[waterfront1,waterfront2,waterfront3,waterfront4,waterfront5],
      title: "Waterfront",
      name: "Hilton Waterfront",
      client: "Wimberly Interiors",
      year: "2007",
      location: "Huntington Beach, CA",
      type: "interior design",
    },
  ];

  return (
    <div className="min-h-screen pt-20 flex justify-center overflow-x-hidden">
  
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          width: "1400px", 
        }}
      >
        <div className="w-[1400px] px-6">
          <div className="grid grid-cols-4 gap-10">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden cursor-pointer    transition-shadow"
                onClick={() => navigate(`/detail/${index}`, { state: { card } })}
              >
                <img
                  className="h-80 w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-3">
                  <h2 className="text-lg mb-2 font-semibold">{card.title}</h2>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Name:</span> {card.name}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Client:</span> {card.client}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Year:</span> {card.year}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Location:</span>{" "}
                    {card.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Type:</span> {card.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;