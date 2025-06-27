import React from "react";
import { motion } from "framer-motion";
import Indiamapfood from "../../assets/Indiamapfood.png";

const InfoDiv = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Image with animation */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={Indiamapfood}
            className="max-w-[300px] h-auto rounded-lg"
            alt="Map of India highlighting regional cuisines"
          />
        </motion.div>

        {/* Text with animation */}
        <motion.div
          className="text-lg flex-1 leading-relaxed p-3.5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p>
            <span className="font-bold text-2xl font-mono text-primary">
              India
            </span>{" "}
            is known for its rich and diverse culinary traditions, which vary
            significantly by region. Northern India is famous for its creamy
            curries and tandoori dishes, while Southern India is known for its
            use of rice, coconut, and spices in dishes like dosa and sambar. The
            East offers unique flavors with dishes like momos and fish curries,
            and the West brings spicy street food and sweet delights like dhokla
            and shrikhand. Each region contributes uniquely to India's vibrant
            food culture.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoDiv;
