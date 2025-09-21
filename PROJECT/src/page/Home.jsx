// import React from "react";
// import circle from "../assets/circle/circle.webp"
// import kitty from "../assets/kitty/kitty.webp"
// import mallean from "../assets/mallean/mallean.webp"
// import shade from "../assets/shade/shade.webp"
// import waterfront from "../assets/waterfront/waterfront.webp"
// import mallean1 from "../assets/mallean/mallean1.webp"
// import mallean2 from "../assets/mallean/mallean2.webp"
// import mallean3 from "../assets/mallean/mallean3.webp"
// import mallean4 from "../assets/mallean/mallean4.webp"
// import mallean5 from "../assets/mallean/mallean5.webp"
// import circle1 from "../assets/circle/circle1.webp"
// import circle2 from "../assets/circle/circle2.webp"
// import circle3 from "../assets/circle/circle3.webp"
// import circle4 from "../assets/circle/circle.webp"
// import shade1 from "../assets/shade/shade1.webp"
// import shade2 from "../assets/shade/shade2.webp"
// import shade3 from "../assets/shade/shade3.webp"
// import kitty1 from "../assets/kitty/kitty1.webp"
// import kitty2 from "../assets/kitty/kitty2.webp"
// import kitty3 from "../assets/kitty/kitty3.webp"
// import kitty4 from "../assets/kitty/kitty4.webp"
// import kitty5 from "../assets/kitty/kitty5.webp"
// import kitty6 from "../assets/kitty/kitty6.webp"
// import waterfront1 from "../assets/waterfront/waterfront1.webp"
// import waterfront2 from "../assets/waterfront/waterfront2.webp"
// import waterfront3 from "../assets/waterfront/waterfront3.webp"
// import waterfront4 from "../assets/waterfront/waterfront4.webp"
// import waterfront5 from "../assets/waterfront/waterfront5.webp"


// import { useNavigate } from "react-router-dom";
// function Home() {

//     const navigate = useNavigate();
//     const cardsData = [
//         {
//             image: circle,
//             images: [circle1, circle2, circle3, circle4],
//             title: "Circle",
//             name: "circle",
//             client: "N/A",
//             year: "2009",
//             location: "Los Angeles, CA – Boulder, CO",
//             type: "interior design",
//             description: `The parameters of the project required all production to be done in Los Angeles, CA, 
//   which dictated the scope and specifics of what could be produced, as any elements designed would 
//   have to be shipped to Colorado and assembled on site. These parameters required innovation from 
//   design and fabrication to transportation and installation. 

//   These factors led to the choice of a PVC material known as Komatex for much of the paneling and 
//   lighting, which could be milled easily by our in-house CNC machine. Much of the lighting in Circle 
//   is by use of Electroluminescent wire (EL). EL wire is a flexible wire that emits light and is 
//   available in a variety of colors. Its flexibility allowed us to use it in the paneling and light 
//   fixtures, as it could easily follow the contours of the panel shapes. 

//   All elements of the project, including wall panels, circular lighting fixtures, hanging fixtures, 
//   and signage were created using Komatex. Additional artwork, guard rails, and main sign used 
//   plexiglass, metal, and MDF board.`
//         },

//         {
//             image: kitty,
//             images: [kitty1, kitty2, kitty3, kitty4, kitty5, kitty6],
//             title: "Kitty",
//             name: "Hello Kitty",
//             client: "Sonae Sierra",
//             year: "2011",
//             location: "Los Angeles, CA",
//             type: "installation",
//             description: `Hypression (hyper-impression): "hyper" stands for hypertext (digital, web, cyber, etc.) 
//   and "impressions" means an effect, feeling, or image retained as a consequence of experience. 
//   The installation is a large, interactive, dynamic and engaging display system that represents 
//   information in a unique and digestible way. It can stylistically and three-dimensionally display 
//   whatever one could see on an LCD monitor or projection screen. 

//   Pinpressions is a popular tabletop game that stores and displays information through manipulation 
//   (extension and retraction) of an array of pins. Hypression takes this idea into the 21st century 
//   by using computer and wireless technology, adding remote interactivity, and multiplying the scale 
//   by a factor of 10. Unlike Pinpressions, the public never directly touches the installation. The 
//   movement of each pin is computer-controlled, with a central computer calculating the position of 
//   every pin to create a 'hypression.' The core technology (wireless, pistons, and motors) is readily 
//   available.`
//         },

