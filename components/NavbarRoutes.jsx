"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const NavbarRoutes = ({ handleClick, href, icon: Icon, label }) => {
  const pathname = usePathname();

  const isActive =
    //si estamos en la raiz aplicara los estilos definidos
    (pathname === "/" && href === "/") ||
    //o si estamos en otra ruta especifica
    pathname === href ||
    //si comienza con la ruta
    pathname?.startsWith(`${href}/`);




  return (
    <Link
      href={href}
      className={twMerge(
        `
          flex 
          flex-row 
          justify-start 
          items-center 
          text-sm
          font-medium
         text-gray-400 
         hover:text-cyan-400
         
        
        `,
        isActive && "text-cyan-400"
      )}
      //comprobamos si existe un click en el identificador ei existe ejecutamos la funcion.

      onClick={() => handleClick && handleClick()}
    >
      <Icon className=" w-6 h-6 mr-2" />
      {label}
    </Link>
  );
};

export default NavbarRoutes;
