const cardDetails = [
   {
      id: "1",
      title: "Today's Revenue",
      amount: "$30,059",
      percent: "32%",
   },
   {
      id: "2",
      title: "Yearly Revenue",
      amount: "$259,841",
      percent: "11%",
   },
   {
      id: "3",
      title: "Customers",
      amount: "24,238",
      percent: "-2%",
   },
];

export default function TopCards() {
   return (
      <section className="grid md:grid-cols-6 gap-4 p-4 ml-16">
         {cardDetails.map((card) => (
            <div
               key={card.id}
               className="col-span-2 p-2 flex items-center justify-between gap-2 bg-slate-900 rounded-md tracking-wider"
            >
               <div className="flex flex-col gap-1">
                  <span className="text-emerald-400 text-xl font-semibold">
                     {card.amount}
                  </span>
                  <span className="text-slate-300 text-sm font-bold">
                     {card.title}
                  </span>
               </div>
               <div
                  className={`bg-slate-700 p-4 rounded text-xl font-semibold ${
                     parseInt(card.percent) < 0
                        ? "text-rose-400"
                        : "text-emerald-400"
                  }`}
               >
                  <span>{card.percent}</span>
               </div>
            </div>
         ))}
      </section>
   );
}
