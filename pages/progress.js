import { CodingJourney } from "@/assets";
import Image from "next/image";

export default function Lessons() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0">
        <p className="text-red-950 text-3xl mb-16 font-extrabold">Progress</p>
      </div>
      <p className="flex justify-center items-center font-bold">Surviving the Learning-to-Code Journey</p>
      <p className="flex justify-center items-center">This page is still under construction while I learn how to implement a graph based on my coding journey</p>
      <div className="flex justify-center items-center flex-grow">
        <Image src={CodingJourney} alt="Coding Journey" />
      </div>
    </div>
  );
}
