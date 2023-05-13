import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, MyLogo, Learning, Logout, Progress, Settings, User, Messages } from "@/assets";
import Image from "next/image";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-gray-800 shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <Image src={MyLogo} alt="logo" width="auto" height="auto" />
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={Home} alt="home" height="25" width="25" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={User} alt="user" height="25" width="25" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
        <Link href="/messages">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/messages"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={Messages} alt="messages" height="25" width="25" />
            </div>
            <div>
              <p>Messages</p>
            </div>
          </div>
        </Link>
        <Link href="/learning">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/learning"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={Learning} alt="learning" height="25" width="25" />
            </div>
            <div>
              <p>Learning</p>
            </div>
          </div>
        </Link>
        <Link href="/progress">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/progress"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={Progress} alt="progress" height="25" width="25" />
            </div>
            <div>
              <p>Progress</p>
            </div>
          </div>
        </Link>
        <Link href="/settings">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/settings"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={Settings} alt="settings" height="25" width="25" />
            </div>
            <div>
              <p>Settings</p>
            </div>
          </div>
        </Link>
        <Link href="/logout">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/logout"
                ? "bg-blue-950 text-white"
                : "text-gray-400 hover:bg-indigo-900 hover:text-red-950 hover:font-extrabold"
            }`}
          >
            <div className="mr-2">
              <Image src={Logout} alt="logout" height="25" width="25" />
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
