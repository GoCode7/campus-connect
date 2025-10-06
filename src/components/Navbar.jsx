import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
        
            <aside className='w-100 h-full shadow-lg pt-5 px-5 fixed left-0 top-0 backdrop-blur-lg '>
                <h1 className='text-3xl font-[600] text-[#356b34] mb-1'>Campus Connect</h1>
                <p className='text-xl font-[500] mb-10'>Student Network </p>
                <div className='flex flex-col gap-4 text-2xl font-[500]'>
                    <div className='bg-[#356b34] text-white py-3 px-5 rounded-2xl hover:scale-105 transition-all duration-300'>
                        <Link> <FontAwesomeIcon icon={faHome} className="text-3xl mr-3 text-[#CCFF33]" />Dashboard</Link>
                    </div>
                    <div className='bg-[#356b34] text-white py-3 px-5 rounded-2xl hover:scale-105 transition-all duration-300 items-center flex'>
                        <Link> <FontAwesomeIcon icon={faCalendar} className="text-[#CCFF33] text-3xl mr-3" />Events</Link>
                    </div>
                    <div className='bg-[#356b34] text-white py-3 px-5 rounded-2xl hover:scale-105 transition-all duration-300'>
                        <Link><FontAwesomeIcon icon={faUserGroup} className="text-[#CCFF33] text-3xl mr-3" /> Groups</Link>
                    </div>
                    <div className='bg-[#356b34] text-white py-3 px-5 rounded-2xl hover:scale-105 transition-all duration-300'>
                        <Link> <FontAwesomeIcon icon={faComment} className="text-[#CCFF33] text-3xl mr-3" />Messages</Link>
                    </div>
                    <div className='bg-[#356b34] text-white py-3 px-5 rounded-2xl hover:scale-105 transition-all duration-300'>
                        <Link><FontAwesomeIcon icon={faUser} className="text-[#CCFF33] text-3xl mr-3" />Profile</Link>
                    </div>
                    <div className='bg-[#356b34] text-white py-3 px-5 rounded-2xl hover:scale-105 transition-all duration-300'>
                        <Link><FontAwesomeIcon icon={faGear} className="text-[#CCFF33] text-3xl mr-3"/>Settings</Link>
                    </div>
                </div>
            </aside>
    
    </div>
  );
}

export default Navbar;
