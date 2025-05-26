
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/20 border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-white/30 backdrop-blur-sm shadow-inner">
              <BookOpen className="h-6 w-6 text-comic-red" />
            </div>
            <span className="comic-title text-2xl font-bold text-gray-800">
              Story Spark
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-comic-red transition-colors font-medium">
              Features
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-comic-red transition-colors font-medium">
              Gallery
            </a>
            <a href="#community" className="text-gray-700 hover:text-comic-red transition-colors font-medium">
              Community
            </a>
            <Button className="bg-white/30 backdrop-blur-sm text-gray-800 border border-white/40 hover:bg-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white/20 backdrop-blur-xl rounded-lg mt-2 border border-white/30 shadow-lg">
            <a href="#features" className="block py-2 px-4 text-gray-700 hover:text-comic-red hover:bg-white/20 rounded-lg transition-colors">
              Features
            </a>
            <a href="#gallery" className="block py-2 px-4 text-gray-700 hover:text-comic-red hover:bg-white/20 rounded-lg transition-colors">
              Gallery
            </a>
            <a href="#community" className="block py-2 px-4 text-gray-700 hover:text-comic-red hover:bg-white/20 rounded-lg transition-colors">
              Community
            </a>
            <Button className="w-full mt-4 mx-4 bg-white/30 backdrop-blur-sm text-gray-800 border border-white/40 hover:bg-white/40 shadow-lg">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
