'use client';
import Link from "next/link";
import Image from "next/image";
import profile from './assets/profiledom.jpg';
import banner from './assets/background.jpg'; 
import fsp from './assets/FSP.png';
import mern from './assets/MERN.png';
import jsp from './assets/JSP1.png';
import MyGitHubCalendar from "./githubcalendar";


export default function Home() {

  return (
    <main className="z-0 relative flex flex-col items-center justify-center min-h-screen p-12">

      <div className="absolute inset-0 w-full h-full">
        <Image src={banner} alt="Banner" className="w-30 h-30 p-5 object-scale-down" priority/>
      </div>


      <div className="relative z-10 flex flex-col items-center justify-center w-full">

        <div className="max-w-md text-center mb-8">
          <Image src={profile} alt="profile" className="rounded-full w-60 mx-auto mb-4 z-10" />
          <h1 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h1>
        </div>


        <div className="max-w-md mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">Hey, I&apos;m Dominic Cashiola, an up-and-coming software engineer and graduate of App Academy with experience working with technologies such as React/Redux, JavaScript, Ruby/Rails, Express, HTML, and CSS.</p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-8 mt-10 z-10">
          <div className="bg-gray-100 hover:bg-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-4">
              <h2 className="text-black text-xl font-semibold mb-2">QuantumShop</h2>
              <Image src={fsp} alt="fsp" className="mb-10 h-32"/>
              <p className="text-black">Simple clone of Amazon using React / Redux, Ruby on Rails, HTML, CSS</p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 border-t border-gray-200 flex justify-between">
              <Link href="https://quantumshop.onrender.com" className="text-blue-500 hover:text-blue-700">Visit Site</Link>
              <Link href="https://github.com/Dominic5591/Quantum-Shop" className="text-blue-500 hover:text-blue-700">Github</Link>
            </div>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-4">
              <h2 className="text-black text-xl font-semibold mb-2">Space Frenzy</h2>
              <Image src={jsp} alt="jsp" className="mb-10"/>
              <p className="text-black">Vanilla JavaScript space arcade game</p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 border-t border-gray-200 flex justify-between">
              <Link href="https://dominic5591.github.io/Space-Frenzy/" className="text-blue-500 hover:text-blue-700">Play Now</Link>
              <Link href="https://github.com/Dominic5591/Space-Frenzy" className="text-blue-500 hover:text-blue-700">Github</Link>
            </div>
          </div>
          <div className=" bg-gray-100 hover:bg-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-4">
              <h2 className="text-black text-xl font-semibold mb-2">Habit Tree</h2>
              <Image src={mern} alt="mern" className="mb-10 h-32"/>
              <p className="text-black">A habit tracking application made using MERN stack</p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 border-t border-gray-200 flex justify-between">
              <Link href="https://habit-tree.onrender.com/" className="text-blue-500 hover:text-blue-700">Visit Site</Link>
              <Link href="https://github.com/cfang322/Habit-Tree" className="text-blue-500 hover:text-blue-700">Github</Link>
            </div>
          </div>
        </div>

        <div className="max-w-md mb-8 mt-10 text-center">
          <h2 className="text-2xl font-bold text-l mb-4 text-white">Favorite Technologies</h2>
          <ul className="flex flex-wrap justify-center gap-10 text-white">
            <li>React/Redux</li>
            <li>JavaScript</li>
            <li>Ruby/Rails</li>
          </ul>

        </div>

        {/* <Image src="http://ghchart.rshah.org/Dominic5591" alt="Dominic5591's Github chart" /> */}
        {/* <MyGitHubCalendar/> */}


        <div className="bg-black h-96">

          <img
            className="text-yellow-300 h-44"
            src="http://ghchart.rshah.org/027802/Dominic5591"
            alt="Dominic5591's Github chart"
          />

        </div>



        <div className="flex flex-row space-x-5">
          <Link href={`https://github.com/Dominic5591`} className="text-blue-500 hover:text-blue-700">Github</Link>
          <Link href={`https://www.linkedin.com/in/dominic-c-1076322a8/`} className="text-blue-500 hover:text-blue-700">LinkedIn</Link>
        </div>
      </div>
    </main>
  );
}
