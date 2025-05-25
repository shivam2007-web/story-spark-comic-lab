
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-comic-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-comic-red" />
            <span className="comic-title text-2xl font-bold text-gray-900">
              Story Spark
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-comic-red transition-colors">
              Features
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-comic-red transition-colors">
              Gallery
            </a>
            <a href="#community" className="text-gray-700 hover:text-comic-red transition-colors">
              Community
            </a>
            <Button className="bg-comic-red hover:bg-comic-red/90 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#features" className="block py-2 text-gray-700 hover:text-comic-red">
              Features
            </a>
            <a href="#gallery" className="block py-2 text-gray-700 hover:text-comic-red">
              Gallery
            </a>
            <a href="#community" className="block py-2 text-gray-700 hover:text-comic-red">
              Community
            </a>
            <Button className="w-full mt-4 bg-comic-red hover:bg-comic-red/90 text-white">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
