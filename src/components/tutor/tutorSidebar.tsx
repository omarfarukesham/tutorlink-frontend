import Link from "next/link";
import { FaUser, FaCog, FaHome, FaAddressBook } from "react-icons/fa";
import { FaMessage, FaMoneyBills } from "react-icons/fa6";

const TutorSidebar = () => {
  return (
    <div className="lg:w-56 xl:w-64 min-h-[calc(100vh-48px)] bg-white shadow-lg p-4">
      <ul className="space-y-4">
        <li>
          <Link
            href="/tutor"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tutor/profile"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaUser className="h-5 w-5" />
            <span>Tutor Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tutor/blog"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaAddressBook className="h-5 w-5" />
            <span>Add Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tutor/client-msg"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaMessage className="h-5 w-5" />
            <span>Client Msg</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tutor/earning"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaMoneyBills className="h-5 w-5" />
            <span>Total Earn</span>
          </Link>
        </li>
        <li>
          <Link
            href="/tutor/settings"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaCog className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TutorSidebar;
