

'use client';

import { useEffect, useState } from "react";
import SidebarMobile from "../MobileSidebar";


export const SidebarProvider = ( ) =>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)

    },[])
  

  if(!isMounted){
     return null;
  }

  return (
   
    <SidebarMobile/>
  )
}
