import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaHeart,
  FaUsers,
  FaStar,
  FaTruck,
  FaHandsHelping,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className=" min-h-screen bg-gray-50 pt-32 pb-16 px-6 sm:px-12">
      {/* 🌟 HERO SECTION */}
      <motion.div
        className="text-center mb-20 scroll-mt-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className=" text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-secondary">CraveBuddy</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The ultimate destination where cravings meet convenience.  
          Explore, order, and share your favorite foods — all in one place.
        </p>
      </motion.div>

      {/* 🍽️ OUR STORY SECTION */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            CraveBuddy began as a late-night idea between a few food-obsessed
            friends who struggled to find the right meal at the right time.
            We wanted to make discovering food **as fun as eating it**.  
            So, we built a community-driven platform where every craving finds
            its match — from home-cooked favorites to local street eats.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, CraveBuddy connects thousands of foodies and restaurants,
            blending **technology, taste, and togetherness** into one seamless
            experience. Because food isn’t just about eating — it’s about
            sharing joy.
          </p>
        </div>

        <motion.img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          alt="Our Story"
          className="rounded-2xl shadow-lg object-cover w-full h-96"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* 💡 MISSION & VISION SECTION */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-10 mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              🌍 Our Mission
            </h3>
            <p>
              To make food discovery **fun, social, and simple**.  
              CraveBuddy empowers users to explore their cravings effortlessly,
              connect with local vendors, and enjoy delightful meals anytime.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              🚀 Our Vision
            </h3>
            <p>
              To become the world’s most loved platform for food discovery —
              where every bite tells a story, and every user finds their next
              favorite meal with a smile.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 👩‍🍳 MEET THE TEAM */}
      <motion.div
        className="max-w-6xl mx-auto mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Aarav Mehta",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/1.jpg",
            },
            {
              name: "Priya Sharma",
              role: "Head of Design",
              img: "https://randomuser.me/api/portraits/women/2.jpg",
            },
            {
              name: "Rohan Patel",
              role: "Lead Developer",
              img: "https://randomuser.me/api/portraits/men/3.jpg",
            },
            {
              name: "Ananya Verma",
              role: "Marketing Lead",
              img: "https://randomuser.me/api/portraits/women/4.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-800 text-lg">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ⚡ WHY CHOOSE US SECTION */}
      <motion.div
        className="max-w-6xl mx-auto mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Why Choose CraveBuddy?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUtensils className="text-secondary text-3xl mb-3" />,
              title: "Endless Variety",
              desc: "From local favorites to global cuisines — explore everything in one place.",
            },
            {
              icon: <FaTruck className="text-secondary text-3xl mb-3" />,
              title: "Fast & Reliable",
              desc: "We partner with trusted vendors to make sure your order reaches hot and fresh.",
            },
            {
              icon: <FaHeart className="text-secondary text-3xl mb-3" />,
              title: "Made with Love",
              desc: "Every meal is prepared and delivered with care — because you deserve the best.",
            },
            {
              icon: <FaUsers className="text-secondary text-3xl mb-3" />,
              title: "Community Driven",
              desc: "Discover trending dishes shared by foodies just like you.",
            },
            {
              icon: <FaHandsHelping className="text-secondary text-3xl mb-3" />,
              title: "Support Local",
              desc: "We empower small restaurants and home chefs to reach more customers.",
            },
            {
              icon: <FaStar className="text-secondary text-3xl mb-3" />,
              title: "Rated by You",
              desc: "Every rating helps others find the best meals — honest reviews by food lovers.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ❤️ COMMUNITY SECTION */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-10 text-center mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          A Growing Community of Food Lovers 🍕
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          CraveBuddy isn’t just an app — it’s a community. Thousands of users
          share their meals, post reviews, and support local food heroes every
          day. Together, we’re redefining how the world experiences food.
        </p>
        <motion.img
          src="https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=900&q=80"
          alt="Community"
          className="rounded-2xl mx-auto shadow-lg object-cover w-full sm:w-3/4"
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      {/* 🌟 FINAL QUOTE */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-gray-600 italic max-w-xl mx-auto">
          “At CraveBuddy, every bite tells a story —  
          and we’re here to help you find your next favorite one.”
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-secondary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-amber-600 transition"
        >
          Explore Now 🍔
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutPage;
