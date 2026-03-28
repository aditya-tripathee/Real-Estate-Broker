import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log({email,password});

  };

  return (
    <div className="max-w-7xl mt-10 flex items-center mx-auto justify-center  ">
      <form 
        onSubmit={handleSubmit}
      className=" w-[95%] md:w-[40%] flex px-8 flex-col p-5 border rounded-2xl border-gray-200 shadow-2xl bg-white">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <div className="flex flex-col mt-7 mb-1">
          <label className="text-md font-semibold">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-md p-2 mt-2 focus:outline-none "
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col my-1 ">
          <label className="text-md font-semibold">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded-md p-2 mt-2 focus:outline-none "
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
         type="submit"
         className="bg-blue-700 text-white py-2 mt-5 rounded-md cursor-pointer hover:bg-blue-800 transition-colors duration-300 font-semibold">
          Sign In
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-700 hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
