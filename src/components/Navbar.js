"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div  className="bg-gray-950 text-white flex justify-between items-center fixed top-0 z-20 w-full px-5 md:px-10 pt-2 h-16">
        <div className="logo font-bold md:text-lg">
          <Link href="/" className='flex justify-center items-center'>
            <span className="block">
              <img src="img/tea.gif" alt="Logo" className="bg-blend-luminosity w-[60px] pb-6" />
            </span>
            <span className="hidden sm:block">GetMeAChai!</span>
          </Link>
        </div>
        <div className="relative flex gap-3">
          <button
            onClick={toggleModal}
            className="text-white mx-1 md:mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-3 md:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
          >
            <img className="size-4 font-bold" src="img/search.svg" alt="" />

            <span className="sr-only">Search</span>
          </button>
          {!session && <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"
            >
              LogIn
            </button>


          </Link>}
          {session &&
            <div onBlur={() => {
              setTimeout(() => {
                setIsOpen(!isOpen);
                setShowdropdown(!showdropdown);
              }, 300);
            }} className='flex gap-3'>
              {/* Hamburger */}
              <button
                onClick={() => { setIsOpen(!isOpen), setShowdropdown(!showdropdown) }}
                className="lg:hidden block flex-col items-center justify-center w-8 h-8 text-white rounded-md focus:outline-none"
              >
                <div
                  className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-700 ${isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-700 ${isOpen ? 'opacity-0' : ''
                    }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transition-transform duration-700 ${isOpen ? '-rotate-45 -translate-y-1' : ''
                    }`}
                ></div>
              </button>
              {/* welcome button */}
              
              <button
                onClick={() => { setShowdropdown(!showdropdown) }}
                type="button"
                className="text-white lg:block hidden bg-gradient-to-br from-green-400 cursor-pointer to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2"
              >
                Welcome {session.user.email}
                <select className='bg-transparent cursor-pointer outline-none'>
                </select>
              </button>
            </div>}
          {/* Dropdown Menu */}
          {session && showdropdown &&
            <div className='fixed top-16 right-64 mr-3 lg:mr-0 lg:right-[24.5%]'>
              <Link onClick={() => { setIsOpen(!isOpen), setShowdropdown(!showdropdown) }} href="/dashboard">
                <button
                  type="button"
                  className="text-white top-28 fixed z-50 w-[250px] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg flex gap-6 text-sm px-5 py-2.5 text-center mx-2 mb-2"
                >
                <img className='w-6 cursor-pointer h-6'  src="img/dashboard2.png" alt="" />
                  Dashboard
                </button>
              </Link>

              <Link onClick={() => { setIsOpen(!isOpen), setShowdropdown(!showdropdown) }} href="/profile">
                <button
                  type="button"
                  className="text-white fixed z-50 w-[250px] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg flex gap-6 text-sm px-5 py-2.5 text-center mx-2 mb-2"
                >
                  <img className='w-6 cursor-pointer brightness-150 h-6 rounded-full' src="img/profile.jpg" alt="profile" />
                  Profile
                </button>

              </Link>


              <Link href="/login" onClick={() => { signOut({ callbackUrl: "/login" }),setIsOpen(!isOpen), setShowdropdown(!showdropdown) }}>
                <button
                  type="button"
                  className="text-white fixed mt-[-1px]  top-40 w-[250px] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm flex gap-6 px-5 py-2.5 text-center mx-2 mb-2"
                >
                  <img className='w-6 cursor-pointer h-6'  src="img/signOut.svg" alt="" />
                  Sign out
                </button>
              </Link>
            </div>
          }
        </div>
      </div>
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center w-full h-full backdrop-blur-sm bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50"
        >
          <div className="relative top-20 p-4 w-full max-w-3xl mx-auto max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Find Your Favourite Creator
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="uName"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="uName"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username"
                        required
                        name="uName"
                      />
                      <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
