import { orders } from "../store/orders";

export default function RecentOrders() {
   return (
      <main className="ml-16 p-4">
         <section className="p-2 border-2 border-slate-700 rounded-md flex flex-col gap-2">
            {orders.map((order) => (
               <div
                  className="p-2 even:bg-slate-900 odd:bg-slate-800 rounded tracking-wide grid grid-cols-3 items-center gap-4"
                  key={order.id}
               >
                  <div className="flex flex-col gap-1">
                     <span className="font-semibold text-lg text-emerald-400">
                        {order.name.first} {order.name.last}
                     </span>
                     <span className="text-slate-400 font-semibold">
                        {order.date}
                     </span>
                  </div>
                  <div className="flex justify-center">
                     <span
                        className={`font-semibold ${
                           order.status === "Paid"
                              ? "text-emerald-400"
                              : order.status === "On Hold"
                              ? "text-rose-400"
                              : "text-amber-400"
                        }`}
                     >
                        {order.status}
                     </span>
                  </div>
                  <div className="flex flex-col gap-1 justify-between items-end h-full">
                     <span className="font-semibold text-lg text-emerald-400">
                        ${order.total}
                     </span>
                     <span className="text-slate-400 font-semibold">
                        {order.method}
                     </span>
                  </div>
               </div>
            ))}
         </section>
      </main>
   );
}
