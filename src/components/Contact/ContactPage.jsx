import React, { useState } from "react";
const ContactPage = () => {
     const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="max-w-3xl mx-auto p-8 mt-16">
        <h1 className="text-3xl font-bold text-center mb-6 mt-10">
          Contact Us
        </h1>

      
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="text-gray-700 mb-2 font-medium block">
              Name
            </label>
            <input
              type="text"
              name="name" 
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 mb-2 font-medium block">
              Email
            </label>
            <input
              type="email"
              name="email" 
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 mb-2 font-medium block">
              Message
            </label>
            <textarea
              name="message"
              required 
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="w-full bg-amber-900 text-white py-2 rounded hover:bg-amber-800 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