//         {
//             image: shade,
//             images: [shade1, shade2, shade3],
//             title: "Shade Structure",
//             name: "Shade Structure",
//             client: "N/A",
//             year: "2008",
//             location: "Los Angeles, CA",
//             type: "Tensegrity Structure",
//             description: `The project is a modular shade structure made from triangular components of mesh fabric. 
//   Additional elements include aluminum pipes and steel cables. The design is based on the structural principle of 
//   tensegrity, coined by Buckminster Fuller, where all components are either in tension or compression. 
//   Inspired by Bedouin tents of the Middle East, the structure leverages modern materials and technology. 
//   The objective was to create a system that is scalable, simple, fast to erect, and offers maximum shade.`
//         },

//         {
//             image: mallean,
//             images: [mallean, mallean1, mallean2, mallean3, mallean4, mallean5],
//             title: "Skrzyniarz & Mallean",
//             name: "Skrzyniarz & Mallean",
//             client: "Skrzyniarz & Mallean",
//             year: "2007",
//             location: "Los Angeles, CA",
//             type: "interior design",
//             description: "Complete design and construction of a 1700 sqft Law office in Beverly Hills CA. In addition to the architectural space, we designed all of the identity and branding material"
//         },
//         {
//             image: waterfront,
//             images: [waterfront1, waterfront2, waterfront3, waterfront4, waterfront5],
//             title: "Skrzyniarz & Mallean",
//             name: "Skrzyniarz & Mallean",
//             client: "Skrzyniarz & Mallean",
//             year: "2007",
//             location: "Los Angeles, CA",
//             type: "interior design",
//             description: "Wimberly Interiors contacted us with the idea for a lenticular wall and we had to devise a system for fabrication and installation. Images printed on aluminum composite and adhered to CNC cut plywood frames to be able to attach to the wall. Installed on the first floor of The Hilton Waterfront Beach Resort in Huntington Beach, California, the art wall shows the sunrise and sunset at Huntington Beach Pier."
//         }
//     ];

//     return (
// <div className="min-h-screen pt-20 px-6 overflow-x-auto">
//   <div className="flex gap-10 w-max">
//     {cardsData.map((card, index) => (
//       <div
//         key={index}
//         className="bg-white overflow-hidden cursor-pointer w-[350px] flex-shrink-0"
//         onClick={() => navigate(`/detail/${index}`, { state: { card } })}
//       >
//         {/* Fixed height container for image */}
//         <div className="h-80 w-[350px] overflow-hidden">
//           <img
//             className="w-[350px] h-80 object-cover"
//             src={card.image}
//             alt={card.title}
//           />
//         </div>

//         <div className="p-3">
//           <h2 className="text-lg mb-2">{card.title}</h2>
//           <p className="text-sm text-gray-600">
//             <span className="font-semibold">Name:</span> {card.name}
//           </p>
//           <p className="text-sm text-gray-600">
//             <span className="font-semibold">Client:</span> {card.client}
//           </p>
//           <p className="text-sm text-gray-600">
//             <span className="font-semibold">Year:</span> {card.year}
//           </p>
//           <p className="text-sm text-gray-600">
//             <span className="font-semibold">Location:</span> {card.location}
//           </p>
//           <p className="text-sm text-gray-600">
//             <span className="font-semibold">Type:</span> {card.type}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//     );
// }

// export default Home;




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


