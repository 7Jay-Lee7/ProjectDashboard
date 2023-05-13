import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  Checked,
  ChevronDown,
  CreditCard,
  Logout,
  Me,
  MenuBar,
  Pencil,
  Settings,
} from "@/assets";
import { useRouter } from "next/router"; // add the router import

export default function TopBar({ showNav, setShowNav }) {
  const router = useRouter(); // add the router initialization


  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Image
          src={MenuBar}
          alt="menubar"
          className="h-8 w-8 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer bell-icon">
            <Image src={Bell} alt="notifications" className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-gray-800 shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-red-950 font-extrabold">Notifications</p>
                  <a className="text-sm text-red-950 font-extrabold" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 h-8 w-8 flex items-center justify-center">
                      <Image src={Checked} alt="checked" className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="font-extrabold text-red-950">
                        Notification Title
                      </p>
                      <p className="text-sm text-white truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 h-8 w-8 flex items-center justify-center">
                      <Image src={Checked} alt="checked" className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="font-extrabold text-red-950">
                        Notification Title
                      </p>
                      <p className="text-sm text-white truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 h-8 w-8 flex items-center justify-center">
                      <Image src={Checked} alt="checked" className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="font-extrabold text-red-950">
                        Notification Title
                      </p>
                      <p className="text-sm text-white truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 h-8 w-8 flex items-center justify-center">
                      <Image src={Checked} alt="checked" className="h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <p className="font-extrabold text-red-950">
                        Notification Title
                      </p>
                      <p className="text-sm text-white truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <Image
                src={Me}
                className="rounded-full h-8 w-8 md:mr-4 border-2 border-white shadow-sm"
                alt="profile picture"
              />
              <span className="hidden md:block font-extrabold text-red-950">
                Jay Lee
              </span>
              <Image
                src={ChevronDown}
                alt="chevrondown"
                className="ml-2 h-5 w-5"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-gray-800 rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="/account"
                    className="flex hover:bg-indigo-900 hover:text-white text-red-950 font-extrabold rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Image src={Pencil} alt="edit" className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/billing"
                    className="flex hover:bg-indigo-900 hover:text-white text-red-950 font-extrabold rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Image
                      src={CreditCard}
                      alt="creditcard"
                      className="h-4 w-4 mr-2"
                    />
                    Billing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/settings"
                    className="flex hover:bg-indigo-900 hover:text-white text-red-950 font-extrabold rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Image
                      src={Settings}
                      alt="settings"
                      className="h-4 w-4 mr-2"
                    />
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                <Link
                    href="/logout"
                    className="flex hover:bg-indigo-900 hover:text-white text-red-950 font-extrabold rounded p-2 text-sm group transition-colors items-center"
                  >
                    <Image
                      src={Logout}
                      alt="logout"
                      className="h-4 w-4 mr-2"
                    />
                    Logout
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
