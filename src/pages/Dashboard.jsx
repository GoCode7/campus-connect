import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; 
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div>
      <section className="flex">
        <Navbar />
        <main className="w-full h-screen p-10 bg-gray-100 ml-100">
          <div className="flex items-center justify-between mb-15">
            <div>
              <h1 className="text-3xl font-[700]">Welcome Back! Ade</h1>
              <p className="text-xl ">Here's what's happening on campus</p>
            </div>
            <div className="flex items-center gap-15">
              <FontAwesomeIcon
                icon={faBell}
                className="text-3xl hover:text-[#356b34]"
              />
              <button className="bg-[#000] text-white px-4 py-2 rounded-lg font-[600] hover:bg-[#356b34] transition-colors duration-300 ml-5">
                <Link>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> New Post
                </Link>
              </button>
            </div>
          </div>
          <section>
            <h2 className="text-[28px] font-[600]">Upcoming Events</h2>
            <div className="mt-5 grid grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <img src="/public/images/Mtu-prays.jpg" alt="" />
                <h3 className="text-2xl font-[600] mb-2">MTU Prays</h3>
                <p className="text-gray-600 mb-4">< FontAwesomeIcon icon={faCalendar} className="mr-3"/>
                    October 2, 2025
                </p>
                <p className="text-gray-800"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Multipurpose Hall</p>
                <p className="text-gray-800">
                    Join us for a day of prayer and reflection with fellow 
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">   
                <img src="/public/images/Pmch.jpg" alt="" />
                <h3 className="text-2xl font-[600] mb-2">Power Must Change Hands</h3>
                <p className="text-gray-600 mb-4">< FontAwesomeIcon icon={faCalendar} className="mr-3"/>
                    October 4, 2025
                </p>
                 <p className="text-gray-800"><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Multipurpose Hall</p>
                <p className="text-gray-800">
                    An empowering event to inspire change and leadership
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <img src="/public/images/trade-fair.jpg" alt="" />
                <h3 className="text-2xl font-[600] mb-2">Trade Fair</h3>
                <p className="text-gray-600 mb-4">< FontAwesomeIcon icon={faCalendar} className="mr-3"/>
                     December 1, 2025
                </p>
                 <p className="text-gray-800 "><FontAwesomeIcon icon={faLocationDot} className="mr-2"/> Multipurpose Hall</p>
                <p className="text-gray-800">
                    Explore local businesses and artisans at our annual trade fair
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-[28px] font-[600] mt-10 mb-5">Campus News</h2>
            <div className="mt-5 grid grid-cols-3 gap-5">
                <div className="shadow-lg p-5 rounded-lg bg-gray-100">
                    <h3 className="text-[20px] font-[600]">MTU Opens New Research Center</h3>
                    <p>
                        MTU has inaugurated a state-of-the-art research center  
                        to foster innovation and collaboration among students and faculty.
                        <Link className="ml-4 underline font-[500]">Read more</Link>
                    </p>
                </div>
                <div className="shadow-lg p-5 rounded-lg bg-gray-100">
                    <h3 className="text-[20px] font-[600]">Student Wins National Coding Competition</h3>
                    <p>
                        Congratulations to Jane Doe for winning first place in the 
                        National Coding Competition, showcasing exceptional programming skills.
                        <Link className="ml-4 underline font-[500]">Read more</Link>
                    </p>
                </div>
                <div className="shadow-lg p-5 rounded-lg bg-gray-100">
                    <h3 className="text-[20px] font-[600]">Annual Sports Meet Scheduled for November</h3>
                    <p>
                        Get ready for the annual sports meet this November, featuring 
                        exciting competitions and activities for all students.
                        <Link className="ml-4 underline font-[500]">Read more</Link>
                    </p>
                </div>
            </div>
          </section>
          <section>
            <h2  className="text-[28px] font-[600] mt-10 mb-5">Student Groups</h2>
            <div className="mt-5 grid grid-cols-3 gap-5">
                <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-[600] mb-2">Tech Club</h3>
                    <p> <FontAwesomeIcon icon={faUserGroup}/> 300 Members</p>
                    <p className="text-gray-800 mb-5">
                        Join the Tech Club to explore the latest in technology, coding, 
                        and innovation with fellow enthusiasts.
                    </p>
                     <button className="px-3 py-1 bg-purple-200 text-[22px] font-[500] rounded-2xl hover:scale-120 transition-all duration-300"><Link>Join Group</Link></button>n
                </div>
                <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-[600] mb-2">Computer Science Club</h3>
                    <p> <FontAwesomeIcon icon={faUserGroup}/> 150 Members</p>
                    <p className="text-gray-800 mb-5">
                        Connect with peers, participate in coding challenges, and attend
                        workshops with the Computer Science Club.
                    </p>
                      <button className="px-3 py-1 bg-purple-200 text-[22px] font-[500] rounded-2xl hover:scale-120 transition-all duration-300"><Link>Join Group</Link></button>
                </div>
                <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-[600] mb-2">Environmental Club</h3>
                    <p> <FontAwesomeIcon icon={faUserGroup}/> 80 Members</p>
                    <p className="text-gray-800 mb-5">
                        Participate in environmental conservation efforts and sustainability 
                        projects with the Environmental Club.
                    </p>
                     <button className="px-3 py-1 bg-purple-200 text-[22px] font-[500] rounded-2xl hover:scale-120 transition-all duration-300"><Link>Join Group</Link></button>
                </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
