
import { BookOpen, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-xl border-t border-white/20 text-gray-800 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-white/30 backdrop-blur-sm shadow-inner">
                <BookOpen className="h-6 w-6 text-comic-red" />
              </div>
              <span className="comic-title text-2xl font-bold">
                Story Spark
              </span>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Empowering comic creators worldwide to bring their stories to life. 
              Join our community and start your creative journey today!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-comic-red transition-colors">Character Designer</a></li>
              <li><a href="#" className="hover:text-comic-red transition-colors">Story Builder</a></li>
              <li><a href="#" className="hover:text-comic-red transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-comic-red transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-comic-red transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-comic-red transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-comic-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-comic-red transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-comic-red fill-current" />
            <span>for comic creators everywhere</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
