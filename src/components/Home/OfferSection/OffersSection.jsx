import React, { useState } from "react";
import { Coffee, Truck, IceCream, Copy, Check } from "lucide-react";

const offers = [
  {
    icon: <Coffee className="w-6 h-6 text-white" />,
    title: "Flat 20% OFF",
    description: "Enjoy your first coffee order over ₹299",
    code: "BREW20",
    gradient: "from-[#8B5E3C] to-[#A47148]",
  },
  {
    icon: <Truck className="w-6 h-6 text-white" />,
    title: "Free Delivery",
    description: "On orders above ₹499 – no delivery fee",
    code: "FREESHIP",
    gradient: "from-[#A47148] to-[#D6AD8C]",
  },
  {
    icon: <IceCream className="w-6 h-6 text-white" />,
    title: "Dessert BOGO",
    description: "Buy one dessert, get one free",
    code: "BOGOSWEET",
    gradient: "from-[#B08968] to-[#DDB892]",
  },
];

const OffersSection = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="py-20 px-6 bg-[#f9f5f0]">
      <h2 className="text-4xl font-extrabold text-center text-[#5C4033] mb-16">
        🤎 Cozy Deals Just for You
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className={`rounded-3xl text-white p-6 shadow-xl bg-gradient-to-br ${offer.gradient} relative overflow-hidden group transition-transform duration-300 hover:scale-105`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-full">{offer.icon}</div>
              <h3 className="text-xl font-semibold">{offer.title}</h3>
            </div>

            <p className="text-sm text-white/90 mb-6">{offer.description}</p>

            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex justify-between items-center">
              <span className="font-mono text-sm tracking-wide">{offer.code}</span>
              <button
                onClick={() => handleCopy(offer.code)}
                className="hover:scale-110 transition"
              >
                {copied === offer.code ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
