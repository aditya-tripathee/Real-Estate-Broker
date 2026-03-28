import React, { useState } from "react";
import logo from "../assets/Logo.png";
import userAvatar from "../assets/avatar.png";

const Navbar = () => {
  const [openProfile, setOpenProfile] = React.useState(false);
  const [user,setUser] = useState(false);
  return (
    <div className=" mt-2 z-50">
      <div className="w-full max-w-7xl mx-auto px-5 py-5 flex justify-between items-center shadow-md rounded-lg border border-gray-100 transition-all duration-100 ">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h1 className="ml-2 font-extrabold text-xl text-pink-700">
            Real<span className="text-blue-700">Estate</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-4 text-md">
            <li className="text-sm font-semibold cursor-pointer">Home</li>
            <li className="text-sm font-semibold cursor-pointer">Properties</li>
            <li className="text-sm font-semibold cursor-pointer">Contact</li>
          </ul>

          {
            user ? <div>Get Started</div> : <div className="relative">
            <img
              src={userAvatar}
              alt="User Avatar"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={() => setOpenProfile(!openProfile)}
            />

            {/* dropdown mwnu */}
            {openProfile && (
              <div className="absolute right-0 mt-2 bg-gray-400 shadow rounded p-3 w-40">
                <p className="cursor-pointer hover:bg-gray-100 hover:rounded-2xl px-2 py-1">
                  View Profile
                </p>
                <p className="cursor-pointer hover:bg-gray-100  hover:rounded-2xl px-2 py-1">
                  Logout
                </p>
              </div>
            )}
          </div>
          }

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;


