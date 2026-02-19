import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend integration here
    console.log("Login Data:", formData);
  };

  return (
    <div className="py-15 flex items-center justify-center bg-[#fdf8f4] px-4">
      <div className="w-full max-w-md bg-transparent">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-light text-center text-gray-800">
          LOGIN
        </h1>
        <p className="text-center text-gray-600 mt-3 text-sm md:text-base">
          Please enter your e-mail and password:
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4"
          aria-label="Login form"
        >
          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Password + Forgot */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <a
                href="#"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Button */}
          <Link to="/login">
          <button
            type="submit"
            className="w-full bg-[#f0e3c9] hover:bg-[#e6d8b9] text-gray-800 font-medium py-3 rounded-md transition-colors"
          >
            LOGIN
          </button>
          </Link>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          New customer?{" "}
          <Link to="/register">
          <a
            href="#"
            className="text-gray-800 hover:underline font-medium"
          >
            Create an account
          </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
