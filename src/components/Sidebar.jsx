import { useState } from "react";
import {
   AiOutlineUser,
   AiOutlineLock,
   AiOutlineControl,
   AiOutlineHome,
   AiOutlineShop,
   AiOutlineDatabase,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <aside className="flex flex-col justify-between items-center gap-8 p-4 text-lg md:text-xl bg-slate-900 fixed left-0 inset-y-0">
         <div className="flex flex-col justify-between items-center gap-8">
            <span className="p-1.5 rounded-md bg-slate-900 ring-2 ring-slate-700 text-emerald-400">
               <Link to="/">
                  <AiOutlineHome />
               </Link>
            </span>
            <span className="h-0.5 w-full bg-slate-700 rounded"></span>
            <span className="p-1.5 rounded-md bg-slate-800 md:hover:text-emerald-400">
               <Link to="/orders">
                  <AiOutlineShop />
               </Link>
            </span>
            <span className="p-1.5 rounded-md bg-slate-800 md:hover:text-emerald-400">
               <Link to="/locker">
                  <AiOutlineLock />
               </Link>
            </span>
            <span className="p-1.5 rounded-md bg-slate-800 md:hover:text-emerald-400">
               <Link to="/database">
                  <AiOutlineDatabase />
               </Link>
            </span>
            <span className="p-1.5 rounded-md bg-slate-800 md:hover:text-emerald-400">
               <Link to="/settings">
                  <AiOutlineControl />
               </Link>
            </span>
         </div>
         <div className="flex">
            <span
               className="p-1.5 rounded-md bg-slate-800 md:hover:ring-2 md:hover:ring-slate-700 md:hover:text-emerald-400 relative cursor-pointer "
               onClick={() => setIsOpen(!isOpen)}
            >
               <AiOutlineUser
                  className={`${isOpen === true ? "text-emerald-400" : ""}`}
               />
               <span
                  className={`flex flex-col gap-3 bg-slate-800 p-2 rounded-md absolute -top-[68px] left-14 transition-transform duration-300 z-20 ${
                     isOpen === false
                        ? "scale-0 -translate-x-16 translate-y-8"
                        : "scale-100"
                  } `}
               >
                  <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
                  <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
                  <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
                  <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               </span>
            </span>
         </div>
      </aside>
   );
}
