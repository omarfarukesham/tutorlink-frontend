import { ListOrderedIcon } from "lucide-react";
import Link from "next/link";
import { FaHome, FaDiscourse } from "react-icons/fa";

import { RiFeedbackFill } from "react-icons/ri";

const StudentSidebar = () => {
  return (
    <div className="w-16 md:w-56 xl:w-64 min-h-[calc(100vh-48px)] bg-white shadow-lg p-4">
      <ul className="space-y-4">
        <li>
          <Link
            href="/student"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/student/courses"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaDiscourse className="h-5 w-5" />
            <span className="hidden md:inline">My Courses</span>
          </Link>
        </li>
        <li>
          <Link
            href="/student/order"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <ListOrderedIcon className="h-5 w-5" />
            <span className="hidden md:inline">Order History</span>
          </Link>
        </li>
        <li>
          <Link
            href="/student/review"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <RiFeedbackFill className="h-5 w-5" />
            <span className="hidden md:inline">Feedback</span>
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default StudentSidebar;