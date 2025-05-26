
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, User, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-comic-blue/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-comic-purple/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-comic-yellow/20 rounded-full blur-xl"></div>
      </div>

      {/* Login Container */}
      <div className="relative w-full max-w-md">
        {/* Back to home link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 mb-6 text-gray-600 hover:text-comic-blue transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Story Spark</span>
        </Link>

        {/* Main login card */}
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl mb-4 shadow-lg border border-white/40">
              <BookOpen className="h-8 w-8 text-comic-red" />
            </div>
            <h1 className="comic-title text-3xl font-bold text-gray-800 mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-600">
              Continue your comic creation journey
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700 font-medium">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="pl-10 bg-white/40 backdrop-blur-sm border-white/50 focus:border-comic-blue/50 focus:ring-comic-blue/25 rounded-xl h-12"
                />
              </div>
            </div>

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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 bg-white/40 backdrop-blur-sm border-white/50 focus:border-comic-blue/50 focus:ring-comic-blue/25 rounded-xl h-12"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-comic-red to-comic-blue text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0"
            >
              Log In
            </Button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center space-y-3">
            <a href="#" className="text-comic-blue hover:text-comic-red transition-colors text-sm">
              Forgot your password?
            </a>
            <div className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-comic-blue hover:text-comic-red transition-colors font-medium">
                Sign up
              </a>
            </div>
          </div>

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
