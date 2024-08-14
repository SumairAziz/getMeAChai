import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[350]' src="img/paymentbg.gif" alt="" />
        <div className='absolute -bottom-20 right-[46%]  rounded-3xl'>
          <img className='rounded-3xl spin' width="130" height="130" src="img/star.png" alt="star" />
        </div>
      </div>
      <div className='info flex justify-center items-center my-24 flex-col gap-2'>
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          creating animated art fot VTT's
        </div>
        <div className='text-slate-400'>
          12,727 . members86 . posts$16,900/release
        </div>
        <div className='payment mt-11 flex gap-3 w-[90%]'>
          {/* For messages from users */}
          <div className="supporters  opacity-65 w-1/2 bg-slate-900 rounded-2xl text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-2'>
              <li className='my-4 text-nowrap flex gap-2 items-center'><img width={33} src="img/avatar.gif" alt="avatar" />Aziz donated <span>$10</span> with a message <span id='message'>"Lots of ❤️"</span></li>
              <li className='my-4 text-nowrap flex gap-2 items-center'><img width={33} src="img/avatar.gif" alt="avatar" />Aziz donated <span>$10</span> with a message <span id='message'>"Lots of ❤️"</span></li>
              <li className='my-4 text-nowrap flex gap-2 items-center'><img width={33} src="img/avatar.gif" alt="avatar" />Aziz donated <span>$10</span> with a message <span id='message'>"Lots of ❤️"</span></li>
            </ul>
          </div>
          {/* input for name and message */}
          <div className='w-1/2 bg-slate-900 opacity-75 rounded-2xl text-white p-10'>
            <h2 className='text-2xl font-bold my-5'>Make a payment</h2>
            <div className='flex gap-2 flex-col'>
              <div>
                <input type="text" className='w-full px-3 py-2 rounded-lg bg-slate-800' placeholder='Enter Name' name="" id="" />
              </div>
              <input type="text" className='w-full px-3 py-2 rounded-lg bg-slate-800' placeholder='Enter Message' name="" id="" />
              <input type="text" className='w-full px-3 py-2 rounded-lg bg-slate-800' placeholder='Enter Amount' name="" id="" />
              <button type="button" className="text-white w-fit px-8 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg py-1.5 text-center me-2 mb-2">Pay</button>
            </div>
            {/* Or choose from these amounts */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 px-3 py-2 hover:bg-slate-600 transition-all duration-300 rounded-lg'> Pay $20</button>
              <button className='bg-slate-800 px-3 py-2 hover:bg-slate-600 transition-all duration-300 rounded-lg'> Pay $30</button>
              <button className='bg-slate-800 px-3 py-2 hover:bg-slate-600 transition-all duration-300 rounded-lg'> Pay $50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username