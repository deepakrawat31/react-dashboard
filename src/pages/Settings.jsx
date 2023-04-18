import Dropdown from "../components/Dropdown";
import Toggle from "../components/Toggle";

export default function Settings() {
   return (
      <main className="ml-16 p-4 flex flex-col gap-4">
         <span className="h-3 max-w-xl w-full bg-slate-600 rounded-full block"></span>{" "}
         <div className="p-2 border-2 border-slate-700 rounded-md flex flex-col gap-4">
            <Toggle />
            <Toggle />
            <Dropdown />
            <Toggle />
            <Toggle />
            <Dropdown />
            <Toggle />
         </div>
         <span className="h-3 max-w-xl w-full bg-slate-600 rounded-full block"></span>
         <div className="p-2 border-2 border-slate-700 rounded-md flex flex-col gap-4">
            <Toggle />
            <Toggle />
            <Dropdown />
            <Dropdown />
            <Toggle />
            <Dropdown />
            <Toggle />
            <Toggle />
            <Toggle />
         </div>
      </main>
   );
}
