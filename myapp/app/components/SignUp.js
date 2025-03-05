"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
  <div className=" bg-cover bg-center" style={{ 
    backgroundImage: "linear-gradient(to right, rgba(17,24,39,1) 30%, rgba(17, 24, 39, 0.84) 60%, rgba(17, 24, 39, 0.46) 100%), url('/forest3.jpg')" }}>
    <div className="h-screen flex bg-gradient-to-r from-gray-900 to-transparent ">
    {/* Left Side */}
      <div className="w-1/2  flex flex-col justify-center px-30 relative">
        {/* Top Navbar */}
        <div className="absolute top-6 left-8 text-white text-xl font-semibold">XYZ</div>
        <div className="absolute top-6 right-10 flex gap-40">
          <a href="#" className="text-gray-500 mr-4 font-semibold">Home</a>
          <a href="#" className="text-gray-500 mr-4 font-semibold">Join</a>
        </div>

        {/* Form Section */}
        <div>
          <h3 className="text-gray-400 text-sm mb-1">Start for free</h3>
          <h1 className="text-white text-4xl font-bold mb-2">Create new account</h1>
          <p className="text-gray-300 text-xs">
            Already a Member? <a href="#" className="text-blue-400 hover:underline">Log in</a>
          </p>

          <div className="mt-6 space-y-4">
            {/* First & Last Name */}
            <div className="flex gap-4">
                {/* First Name */}
                <div className="relative flex-1">
                <input
                    type="text"
                    id="firstName"
                    required
                    className="peer w-full h-10 px-3 pt-4 text-sm bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                    placeholder="First Name"
                />
                <label
                    htmlFor="firstName"
                    className="absolute left-3 top-1 text-gray-400 text-[11px] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-blue-400"
                >
                    First Name
                </label>
                </div>

                {/* Last Name */}
                <div className="relative flex-1">
                <input
                    type="text"
                    id="lastName"
                    required
                    className="peer w-full h-10 px-3 pt-4 text-sm bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                    placeholder="Last Name"
                />
                <label
                    htmlFor="lastName"
                    className="absolute left-3 top-1 text-gray-400 text-[11px] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-blue-400"
                >
                    Last Name
                </label>
                </div>
            </div>

            {/* Email */}
            <div className="relative w-full">
                <input
                type="email"
                id="email"
                required
                className="peer w-full h-10 px-3 pt-4 text-sm bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                placeholder="Email"
                />
                <label
                htmlFor="email"
                className="absolute left-3 top-1 text-gray-400 text-[11px] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-blue-400"
                >
                Email
                </label>
            </div>

            {/* Password */}
            <div className="relative w-full">
                <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                className="peer w-full h-10 px-3 pt-4 text-sm bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                placeholder="Password"
                />
                <label
                htmlFor="password"
                className="absolute left-3 top-1 text-gray-400 text-[11px] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-blue-400"
                >
                Password
                </label>
                <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            {/* Create Account Button */}
            <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded">
                Create Account
            </button>
            </div>


        </div>
      </div>

      {/* Right Side */}
      </div>
    </div>
  );
}
