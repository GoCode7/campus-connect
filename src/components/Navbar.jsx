import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <aside className="w-100 h-full shadow-lg pt-5 px-5 fixed left-0 top-0 backdrop-blur-lg">
        <h1 className="text-3xl font-[600] text-[#356b34] mb-1">
          Campus Connect
        </h1>
        <p className="text-xl font-[500] mb-10">Student Network</p>

        <div className="flex flex-col gap-4 text-2xl font-[500]">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `py-3 px-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:border hover:border-gray-700 
            active:scale-95 active:bg-[#356b34]/30 focus:bg-[#356b34]/20 focus:ring-2 focus:ring-[#356b34]/30 focus:outline-none 
            ${
              isActive
                ? "bg-[#356b34]/20 ring-2 ring-[#356b34]/30"
                : "text-black"
            }`
            }
          >
            <FontAwesomeIcon
              icon={faHome}
              className="text-3xl mr-3 text-[#CCFF33]"
            />
            Dashboard
          </NavLink>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              `py-3 px-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:border hover:border-gray-700 
            active:scale-95 active:bg-[#356b34]/30 focus:bg-[#356b34]/20 focus:ring-2 focus:ring-[#356b34]/30 focus:outline-none 
            ${
              isActive
                ? "bg-[#356b34]/20 ring-2 ring-[#356b34]/30"
                : "text-black"
            }`
            }
          >
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-[#CCFF33] text-3xl mr-3"
            />
            Events
          </NavLink>

          <NavLink
            to="/groups"
            className={({ isActive }) =>
              `py-3 px-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:border hover:border-gray-700 
            active:scale-95 active:bg-[#356b34]/30 focus:bg-[#356b34]/20 focus:ring-2 focus:ring-[#356b34]/30 focus:outline-none 
            ${
              isActive
                ? "bg-[#356b34]/20 ring-2 ring-[#356b34]/30"
                : "text-black"
            }`
            }
          >
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-[#CCFF33] text-3xl mr-3"
            />
            Groups
          </NavLink>

          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `py-3 px-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:border hover:border-gray-700 
            active:scale-95 active:bg-[#356b34]/30 focus:bg-[#356b34]/20 focus:ring-2 focus:ring-[#356b34]/30 focus:outline-none 
            ${
              isActive
                ? "bg-[#356b34]/20 ring-2 ring-[#356b34]/30"
                : "text-black"
            }`
            }
          >
            <FontAwesomeIcon
              icon={faComment}
              className="text-[#CCFF33] text-3xl mr-3"
            />
            Messages
          </NavLink>

          <NavLink
            to="/userprofile"
            className={({ isActive }) =>
              `py-3 px-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:border hover:border-gray-700 
            active:scale-95 active:bg-[#356b34]/30 focus:bg-[#356b34]/20 focus:ring-2 focus:ring-[#356b34]/30 focus:outline-none 
            ${
              isActive
                ? "bg-[#356b34]/20 ring-2 ring-[#356b34]/30"
                : "text-black"
            }`
            }
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#CCFF33] text-3xl mr-3"
            />
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `py-3 px-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:border hover:border-gray-700 
            active:scale-95 active:bg-[#356b34]/30 focus:bg-[#356b34]/20 focus:ring-2 focus:ring-[#356b34]/30 focus:outline-none 
            ${
              isActive
                ? "bg-[#356b34]/20 ring-2 ring-[#356b34]/30"
                : "text-black"
            }`
            }
          >
            <FontAwesomeIcon
              icon={faGear}
              className="text-[#CCFF33] text-3xl mr-3"
            />
            Settings
          </NavLink>
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
