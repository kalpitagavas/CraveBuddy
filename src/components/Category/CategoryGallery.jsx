import React from "react";

// Example images (replace with real ones)
import BiryaniImg from "../../assets/CartBiryani.png";
import NorthIndianImg from "../../assets/NorthIndianImg.png";
import SouthIndianImg from "../../assets/SouthIndianImg.png";
import ThaliImg from "../../assets/ThaliImg.png";
import PizzaImg from "../../assets/CartPizza.png";
import PunjabiImg from "../../assets/IndiaSpecial.png";
import KababImg from "../../assets/CartPizza.png";
import DessertImg from "../../assets/DesertImg.png";
const categories = [
  { name: "North Indian", img: NorthIndianImg },
  { name: "South Indian", img: SouthIndianImg },
  { name: "Biryani", img: BiryaniImg },
  { name: "Thali", img: ThaliImg },
  { name: "Chaat", img: PizzaImg },
  { name: "Vada Pav", img: DessertImg },
  { name: "Sweets", img: KababImg },
  { name: "Kulfi", img: DessertImg },

];

const CategoryGallery = () => {
  const rows = [];
  for (let i = 0; i < categories.length; i += 8) {
    rows.push(categories.slice(i, i + 8));
  }

  return (
    <div className="space-y-10 px-6 py-10">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-6 justify-center">
          {row.map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryGallery;