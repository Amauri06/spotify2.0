import Image from "next/image";
import NavbarRoutes from "./NavbarRoutes";
import { logo } from "../assets";
import { twMerge } from "tailwind-merge";

import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../redux/features/menuSlice";
import { onClose } from "../redux/features/menuSlice";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

const routes = [
  { label: "Discover", href: "/", icon: HiOutlineHome },
  { label: "Around You", href: "/around-you", icon: HiOutlinePhotograph },
  { label: "Top Artists", href: "/top-artists", icon: HiOutlineUserGroup },
  { label: "Top Charts", href: "/top-charts", icon: HiOutlineHashtag },
];

const SidebarMobile = () => {
  const mobileMenuOpen = useSelector(selectSidebar);
  const dispath = useDispatch();

  return (
    <div
      className={twMerge(
        `
    absolute 
    top-0 
    h-screen 
    w-2/3 
    bg-gradient-to-tl 
    from-white/10 
    to-[#483D8B] 
    backdrop-blur-lg 
    z-10 
    p-6 
    md:hidden 
    smooth-transition 
        `,
        mobileMenuOpen ? "left-0 " : "-left-full"
      )}
    >
      <Image
        src={logo}
        alt="logo"
        width={70}
        height={56}
        className="object-contain mx-auto"
      />

      <div className=" flex flex-col gap-6 pt-12">
        {routes.map((item) => (
          <NavbarRoutes
            handleClick={() => dispath(onClose())}
            key={item.href}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarMobile;
