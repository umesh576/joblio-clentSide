"use client";

import { useState } from "react";
import Input from "../components/ui/Input";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Button type="submit">Login</Button> */}
      <Link href="/signup" className="text-blue-600 hover:underline">
        Don’t have an account? Sign up
      </Link>{" "}
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 cursor-pointer"
      >
        Login{" "}
      </button>
    </form>
  );
}
