import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Registration Successful!");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#faf5ef]">
      <div className="w-full max-w-md p-8 bg-[#faf5ef] rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          REGISTER
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please fill in the fields below:
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#f3e7c9] text-gray-800 font-semibold rounded-md hover:bg-[#e6dcb8] transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
