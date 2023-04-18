import { useState } from "react";

export default function Toggle() {
   const [isLeft, setIsLeft] = useState(true);

   return (
      <div className="flex items-center justify-between gap-4">
         <span className="h-3 max-w-4xl w-full bg-slate-600 rounded-full block"></span>
         <span
            className={`h-6 w-10 rounded-full block relative cursor-pointer ${
               isLeft === true ? "bg-slate-800" : "bg-slate-600"
            }`}
            onClick={() => setIsLeft(!isLeft)}
         >
            <span
               className={`h-4 w-4 rounded-full block absolute top-1 transition-all duration-300  bg-emerald-400 ${
                  isLeft === true ? "translate-x-1" : "translate-x-5"
               }`}
            ></span>
         </span>
      </div>
   );
}
