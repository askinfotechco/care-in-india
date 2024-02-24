import React, { useEffect, useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  TagIcon,
  BellIcon,
  XIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import companyLogo from "../assets/image/CIILogo.png";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import UserProfile from "./userProfile";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
// const navigation = [
//   { name: "Home", href: "/", current: false },
//   { name: "About", href: "/aboutUs", current: false },
//   { name: "Services", href: "/services", current: false },
//   { name: "Team", href: "/team", current: false },
//   { name: "Contact", href: "/contact", current: false },
// ];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarTop() {
  const [userEmail, setUserEmail] = useState();
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const [navigation, setNavigation] = useState();
  const [role, setRole] = useState(sessionStorage.getItem("role"));
  console.log(role);

  useEffect(() => {
    setUserEmail(sessionStorage.getItem("email"));
    if (role === "doctor") {
      // navigation = [...navigation, {name: "Appointment", href: "/contact", current: false}]
      setNavigation([
        { name: "Home", href: "/", current: false },
        { name: "About", href: "/aboutUs", current: false },
        { name: "Services", href: "/services", current: false },
        { name: "Find a Doctor", href: "/team", current: false },
        { name: "Contact", href: "/contact", current: false },
        { name: "Appointment", href: "/contact", current: false },
      ]);
    } else {
      setNavigation([
        { name: "Home", href: "/", current: false },
        { name: "About", href: "/aboutUs", current: false },
        { name: "Services", href: "/services", current: false },
        { name: "Find a Doctor", href: "/team", current: false },
        { name: "Contact", href: "/contact", current: false },
      ]);
    }
  }, [sessionStorage, role]);

  const handleLogout = () => {
    // Add logout logic here
    removeCookie("jwt", { path: "/" });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("role");
    setUserEmail(sessionStorage.getItem("email"));
    setRole("");
    console.log("Logging out...");
  };

  return (
    <Disclosure as="nav" className="bg-lightblue-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <TagIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-36 w-auto"
                    src={companyLogo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation?.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-blue-900 text-white"
                          : "text-white hover:bg-blue-900 hover:text-white",
                        "rounded-md px-3 py-2 text-md font-medium text-base: no-underline"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                {userEmail === null ? (
                  <>
                    <div className="flex-shrink-0 mr-5">
                      <button
                        type="button"
                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                      >
                        <LoginIcon
                          className="-ml-0.5 h-5 w-5"
                          aria-hidden="true"
                        />
                        <Link
                          to={"/signin"}
                          className="text-base: no-underline text-white"
                        >
                          {"Login"}
                        </Link>
                      </button>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-900 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                      >
                        <LogoutIcon
                          className="-ml-0.5 h-5 w-5"
                          aria-hidden="true"
                        />
                        <Link
                          to={"/signup"}
                          className="text-base: no-underline text-white"
                        >
                          {"Register"}
                        </Link>
                      </button>
                    </div>
                  </>
                ) : (
                  <span>
                    <UserProfile handleLogout={handleLogout} />
                  </span>
                )}

                {/* Profile dropdown */}
                {/* <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation?.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-blue-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium text-base: no-underline"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {/* <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
