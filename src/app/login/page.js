"use client"
import React from 'react'
import { signIn } from "next-auth/react"

const Page = () => {
    

    return (
        <div>
            <div className="text-white top-16 min-h-screen relative">
                <div className="text-white py-14 container mx-auto ">
                    <h1 className="font-bold text-2xl md:text-3xl text-center">Login/Signup To Get Started</h1>
                    <div className="flex flex-col gap-2 md:min-h-screen items-center p-10">

                        <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="flex items-center w-64 bg-gray-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img className='h-6 w-6 mr-2' src="img/google.svg" alt="" />
                            
                            <span>Continue with Google</span>
                        </button>
                        
                        <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="flex items-center w-64 bg-gray-50 text-black border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-300/80">
                            <img className='mr-3' src="img/git.svg" alt="" />
                            <span>Continue with Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
