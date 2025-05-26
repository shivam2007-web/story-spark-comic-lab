
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, User, Lock, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt:', { email: formData.email, password: formData.password });
    } else {
      console.log('Signup attempt:', formData);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-comic-blue/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-comic-purple/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-comic-yellow/20 rounded-full blur-xl"></div>
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-md">
        {/* Back to home link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 mb-6 text-gray-600 hover:text-comic-blue transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Story Spark</span>
        </Link>

        {/* Main form card */}
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl mb-4 shadow-lg border border-white/40">
              <BookOpen className="h-8 w-8 text-comic-red" />
            </div>
            <h1 className="comic-title text-3xl font-bold text-gray-800 mb-2">
              {isLogin ? 'Welcome Back!' : 'Join Story Spark!'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Continue your comic creation journey' : 'Start creating amazing comics today'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username field - only for signup */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700 font-medium">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    required={!isLogin}
                    className="pl-10 bg-white/40 backdrop-blur-sm border-white/50 focus:border-comic-blue/50 focus:ring-comic-blue/25 rounded-xl h-12"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="pl-10 bg-white/40 backdrop-blur-sm border-white/50 focus:border-comic-blue/50 focus:ring-comic-blue/25 rounded-xl h-12"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  className="pl-10 bg-white/40 backdrop-blur-sm border-white/50 focus:border-comic-blue/50 focus:ring-comic-blue/25 rounded-xl h-12"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-comic-red to-comic-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
          </form>

          {/* Toggle Form */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={toggleForm}
                className="text-comic-blue hover:text-comic-red transition-colors font-medium underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

          {/* Forgot Password - only for login */}
          {isLogin && (
            <div className="mt-4 text-center">
              <a href="#" className="text-comic-blue hover:text-comic-red transition-colors text-sm">
                Forgot your password?
              </a>
            </div>
          )}

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-comic-yellow/30 rounded-full blur-sm"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-comic-pink/30 rounded-full blur-sm"></div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Join the creative community at Story Spark
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
