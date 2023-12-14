"use client";

import Image from "next/image";
import { logo } from "../assets";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

import NavbarRoutes from "./NavbarRoutes";

const routes = [
  { label: "Discover", href: "/", icon: HiOutlineHome },
  { label: "Around You", href: "/around-you", icon: HiOutlinePhotograph },
  { label: "Top Artists", href: "/top-artists", icon: HiOutlineUserGroup },
  { label: "Top Charts", href: "/top-charts", icon: HiOutlineHashtag },
];

const Sidebar = () => {
  return (
    <>
      {/* Desktok Sidebar */}
      <div className=" md:flex hidden flex-col w-[220px] py-10 px-4 bg-[#191624] ">
        <Image
          src={logo}
          alt="logo"
          width={70}
          height={56}
          className="object-contain mx-auto"
        />

        <div className="flex flex-col gap-y-8 mt-14">
          {routes.map((item) => (
            <NavbarRoutes
              key={item.href}
              label={item.label}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
