import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Userprofile() {
  return (
    <div>
      <section className="flex">
        <Navbar />
        <main className="w-full h-screen p-10 bg-gray-100 ml-100">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex gap-10 items-center">
              <div className="">
                <img
                  src="/public/images/about.jpg"
                  alt="Profile-picture"
                  className="h-40 rounded-full "
                />
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex items-center space-x-190 ">
                  <h2 className="text-[32px] font-[700]">Aluko Jesutofunmi</h2>
                  <Link to="/editprofile" className="px-3 py-2 text-xl font-[600] bg-[#356b34] rounded-2xl "><FontAwesomeIcon icon={faPenToSquare} className="text-xl" /> Edit Profile</Link>
                </span>

                <span className="flex gap-3 text-xl font-[500] items-center text-gray-500">
                  <p>Computer Science</p>
                  <span className="bg-black rounded-full w-2 h-2 "></span>
                  <p>400 Level</p>
                </span>
                <p className="text-xl w-[800px]">Passionate about technology and innovation. Always looking to learn and collaborate on exciting projects!</p>
                <div className="flex gap-5">
                  <h3 className="items-center font-[500]"> <FontAwesomeIcon icon={faEnvelope} className="mr-1"/>Alukojesutofunmi01@gmail.com</h3>
                  <h3 className="items-center font-[500]"> <FontAwesomeIcon icon={faLocationDot} className=""/> Campus Residence <span className="font-[600]">HOD A08</span></h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Userprofile;
