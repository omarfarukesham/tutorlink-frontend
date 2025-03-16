'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  interface User {
    email: string;
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check auth status on mount and when storage changes
    const checkAuth = () => {
      const authUser = sessionStorage.getItem('authUser');
      setUser(authUser ? JSON.parse(authUser) : null);
    };

    // Initial check
    checkAuth();

    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    
    // Custom event listener for login/logout
    window.addEventListener('authChange', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []); 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    sessionStorage.removeItem('authUser');
    setUser(null); 
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <nav className="lg:w-[90%] mx-auto flex items-center justify-between bg-gray-800 text-white px-4 sticky top-0 z-20 border-b border-gray-700">
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
        <Link href="/" className="ml-4">
          <p className='text-xl p-2'>TutorLink 🎓</p>
        </Link>
      </div>

      <ul className="hidden lg:flex space-x-6">
        <li className="hover:text-gray-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/tutor">Tutor</Link>
        </li>
        <li className="hover:text-gray-300">
          <Link href="/student">Student</Link>
        </li>
        <li className="hover:text-gray-300">
            <Link href="/admin">Admin</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/contact">Suggestion</Link>
          </li>
        {user && (
          <li className="hover:text-gray-300">
            <Link href="/">Dashboard</Link>
          </li>
        )}
      </ul>

      <div className="hidden lg:flex space-x-4 items-center">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="border border-white text-white flex items-center gap-2 px-2 py-1 rounded-lg bg-transparent hover:bg-red-500 transition duration-200"
            >
              <FaSignOutAlt className="h-4 w-4" />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="border border-white text-white text-xs px-2 py-1 rounded-lg hover:bg-white hover:text-gray-800 transition duration-200">
              Login
            </Link>
            <Link href="/register" className="border border-white text-white px-2 py-1 text-xs rounded-lg hover:bg-white hover:text-gray-800 transition duration-200">
              Register
            </Link>
          </>
        )}
      </div>

      {menuOpen && (
        <ul className="absolute top-16 left-0 z-10 w-full bg-gray-900 text-white p-4 lg:hidden">
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/about" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700">
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
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
                <Link href="/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="py-2 px-4 hover:bg-gray-700">
                <Link href="/register" onClick={toggleMenu}>Register</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
