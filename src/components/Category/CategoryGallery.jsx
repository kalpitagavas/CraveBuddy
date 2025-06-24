import React from "react";

// Example images (replace with real ones)
import BiryaniImg from "../../assets/CartBiryani.png";
import VegThaliImg from "../../assets/Frankie.png";
import NoodlesImg from "../../assets/CartBiryani.png";
import BurgerImg from "../../assets/CartBurger.png";
import PizzaImg from "../../assets/CartPizza.png";
import PunjabiImg from "../../assets/IndiaSpecial.png";
import KababImg from "../../assets/CartPizza.png";
import DessertImg from "../../assets/DesertImg.png";

const categoryRows = [
  [BiryaniImg, VegThaliImg, NoodlesImg, BurgerImg, PizzaImg],
  [PunjabiImg, KababImg, DessertImg, BiryaniImg, PizzaImg],
];

const CategoryGallery = () => {
  return (
    <div className="space-y-8 px-6 py-10">
      {categoryRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
        >
          {row.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`category-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryGallery;
