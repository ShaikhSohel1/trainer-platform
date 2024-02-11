import React, { useState } from "react";
import axios from "axios";

const BusinessRegister = () => {
  const [formData, setFormData] = useState({
    uniqueId: "",
    companyName: "",
    location: "",
    phone: "",
    email: "",
    password: "",
    domain: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear any previous errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post("http://localhost:3001/companies", formData);
      alert("Registration successful!");
      // Optionally, redirect the user to another page after successful registration
      // history.push('/login');
    } catch (error) {
      console.error("Error registering company:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate uniqueId (6-digit number)
    if (!/^\d{6}$/.test(formData.uniqueId)) {
      newErrors.uniqueId = "Unique ID must be a 6-digit number.";
      isValid = false;
    }

    // Validate email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
      isValid = false;
    }

    // Validate other fields (required)
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "email" && !value) {
        newErrors[key] = "This field is required.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Company Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="uniqueId"
            placeholder="Unique ID"
            value={formData.uniqueId}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.uniqueId && (
            <div className="text-red-500">{errors.uniqueId}</div>
          )}
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.companyName && (
            <div className="text-red-500">{errors.companyName}</div>
          )}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.location && (
            <div className="text-red-500">{errors.location}</div>
          )}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.phone && <div className="text-red-500">{errors.phone}</div>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
          <input
            type="text"
            name="domain"
            placeholder="Domain"
            value={formData.domain}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          {errors.domain && <div className="text-red-500">{errors.domain}</div>}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessRegister;
