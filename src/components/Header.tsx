import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Search, Bell, User } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white px-6 py-4 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sworker</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/find-jobs"
            className={`text-sm font-medium transition-colors ${location.pathname === '/find-jobs'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Find Jobs
          </Link>
          <Link
            to="/post-job"
            className={`text-sm font-medium transition-colors ${location.pathname === '/post-job'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Post Job
          </Link>
          <Link
            to="/company"
            className={`text-sm font-medium transition-colors ${location.pathname === '/company'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Company
          </Link>
          <Link
            to="/job-details"
            className={`text-sm font-medium transition-colors ${location.pathname === '/job-details'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Job Detail
          </Link>
          <Link
            to="/messages"
            className={`text-sm font-medium transition-colors ${location.pathname === '/messages'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Messages
          </Link>
          <Link
            to="/dashboard"
            className={`text-sm font-medium transition-colors ${location.pathname === '/dashboard'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Dashboard
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Search icon for mobile */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to={'/login'}>
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Button
              size="sm"
              onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-4 pb-4 border-t pt-4">
        <nav className="flex flex-col space-y-4">
          <Link
            to="/find-jobs"
            className={`text-sm font-medium transition-colors ${location.pathname === '/find-jobs'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Find Jobs
          </Link>
          <Link
            to="/post-job"
            className={`text-sm font-medium transition-colors ${location.pathname === '/post-job'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Post Job
          </Link>
          <Link
            to="/dashboard"
            className={`text-sm font-medium transition-colors ${location.pathname === '/dashboard'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Dashboard
          </Link>
          <Link
            to="/job-details"
            className={`text-sm font-medium transition-colors ${location.pathname === '/job-details'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Job Details
          </Link>
          <Link
            to="/messages"
            className={`text-sm font-medium transition-colors ${location.pathname === '/messages'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Messages
          </Link>
          <div className="flex flex-col space-y-2 pt-4 border-t">
            <Button variant="ghost" size="sm" className="justify-start">
              Login
            </Button>
            <Button
              size="sm"
              onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-700 justify-start"
            >
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};