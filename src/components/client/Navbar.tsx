'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';
import { RootState } from '@/store/store';
import { logout } from '@/store/authSlice';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="lg:w-[90%] sm:w-full lg:mx-auto flex items-center justify-between bg-gray-800 text-white sticky top-0 z-20 border-b px-4 border-gray-700">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <Link href="/" className="">
          <p className="text-xl p-2">TutorLink 🎓</p>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6">
        <li className="hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/tutor-list">Tutor</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/community">Communities</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/tutor-apply">Become Tutor</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/contact">Query</Link>
        </li>
        {user?.role === 'tutor' && (
          <li className="hover:text-gray-300">
            <Link href="/tutor">Dashboard</Link>
          </li>
        )}
        {user?.role === 'student' && (
          <li className="hover:text-gray-300">
            <Link href="/student">Dashboard</Link>
          </li>
        )}
        {user?.role === 'admin' && (
          <li className="hover:text-gray-300">
            <Link href="/admin">Dashboard</Link>
          </li>
        )}
      </ul>

      {/* Desktop Auth Section */}
      <div className="hidden lg:flex space-x-4 items-center">
        {user ? (
          <button
            onClick={handleLogout}
            className="border border-white text-white flex items-center gap-2 px-2 py-1 rounded-lg bg-transparent hover:bg-red-500 transition duration-200"
          >
            <FaSignOutAlt className="h-4 w-4" />
            Logout
          </button>
        ) : (
          <>
            <Link href="/client/login" className="border border-white text-white text-xs px-2 py-1 rounded-lg hover:bg-white hover:text-gray-800 transition duration-200">
              Login
            </Link>
            <Link href="/client/register" className="border border-white text-white px-2 py-1 text-xs rounded-lg hover:bg-white hover:text-gray-800 transition duration-200">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-11 left-0 z-10 w-full bg-gray-900 text-white p-4 lg:hidden">
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/tutor-list" onClick={toggleMenu}>Tutors</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/community" onClick={toggleMenu}>Communities</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/tutor-apply" onClick={toggleMenu}>Become Tutor</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/contact" onClick={toggleMenu}>Query</Link>
          </li>
          {user ? (
            <>
              <li className="py-2 px-4 hover:bg-gray-700">
                <Link href="/dashboard" onClick={toggleMenu}>Dashboard</Link>
              </li>
              <li className="py-2 px-4 hover:bg-red-500">
                <button onClick={() => { handleLogout(); toggleMenu(); }}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="py-2 px-4 hover:bg-gray-700">
                <Link href="/client/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-700">
                <Link href="/client/register" onClick={toggleMenu}>Register</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
