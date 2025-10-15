import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Editprofile() {
  return (
    <div>
      <section className='flex'>
        <Navbar />
        <main className='w-full h-screen py-10 px-[250px] bg-gray-100 ml-100'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
                <h1 className='text-3xl font-[500]'>Edit Profile</h1>
                <p className='mb-3'>Update your profile information and social handles</p>
                <div className='flex gap-10 items-center my-5'>
                    <img src="/public/images/Profilepics.jpg" alt="" className="w-50 rounded-full"/>
                    <div>
                        <h3 className='mb-3 font-[400] ml-3'>Profile Picture</h3>
                        <button className='py-2 px-3 hover:bg-purple-400 hover:border-none rounded-[15px] font-[600] items-center border'>  <FontAwesomeIcon icon={faCamera} className='mr-2'/>Upload Photo</button>
                        <button className="py-2 px-3 hover:bg-purple-400 hover:border-none rounded-[15px] font-[600] items-center ml-4">Remove</button>
                    </div>
                </div>
                <div>
                    <h2 className='font-[500] text-2xl mb-3'>Personal Information</h2>
                    <form className='grid gap-4 '>
                        <label className='text-xl font-[500]'>Full Name</label>
                        <input type="text" placeholder='Enter your full name' className='border w-[700px] py-2 px-3 rounded-lg'/>
                        <label className='text-xl font-[500]'>Department</label>
                        <input type="text" placeholder='Enter your department' className='border w-[700px] py-2 px-3 rounded-lg' />
                        <label className='text-xl font-[500]'>Level</label>
                        <input type="text" placeholder='Enter your level' className='border w-[700px] py-2 px-3 rounded-lg' />
                        <label className='text-xl font-[500]'>Bio</label>
                        <textarea placeholder='Write a short bio about yourself' className='border w-[700px] py-2 px-3 rounded-lg'></textarea>
                        <label className='text-xl font-[500]'>Phone Number</label>
                        <input type="tel" placeholder='Enter your phone number' className='border w-[700px] py-2 px-3 rounded-lg' />
                        <label className='text-xl font-[500]'>Email Address</label>
                        <input type="email" placeholder='Enter your email address' className='border w-[700px] py-2 px-3 rounded-lg' />
                        <label className='text-xl font-[500]'>Hostel</label>
                        <input type="text" placeholder='Enter your location' className='border w-[700px] py-2 px-3 rounded-lg' />
                        <button type='submit' className='py-2 text-xl font-[600] bg-purple-400 rounded-2xl w-50 mt-4 hover:scale-105 transition-all duration-300 hover:text-2xl hover:text-white'>Save Changes</button>
                    </form>
                </div>
            </div>
        </main>
      </section>
    </div>
  )
}

export default Editprofile;
