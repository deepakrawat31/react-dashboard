import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
   const [isDown, setIsDown] = useState(false);

   const location = useLocation();
   return (
      <header className="flex justify-between items-center gap-4 p-4 ml-16 text-lg md:text-xl">
         <span>
            <span className={"text-lg text-emerald-400 uppercase font-bold"}>
               {location.pathname === "/"
                  ? "Dashboard"
                  : location.pathname.slice(1)}
            </span>
         </span>
         <span
            className="p-1.5 rounded-md bg-slate-800 md:hover:ring-2 md:hover:ring-slate-600 md:hover:text-emerald-400 relative cursor-pointer"
            onClick={() => setIsDown(!isDown)}
         >
            <AiOutlineUserAdd
               className={`${isDown === true ? "text-emerald-400" : ""}`}
            />
            <span
               className={`flex flex-col gap-3 bg-slate-800 p-2 rounded-md absolute top-10 -left-[4.5rem] transition-transform duration-300 z-20 ${
                  isDown === false
                     ? "scale-0 -translate-y-12 translate-x-10"
                     : "scale-100"
               } `}
            >
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
            </span>
         </span>
      </header>
   );
}
