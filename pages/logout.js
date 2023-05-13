import React from "react";
import Image from "next/image";
import { Leaving } from "@/assets";

const Logout = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <Image src={Leaving} alt="Leaving" className="h-full w-full" />
    </div>
  );
};

export default Logout;
