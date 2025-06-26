"use client";

import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
    skill: "",
    address: "",
    gender: "male",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-blue-950 text-shadow-black .text-1000">
        Signup for create account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstName}
          required
          className="input"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
          required
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
          className="input"
        />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="input"
          />
        </div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.confirmPassword}
          required
          className="input"
        />

        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          required
          className="input"
        >
          <option value="jobgiver">Job Giver</option>
          <option value="jobseeker">Job Seeker</option>
        </select>

        <input
          name="skill"
          placeholder="Your Skill"
          onChange={handleChange}
          value={formData.skill}
          required
          className="input"
        />
        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={formData.address}
          required
          className="input"
        />

        <select
          name="gender"
          onChange={handleChange}
          value={formData.gender}
          required
          className="input"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="w-80% bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition px-5"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
