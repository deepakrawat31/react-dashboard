import { orders } from "../store/orders";
import { AiOutlineCreditCard } from "react-icons/ai";

export default function Orders() {
   return (
      <div className="bg-slate-900 rounded-md p-4 h-[50vh] md:h-[60vh] relative border-2 border-slate-700 overflow-y-scroll scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-thumb-rounded-lg">
         <h2 className="text-emerald-400 text-lg mb-4">Recent Orders🔥</h2>
         <ul className="flex flex-col gap-2">
            {orders.map((order, id) => (
               <li
                  className="p-2 even:bg-slate-600 odd:bg-slate-800 rounded flex justify-between items-center"
                  key={id}
               >
                  <div className="flex items-center gap-4">
                     <span className="text-4xl text-emerald-400">
                        <AiOutlineCreditCard className="p-1.5 bg-slate-700 rounded" />
                     </span>
                     <span className="flex flex-col">
                        <span className="font-semibold text-lg text-emerald-400">
                           ${order.total}
                        </span>
                        <span className="text-sm font-semibold text-slate-300">
                           {order.name.first} {order.name.last}
                        </span>
                     </span>
                  </div>
                  <div
                     className={`font-semibold ${
                        order.status === "Paid"
                           ? "text-emerald-400"
                           : order.status === "On Hold"
                           ? "text-rose-400"
                           : "text-amber-400"
                     }`}
                  >
                     {order.status}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}
