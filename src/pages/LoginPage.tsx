import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Image and Stats */}
      <div className="hidden lg:flex lg:w-1/2 bg-white flex-col justify-center items-center p-12 relative">
        <div className="absolute top-8 left-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Sworker</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="absolute top-32 left-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-blue-600 rounded"></div>
              <div className="w-2 h-6 bg-blue-400 rounded"></div>
              <div className="w-2 h-10 bg-blue-600 rounded"></div>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">100K+</div>
          <div className="text-gray-600">People got hired</div>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Professional man in suit" 
            className="max-w-md h-auto object-cover rounded-lg"
          />
        </div>

        {/* Testimonial */}
        <div className="absolute bottom-12 right-12 max-w-sm">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Adam Sandler" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl text-blue-600 mb-2">"</div>
                  <p className="text-gray-700 text-sm mb-3">
                    "Great platform for the job seeker that searching for new career heights."
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Adam Sandler</div>
                    <div className="text-gray-500 text-xs">Lead Engineer at Canva</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-gray-900">JobBoost</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Google Login */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-gray-300 hover:bg-gray-50"
              onClick={handleGoogleLogin}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Login with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or login with email</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-12"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </Button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};