import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Customer from "./pages/Customer";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import TargetHarian from "./components/TargetHarian";
import RatingRestoran from "./components/RatingRestoran";

export default function App() {
    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <div id="layout-wrapper" className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex-1 p-4">
                    <Header />
                    <Routes>
                        <Route path="/" element={<><Dashboard /><TargetHarian /><RatingRestoran /></>} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/customers" element={<Customer />} />
                        <Route path="/error-400" element={<Error400 />} />
                        <Route path="/error-401" element={<Error401 />} />
                        <Route path="/error-403" element={<Error403 />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
