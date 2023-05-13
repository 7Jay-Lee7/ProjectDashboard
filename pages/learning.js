import { Codecademy, JSMastery, OdinProject, W3school, YouTube, freeCodeCamp } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const lessons = () => {
  return (
    <div>
   <p className="text-red-950 text-3xl mb-16 font-extrabold">My learning resources</p>

  <div>
  <div className="grid lg:grid-cols-3 gap-5 mb-16">
   <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://www.theodinproject.com/" target="_blank" >
        <Image src={OdinProject} alt="The Odin Project" className="h-60" />
        </Link>
        <p>The Odin Project</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://www.codecademy.com/" target="_blank" >
        <Image src={Codecademy} alt="Codecademy" className="h-60" />
        </Link>
        <p>Codecademy</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://www.freecodecamp.org/" target="_blank" >
        <Image src={freeCodeCamp} alt="freeCodeCamp" className="h-60" />
        </Link>
        <p>freeCodeCamp</p>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-5 mb-16">
    <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://profile.w3schools.com/" target="_blank" >
        <Image src={W3school} alt="W3 School" className="h-60" />
        </Link>
        <p>W3 School</p>
      </div>
    <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://youtube.com/" target="_blank" >
        <Image src={YouTube} alt="YouTube" className="h-60" />
        </Link>
        <p>YouTube</p>
      </div>
      <div className="rounded h-70 bg-gray-900 text-white shadow-sm text-center">
        <Link href="https://www.jsmastery.pro/" target="_blank" >
        <Image src={JSMastery} alt="JS Mastery Pro" className="h-60" />
        </Link>
        <p>JS Mastery Pro</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default lessons