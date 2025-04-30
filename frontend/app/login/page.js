'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

export default function page() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log("Login Data:", data);

    try {
      const response = await login(data.username, data.password);
      console.log("Login Response:", response);
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        // Store token in cookies or local storage if needed
        Cookies.set("username", data.username, { expires: 7 }); // Example using js-cookie
        router.push("/chat"); // Redirect to dashboard on successful login
      } else {
        console.error("Login failed:", response.data);
        // Handle login failure (e.g., show error message)
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error (e.g., show error message)
    }  
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-sm p-8 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full text-white px-4 py-2 text-sm border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-400">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full text-white px-4 py-2 text-sm border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-400">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


