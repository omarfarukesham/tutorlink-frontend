import { BookImageIcon } from "lucide-react";
import Link from "next/link";
import { FaUser, FaCog, FaHome } from "react-icons/fa";
import { FaMessage, FaMoneyBills } from "react-icons/fa6";

const AdminSidebar = () => {
  return (
    <div className="w-16 md:w-56 xl:w-64 min-h-[calc(100vh-48px)] bg-white shadow-lg p-4">
      <ul className="space-y-4">
        <li>
          <Link
            href="/admin"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/users"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaUser className="h-5 w-5" />
            <span className="hidden md:inline">All User</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/client-msg"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaMessage className="h-5 w-5" />
            <span className="hidden md:inline">Client Msg</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/booking"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BookImageIcon className="h-5 w-5" />
            <span className="hidden md:inline">Booking List</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/sales"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaMoneyBills className="h-5 w-5" />
            <span className="hidden md:inline">Total Sales</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/settings"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaCog className="h-5 w-5" />
            <span className="hidden md:inline">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;