import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="leading-[40px]">
      <section className="bg-[url('/images/mask-image.webp')] h-250 w-full bg-cover justify-center items-center flex flex-col text-white text-center">
        <div className="justify-center items-center text-center">
          <img src="/public/images/mtu-logo.png" alt="" className="mx-auto h-45"/>
          <h1 className="text-8xl font-[700] mb-5 [text-shadow:_10px_2px_0_#000]">Campus Connect</h1>
          <p className="text-3xl w-[900px] mb-5 font-[700]">
            Connect with students, discover events, and make the most of your
            university experience
          </p>
          <Link to="/signup" className="bg-[#CCFF33] px-4 py-3 text-2xl rounded-2xl font-[600] mr-10 hover: cursor-pointer hover:p-5 transition-all duration-300">
            Get Started{" "}
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </Link>
          <Link to="/signin" className="bg-white px-4 py-3 text-2xl text-black rounded-2xl font-[600]  hover:cursor-pointer hover:p-5 transition-all duration-300">
            Sign In
          </Link>
          <Link to='/dashboard'>dashboard</Link>
        </div>
      </section>
      <section className="text-center mt-15 px-10">
        <div>
          <h2 className="text-4xl font-[700]">
            Everything You Need in One Place
          </h2>
        </div>
        <div className="flex flex-row-3 justify-center mt-10 gap-10">
          <div className="p-4 shadow-lg rounded-lg">
            <div className="leading-[25px]">
              <FontAwesomeIcon icon={faUserGroup} className="text-[#CCFF33] text-6xl mb-10" /> 
              <h2 className="text-2xl font-[600] mb-2">Students Groups</h2>
            <p className="w-100">
              Join communities that share your interests and connect with
              like-minded students
            </p>
            </div>
            
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <div className="leading-[25px]">
               <FontAwesomeIcon icon={faCalendar} className="text-[#CCFF33] text-6xl mb-10" />
              <h2 className="text-2xl font-[600] mb-2">Campus Events</h2>
            < p className="w-100">
              Join communities that share your interests and connect with
              like-minded students
            </p>
            </div>
            
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <div className="leading-[25px]">
                <FontAwesomeIcon icon={faComment} className="text-[#CCFF33] text-6xl mb-10" />
              <h2 className="text-2xl font-[600] mb-2">Stay Connected</h2>
              <p className="w-100">
                Join communities that share your interests and connect with
                like-minded students
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
