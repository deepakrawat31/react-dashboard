import Chart from "./Chart";
import TopCards from "./TopCards";
import Orders from "./Orders";

export default function MainSection() {
   return (
      <>
         <TopCards />
         <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 ml-16 p-4">
            <Chart />
            <Orders />
         </section>
      </>
   );
}
