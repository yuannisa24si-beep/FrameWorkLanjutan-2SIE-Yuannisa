import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaFileAlt, FaUser, FaChartBar, FaStar, FaHamburger, FaUtensils, FaUsers, FaPlus, FaExclamationTriangle } from "react-icons/fa";

const menus = [
    { icon: <MdDashboard className="mr-4 text-xl" />, label: "Dashboard", to: "/" },
    { icon: <FaClipboardList className="mr-4 text-xl" />, label: "Order List", to: "/orders" },
    { icon: <FaFileAlt className="mr-4 text-xl" />, label: "Order Detail", to: "/orders" },
    { icon: <FaUser className="mr-4 text-xl" />, label: "Customer", to: "/customers" },
    { icon: <FaChartBar className="mr-4 text-xl" />, label: "Analytics", to: "/" },
    { icon: <FaStar className="mr-4 text-xl" />, label: "Reviews", to: "/" },
    { icon: <FaHamburger className="mr-4 text-xl" />, label: "Foods", to: "/" },
    { icon: <FaUtensils className="mr-4 text-xl" />, label: "Food Detail", to: "/" },
    { icon: <FaUsers className="mr-4 text-xl" />, label: "Customer Detail", to: "/customers" },
    { icon: <FaExclamationTriangle className="mr-4 text-xl" />, label: "Error 400", to: "/error-400" },
    { icon: <FaExclamationTriangle className="mr-4 text-xl" />, label: "Error 401", to: "/error-401" },
    { icon: <FaExclamationTriangle className="mr-4 text-xl" />, label: "Error 403", to: "/error-403" },
];

const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 ${
        isActive
            ? "text-green-600 bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-green-600 hover:bg-green-200 hover:font-extrabold"
    }`;

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">

            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900 leading-none">
                    Sedap <b id="logo-dot" className="text-green-500">.</b>
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
                            <NavLink
                                to={m.to}
                                id={`menu-${i + 1}`}
                                className={menuClass}
                                end={m.to === "/"}
                            >
                                {m.icon}
                                <span>{m.label}</span>
                            </NavLink>
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
                    <img id="footer-avatar" src="https://i.pravatar.cc/150?img=47" className="w-20 rounded-full" alt="avatar" />
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
