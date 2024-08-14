"use client"
import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"




export default function Home() {
  return (
    <>
      {/* First Section */}
      <div className="flex flex-col justify-center items-center h-[100dvh] gap-10">
        <div className="font-bold text-4xl md:text-6xl items-end justify-center flex gap-0">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent">Get Me A Chai</span>
          <span>
            <img src="img/tea.gif" alt="" className="bg-blend-luminosity w-[62px] md:w-[70px] mb-[-7px]" />
          </span>
        </div>
        <p className="px-5 text-white text-wrap text-center text-lg font-bold">
          A Crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
        </p>
        <div>
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Start Here
            </button>
          </Link>

          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
      {/* hr */}
      <div className="bg-white h-1 opacity-10"></div>

      {/* Second Section */}
      <div className="text-white container mx-auto py-14 px-10 md:px-0">
        <h2 className="text-2xl text-center font-bold mb-14">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-4 flex flex-col items-center text-center">
            <img src="img/person.gif" alt="studying" className="bg-slate-400 rounded-full w-[82px] md:w-[90px]" />
            <p className="text-center font-bold">Fund Yourself</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="item space-y-4 flex flex-col items-center text-center">
            <img src="img/dollar.gif" alt="dollar" className="bg-slate-400 rounded-full w-[82px] md:w-[90px]" />
            <p className="text-center font-bold">Fund Yourself</p>
            <p>Your fans are available to help you</p>
          </div>
          <div className="item space-y-4 flex flex-col items-center text-center">
            <img src="img/people.gif" alt="group" className="bg-slate-400 rounded-full w-[82px] md:w-[90px]" />
            <p className="text-center font-bold">Fans want to help</p>
            <p>Your fans are available to help you</p>
          </div>
        </div>
      </div>


      {/* hr  */}
      <div className="bg-white h-1 opacity-10 "></div>
      {/* Third Section */}
      <div className="text-white container py-14 mx-auto">
        <h2 className="text-2xl text-center font-bold mb-14">Learn More About Us</h2>
        <div className="px-1 md:px-5 mt-20">
          <p className="p-4 text-gray-200 text-md text-center font-sans">
            At Get Me A Chai, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.
          </p>
          <p className="p-4 text-gray-200 text-md text-center font-sans">
            Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Get Me A Chai is here to help you achieve your goals.
          </p>
          <p className="p-4 text-gray-200 text-md text-center font-sans">
            We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.
          </p>
        </div>
      </div>



    </>
  );
}

