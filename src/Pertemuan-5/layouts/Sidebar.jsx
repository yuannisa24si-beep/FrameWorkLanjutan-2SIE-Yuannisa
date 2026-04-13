import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaFileAlt, FaUser, FaChartBar, FaStar, FaHamburger, FaUtensils, FaUsers, FaPlus } from "react-icons/fa";

const menus = [
    { icon: <MdDashboard className="mr-4 text-xl" />, label: "Dashboard" },
    { icon: <FaClipboardList className="mr-4 text-xl" />, label: "Order List" },
    { icon: <FaFileAlt className="mr-4 text-xl" />, label: "Order Detail" },
    { icon: <FaUser className="mr-4 text-xl" />, label: "Customer" },
    { icon: <FaChartBar className="mr-4 text-xl" />, label: "Analytics" },
    { icon: <FaStar className="mr-4 text-xl" />, label: "Reviews" },
    { icon: <FaHamburger className="mr-4 text-xl" />, label: "Foods" },
    { icon: <FaUtensils className="mr-4 text-xl" />, label: "Food Detail" },
    { icon: <FaUsers className="mr-4 text-xl" />, label: "Customer Detail" },
];

export default function Sidebar({ active, onSelect }) {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">

            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900 leading-none">
                    Sedap <b id="logo-dot" className="text-color-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">
                    Modern Admin Dashboard
                </span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    {menus.map((m, i) => (
                        <li key={i}>
                            <div
                                id={`menu-${i + 1}`}
                                onClick={() => onSelect(m.label)}
                                className={`flex items-center cursor-pointer rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:text-green-600 hover:font-extrabold transition-all ${
                                    active === m.label
                                        ? "bg-green-200 text-green-600 font-extrabold"
                                        : ""
                                }`}
                            >
                                {m.icon}
                                <span>{m.label}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-green-500 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">
                                <FaPlus className="mr-1 text-xs" /> Add Menus
                            </span>
                        </div>
                    </div>
                    <img
                        id="footer-avatar"
                        src="https://i.pravatar.cc/150?img=47"
                        className="w-20 rounded-full"
                        alt="avatar"
                    />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400 block text-center text-sm">
                    Sedap Restaurant Admin Dashboard
                </span>
                <p id="footer-copyright" className="font-light text-gray-400 text-center text-xs mt-1">
                    &copy; 2025 All Right Reserved
                </p>
            </div>

        </div>
    );
}
