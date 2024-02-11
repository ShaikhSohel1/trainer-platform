import React, { useState } from "react";
import axios from "axios";

const TrainerRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    contactNumber: "",
    skills: "",
    address: "",
    chargePerDay: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an Axios POST request to your backend API endpoint
      const response = await axios.post(
        "http://localhost:3001/trainers", // Hardcoded URL
        formData
      );

      // Handle successful response
      console.log("Trainer registered successfully:", response.data);

      // Clear the form data after successful registration
      setFormData({
        username: "",
        password: "",
        name: "",
        email: "",
        contactNumber: "",
        skills: "",
        address: "",
        chargePerDay: "",
      });
    } catch (error) {
      // Handle errors
      console.error("Error registering trainer:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Trainer Registration
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="chargePerDay"
          placeholder="Charge Per Day"
          value={formData.chargePerDay}
          onChange={handleChange}
          className="input-field"
        />
        <button
          type="submit"
          className="btn mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default TrainerRegister;
