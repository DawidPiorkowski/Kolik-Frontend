import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logoutUser } from '../api/logout';

function Navbar() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    fetch('/api/auth/me/', { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.email) setUser(data);
      })
      .catch(() => {});
  }, []);

  return (
    <nav className="bg-sky-600 text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
            Kolik
          </span>
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-6 max-w-md">
        <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none text-gray-700 w-full bg-transparent"
          />
        </div>
      </div>

      {/* Right: Auth Links or User Info */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm">Logged in as <strong>{user.email}</strong></span>
            <button
              onClick={logoutUser}
              className="bg-white text-red-600 font-medium px-4 py-2 rounded-md hover:bg-red-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white/70 hover:text-white transition">
              Log in
            </Link>
            <Link
              to="/register"
              className="bg-white text-sky-600 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Registration
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
