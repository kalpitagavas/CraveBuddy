import React from 'react';
import Indiamapfood from "../../assets/Indiamapfood.png";

const InfoDiv = () => {
  return (
    <div>
      <div>
        <img src={Indiamapfood} alt="Map of India highlighting regional cuisines" />
      </div>
      <div>
        <p>
          India is known for its rich and diverse culinary traditions, which vary significantly by region. 
          Northern India is famous for its creamy curries and tandoori dishes, while Southern India is known 
          for its use of rice, coconut, and spices in dishes like dosa and sambar. The East offers unique 
          flavors with dishes like momos and fish curries, and the West brings spicy street food and 
          sweet delights like dhokla and shrikhand. Each region contributes uniquely to India's vibrant food culture.
        </p>
      </div>
    </div>
  );
}

export default InfoDiv;
