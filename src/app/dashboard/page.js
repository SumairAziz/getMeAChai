"use client";

import React, { useState } from 'react';
import Button from "@/components/Button";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  // Initialize state for each form field
  const [formData, setFormData] = useState({
    name: '',
    email: 'user@example.com',
    username: '',
    profilpicture: '',
    coverpicture: '',
    razorpayid: '',
    razorpaySecret: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted", formData);
    router.push('/profile');
  };

  return (
    <div className="p-4">
      <nav className="flex flex-col justify-center gap-6 items-center h-full w-full">
        <Button />
        <div className="text-white min-h-screen relative">
          <div className="Toastify"></div>
          <div className="min-h-screen min-w-[344px]">
            <form
              className="max-w-sm md:max-w-lg mx-auto pb-5 px-3 md:px-0"
              onSubmit={handleSubmit}
            >
              <div className="mb-1">
                <label htmlFor="name" className="block gradient mb-1 text-lg font-medium text-white">Name</label>
                <div className="gradient-border">
                  <input
                    id="name"
                    className="bg-gray-50 outline-none text-gray-900 text-sm rounded-lg w-full px-2.5 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                    type="text"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>


              </div>
              <div className="mb-1">
                <label htmlFor="email" className="block gradient mb-2 text-sm font-medium text-white">Email</label>
                <input
                  id="email"
                  className="bg-gray-50 border border-gray-300 dark:border-gray-600 text-gray-900/70 text-sm rounded-lg block w-full px-2.5 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white/70 focus-visible:outline-none "
                  title="Email can't be modified"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="username" className="block gradient mb-2 text-sm font-medium text-white">Username</label>
                <input
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={formData.username}
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="profilpicture" className="block gradient mb-2 text-sm font-medium text-white">Profile Picture</label>
                <input
                  id="profilpicture"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="url"
                  value={formData.profilpicture}
                  name="profilpicture"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="coverpicture" className="block gradient mb-2 text-sm font-medium text-white">Cover Picture</label>
                <input
                  id="coverpicture"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="url"
                  value={formData.coverpicture}
                  name="coverpicture"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="razorpayid" className="block gradient mb-2 text-sm font-medium text-white">Razorpay Id</label>
                <input
                  id="razorpayid"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={formData.razorpayid}
                  name="razorpayid"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="razorpaySecret" className="block gradient mb-2 text-sm font-medium text-white">Razorpay Secret</label>
                <input
                  id="razorpaySecret"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={formData.razorpaySecret}
                  name="razorpaySecret"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex justify-center">
                <button type="submit" className="text-white bg-gradient-to-r to-cyan-500 from-red-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-slate-50">Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