import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();
    const cardsData = [
        {
            image: circle,
            images: [circle1, circle2, circle3, circle4],
            title: "Circle",
            name: "circle",
            client: "N/A",
            year: "2009",
            location: "Los Angeles, CA – Boulder, CO",
            type: "interior design",
            description: `The parameters of the project required all production to be done in Los Angeles, CA, 
  which dictated the scope and specifics of what could be produced, as any elements designed would 
  have to be shipped to Colorado and assembled on site. These parameters required innovation from 
  design and fabrication to transportation and installation. 

  These factors led to the choice of a PVC material known as Komatex for much of the paneling and 
  lighting, which could be milled easily by our in-house CNC machine. Much of the lighting in Circle 
  is by use of Electroluminescent wire (EL). EL wire is a flexible wire that emits light and is 
  available in a variety of colors. Its flexibility allowed us to use it in the paneling and light 
  fixtures, as it could easily follow the contours of the panel shapes. 

  All elements of the project, including wall panels, circular lighting fixtures, hanging fixtures, 
  and signage were created using Komatex. Additional artwork, guard rails, and main sign used 
  plexiglass, metal, and MDF board.`
        },

        {
            image: kitty,
            images: [kitty1, kitty2, kitty3, kitty4, kitty5, kitty6],
            title: "Kitty",
            name: "Hello Kitty",
            client: "Sonae Sierra",
            year: "2011",
            location: "Los Angeles, CA",
            type: "installation",
            description: `Hypression (hyper-impression): "hyper" stands for hypertext (digital, web, cyber, etc.) 
  and "impressions" means an effect, feeling, or image retained as a consequence of experience. 
  The installation is a large, interactive, dynamic and engaging display system that represents 
  information in a unique and digestible way. It can stylistically and three-dimensionally display 
  whatever one could see on an LCD monitor or projection screen. 

  Pinpressions is a popular tabletop game that stores and displays information through manipulation 
  (extension and retraction) of an array of pins. Hypression takes this idea into the 21st century 
  by using computer and wireless technology, adding remote interactivity, and multiplying the scale 
  by a factor of 10. Unlike Pinpressions, the public never directly touches the installation. The 
  movement of each pin is computer-controlled, with a central computer calculating the position of 
  every pin to create a 'hypression.' The core technology (wireless, pistons, and motors) is readily 
  available.`
        },

        {
            image: shade,
            images: [shade1, shade2, shade3],
            title: "Shade Structure",
            name: "Shade Structure",
            client: "N/A",
            year: "2008",
            location: "Los Angeles, CA",
            type: "Tensegrity Structure",
            description: `The project is a modular shade structure made from triangular components of mesh fabric. 
  Additional elements include aluminum pipes and steel cables. The design is based on the structural principle of 
  tensegrity, coined by Buckminster Fuller, where all components are either in tension or compression. 
  Inspired by Bedouin tents of the Middle East, the structure leverages modern materials and technology. 
  The objective was to create a system that is scalable, simple, fast to erect, and offers maximum shade.`
        },

        {
            image: mallean,
            images: [mallean, mallean1, mallean2, mallean3, mallean4, mallean5],
            title: "Skrzyniarz & Mallean",
            name: "Skrzyniarz & Mallean",
            client: "Skrzyniarz & Mallean",
            year: "2007",
            location: "Los Angeles, CA",
            type: "interior design",
            description: "Complete design and construction of a 1700 sqft Law office in Beverly Hills CA. In addition to the architectural space, we designed all of the identity and branding material"
        },
        {
            image: waterfront,
            images: [waterfront1, waterfront2, waterfront3, waterfront4, waterfront5],
            title: "Skrzyniarz & Mallean",
            name: "Skrzyniarz & Mallean",
            client: "Skrzyniarz & Mallean",
            year: "2007",
            location: "Los Angeles, CA",
            type: "interior design",
            description: "Wimberly Interiors contacted us with the idea for a lenticular wall and we had to devise a system for fabrication and installation. Images printed on aluminum composite and adhered to CNC cut plywood frames to be able to attach to the wall. Installed on the first floor of The Hilton Waterfront Beach Resort in Huntington Beach, California, the art wall shows the sunrise and sunset at Huntington Beach Pier."
        }
    ];

    return (
<div className="min-h-screen pt-20 px-6 overflow-x-hidden">
  {Array.from({ length: Math.ceil(cardsData.length / 4) }).map((_, rowIndex) => (
    <div
      key={rowIndex}
      className="flex gap-10 mb-10" // one row of cards
      style={{ justifyContent: 'flex-start' }} // keeps them left-aligned
    >
      {cardsData
        .slice(rowIndex * 4, rowIndex * 4 + 4) // take 4 cards per row
        .map((card, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden cursor-pointer w-[350px] flex-shrink-0"
            onClick={() => navigate(`/detail/${rowIndex * 4 + index}`, { state: { card } })}
          >
            <div className="h-80 w-[350px] overflow-hidden">
              <img
                className="w-[350px] h-80 object-cover"
                src={card.image}
                alt={card.title}
              />
            </div>

            <div className="p-3">
              <h2 className="text-lg mb-2">{card.title}</h2>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Name:</span> {card.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Client:</span> {card.client}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Year:</span> {card.year}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Location:</span> {card.location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Type:</span> {card.type}
              </p>
            </div>
          </div>
        ))}
    </div>
  ))}
</div>











    );
}

export default Home;






