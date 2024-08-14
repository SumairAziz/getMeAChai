import React from 'react'

const Button = () => {
  return (
    <div>
      <button
          style={{ WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))' }}
          className="px-12 invert py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600 shadow-red-600 uppercase font-serif tracking-widest relative overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
        >
          Button
          <p
            className="absolute text-white invert z-40 font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-700 -translate-y-[30%] tracking-widest"
          >
            WELCOME
          </p>
          <p
            className="absolute text-white invert z-40 top-1/2 left-1/2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-700 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
          >
            to Dashboard
            {/* {session ? session.user.email : "Sign in first"} */}
          </p>
          <svg
            className="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-700"
            viewBox="0 0 2400 800"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sssurf-grad" y2="100%" x2="50%" y1="0%" x1="50%">
                <stop
                  offset="0%"
                  stopOpacity="1"
                  stopColor="hsl(37, 99%, 67%)"
                ></stop>
                <stop
                  offset="100%"
                  stopOpacity="1"
                  stopColor="hsl(316, 73%, 52%)"
                ></stop>
              </linearGradient>
            </defs>
            <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
              <path
                opacity="0.05"
                transform="matrix(1,0,0,1,0,35)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
              <path
                opacity="0.21"
                transform="matrix(1,0,0,1,0,70)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
              <path
                opacity="0.37"
                transform="matrix(1,0,0,1,0,105)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
              <path
                opacity="0.53"
                transform="matrix(1,0,0,1,0,140)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
              <path
                opacity="0.68"
                transform="matrix(1,0,0,1,0,175)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
              <path
                opacity="0.84"
                transform="matrix(1,0,0,1,0,210)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
              <path
                opacity="1"
                transform="matrix(1,0,0,1,0,245)"
                d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
              ></path>
            </g>
          </svg>
          <svg
            className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-700 z-40 fill-red-500"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,224C406.2,213,425,139,443,122.7C461.5,107,480,149,498,176C516.9,203,535,213,554,186.7C572.3,160,591,96,609,106.7C627.7,117,646,203,664,240C683.1,277,702,267,720,240C738.5,213,757,171,775,133.3C793.8,96,812,64,830,53.3C849.2,43,868,53,886,96C904.6,139,923,213,941,218.7C960,224,978,160,996,138.7C1015.4,117,1034,139,1052,170.7C1070.8,203,1089,245,1108,250.7C1126.2,256,1145,224,1163,186.7C1181.5,149,1200,107,1218,90.7C1236.9,75,1255,85,1274,96C1292.3,107,1311,117,1329,117.3C1347.7,117,1366,107,1385,112C1403.1,117,1422,139,1431,149.3L1440,160L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1330,320C1311.5,320,1293,320,1275,320C1256.9,320,1238,320,1220,320C1201.5,320,1183,320,1165,320C1146.2,320,1128,320,1110,320C1091.5,320,1073,320,1055,320C1036.9,320,1018,320,1000,320C981.5,320,963,320,945,320C926.2,320,908,320,890,320C871.5,320,853,320,835,320C816.9,320,798,320,780,320C761.5,320,743,320,725,320C706.9,320,688,320,670,320C651.5,320,633,320,615,320C596.9,320,578,320,560,320C541.5,320,523,320,505,320C486.9,320,468,320,450,320C431.5,320,413,320,395,320C376.9,320,358,320,340,320C321.5,320,303,320,285,320C266.9,320,248,320,230,320C211.5,320,193,320,175,320C156.9,320,138,320,120,320C101.5,320,83,320,65,320C46.9,320,28,320,14,320L0,320Z"
            ></path>
          </svg>
        </button>
    </div>
  )
}

export default Button
