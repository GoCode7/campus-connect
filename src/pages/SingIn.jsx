import React from 'react'
import { Link } from "react-router-dom";

function SignIn() {
  return (
     <div>
      <section className="bg-[url('/images/transfer.png')] h-screen bg-cover justify-center items-center flex flex-col ">
        <div className="shadow-lg rounded-3xl backdrop-blur-lg justify-center items-center flex flex-col text-center w-1/3 p-10">
        <img src="/public/images/mtu-logo.png" alt="University Logo" className="h-30" />
          <h1 className="text-5xl font-[700] mb-5">Let's Get You in</h1>
          <form className="w-full text-2xl">
            <label className="text-left font-[600] mb-2 flex">
              University Email Address / Student ID
            </label>
            <input
              type="email"
              placeholder="Email Address Or Student ID"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCFF33]"
            />
            <label className="text-left font-[600] mb-2 flex">Password</label>
            <input
              type="Password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCFF33]"
            />
            <button
              type="submit"
              className="w-full bg-[#CCFF33] text-white p-3 rounded-lg font-[600] hover:bg-[#356b34] transition-colors duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-xl mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#CCFF33] font-[600] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
