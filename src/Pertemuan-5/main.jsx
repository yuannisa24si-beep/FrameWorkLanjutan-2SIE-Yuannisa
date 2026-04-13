import { useState } from "react";
import { createRoot } from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import TargetHarian from "./components/TargetHarian";
import RatingRestoran from "./components/RatingRestoran";
import "./assets/tailwind.css";

function App() {
    const [activePage, setActivePage] = useState("Dashboard");

    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <div id="layout-wrapper" className="flex flex-row flex-1">
                <Sidebar active={activePage} onSelect={setActivePage} />
                <div id="main-content" className="flex-1 p-4">
                    <Header />
                    {/* Dari modul */}
                    <Dashboard />
                    {/* Improvisasi 2: Target Harian */}
                    <TargetHarian />
                    {/* Improvisasi 3: Rating Restoran */}
                    <RatingRestoran />
                </div>
            </div>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
