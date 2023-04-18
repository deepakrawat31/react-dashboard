import { Route, Routes } from "react-router-dom";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecentOrders from "./pages/RecentOrders";
import Settings from "./pages/Settings";
import Locker from "./pages/Locker";
import Database from "./pages/Database";

function App() {
   return (
      <div className="">
         <Header />
         <Sidebar />
         <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/orders" element={<RecentOrders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/locker" element={<Locker />} />
            <Route path="/database" element={<Database />} />
         </Routes>
      </div>
   );
}

export default App;
