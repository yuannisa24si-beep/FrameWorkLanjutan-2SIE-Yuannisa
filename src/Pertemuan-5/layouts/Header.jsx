import { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import SearchModal from "../components/SearchModal";
import NotifPanel from "../components/NotifPanel";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    return (
        <>
            <div id="header-container" className="flex justify-between items-center p-4">
                <div id="search-bar" className="relative w-full max-w-lg">
                    <input id="search-input" type="text" placeholder="Search Here..." readOnly
                        onClick={() => setShowModal(true)}
                        className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none font-poppins text-sm text-gray-400 cursor-pointer" />
                    <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                </div>
                <div id="icons-container" className="flex items-center space-x-4">
                    {/* Improvisasi 1: klik bell buka notif panel */}
                    <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer"
                        onClick={() => setShowNotif(p => !p)}>
                        <FaBell />
                        <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
                    </div>
                    <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer"><FcAreaChart /></div>
                    <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer"><SlSettings /></div>
                    <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                        <span id="profile-text" className="text-sm text-gray-500 font-poppins">Hello, <b className="text-gray-700">Yuannisa</b></span>
                        <img id="profile-avatar" src="https://i.pravatar.cc/150?img=47" className="w-10 h-10 rounded-full" alt="avatar" />
                    </div>
                </div>
            </div>
            {showModal && <SearchModal onClose={() => setShowModal(false)} />}
            {showNotif && <NotifPanel onClose={() => setShowNotif(false)} />}
        </>
    );
}
