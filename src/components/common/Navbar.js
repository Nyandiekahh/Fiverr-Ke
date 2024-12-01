import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import NotificationDropdown from '../notifications/NotificationDropdown';

function Navbar() {
  const { user, logout } = useAuth();
  const { notifications } = useNotifications();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef();

  const unreadCount = notifications.filter(n => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-600">
              Fiverr Ke
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/gigs" className="text-gray-700 hover:text-green-600">
              Find Work
            </Link>
            {user ? (
              <>
                <Link to="/messages" className="text-gray-700 hover:text-green-600">
                  Messages
                </Link>
                <Link to="/orders" className="text-gray-700 hover:text-green-600">
                  Orders
                </Link>
                {/* Notifications Bell */}
                <div className="relative" ref={notificationRef}>
                  <button
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className="text-gray-700 hover:text-green-600 relative p-2"
                  >
                    🔔
                    {unreadCount > 0 && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                  <NotificationDropdown
                    isOpen={isNotificationsOpen}
                    onClose={() => setIsNotificationsOpen(false)}
                  />
                </div>
                <Link to="/profile" className="text-gray-700 hover:text-green-600">
                  {user.name}
                </Link>
                <Link to="/settings" className="text-gray-700 hover:text-green-600">
  Settings
</Link>
                <button 
                  onClick={logout}
                  className="text-gray-700 hover:text-green-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-green-600">
                  Login
                </Link>
                <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded-md">
                  Join
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;