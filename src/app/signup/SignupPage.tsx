"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Lock,
  User,
  MapPin,
  ShieldCheck,
  UserCog,
  Venus,
  Camera,
} from "lucide-react";

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

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.skill.trim()) newErrors.skill = "Skill is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ ...formData, profilePic });
  };

  const renderInput = (
    name: string,
    placeholder: string,
    Icon: React.ElementType,
    type: string = "text"
  ) => (
    <div className="relative">
      <Icon className="absolute left-3 top-3.5 text-blue-400 w-5 h-5" />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={(formData as any)[name]}
        onChange={handleChange}
        className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
          errors[name] ? "border-red-400" : "border-blue-300"
        } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {errors[name] && (
        <p className="text-sm text-red-500 mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-xl border border-blue-200 rounded-2xl p-10 w-full max-w-3xl">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold text-blue-900 mb-10">
          Sign Up to Create an Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Profile Pic Upload */}
          <div className="md:col-span-2 flex flex-col items-center gap-3">
            <label className="text-blue-700 font-medium flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Upload Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
            {preview && (
              <div className="mt-2 relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-300 shadow-md">
                <Image
                  src={preview}
                  alt="Profile Preview"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>

          {renderInput("firstName", "First Name", User)}
          {renderInput("lastName", "Last Name", User)}
          {renderInput("email", "Email", Mail, "email")}
          {renderInput("password", "Password", Lock, "password")}
          {renderInput("confirmPassword", "Confirm Password", Lock, "password")}
          <div className="relative">
            <UserCog className="absolute left-3 top-3.5 text-blue-400 w-5 h-5" />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="jobgiver">Job Giver</option>
              <option value="jobseeker">Job Seeker</option>
            </select>
          </div>
          {renderInput("skill", "Your Skill", ShieldCheck)}
          {renderInput("address", "Address", MapPin)}
          <div className="relative md:col-span-2">
            <Venus className="absolute left-3 top-3.5 text-blue-400 w-5 h-5" />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-12 rounded-lg text-lg font-semibold transition-all shadow-md"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
