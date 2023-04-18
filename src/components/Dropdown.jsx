import { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";

export default function Dropdown() {
   const [isDown, setIsDown] = useState(false);
   return (
      <div className="flex items-center justify-between gap-4">
         <span className="h-3 max-w-4xl w-full bg-slate-600 rounded-full block"></span>
         <span
            className="p-2 flex gap-2 items-center justify-between bg-slate-800 rounded-md relative cursor-pointer"
            onClick={() => setIsDown(!isDown)}
         >
            <span className="h-3 w-16 block bg-slate-600 rounded-full"></span>
            <span>
               <AiOutlineMore className="" />
            </span>
            <span
               className={`flex flex-col gap-3 bg-slate-800 p-2 rounded-md absolute top-10 left-0 transition-transform duration-300 z-20 ${
                  isDown === false ? "scale-0 -translate-y-12" : "scale-100"
               } `}
            >
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
               <span className="h-3 w-[88px] block bg-slate-600 rounded-full"></span>
            </span>
         </span>
      </div>
   );
}
