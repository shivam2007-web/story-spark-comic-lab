
import { Button } from "@/components/ui/button";
import { Zap, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block animate-bounce-slow mb-6">
          <div className="bg-comic-yellow rounded-full p-4 inline-block">
            <Zap className="h-12 w-12 text-comic-red" />
          </div>
        </div>
        
        <h1 className="comic-title text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-comic-red via-comic-blue to-comic-purple bg-clip-text text-transparent">
          Create Epic Comics
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Unleash your creativity! Design characters, craft stories, and share your comic adventures with a community of fellow creators.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-comic-red hover:bg-comic-red/90 text-white px-8 py-4 text-lg animate-comic-pop hover:animate-comic-pop"
          >
            Start Creating
            <Star className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-comic-blue text-comic-blue hover:bg-comic-blue hover:text-white px-8 py-4 text-lg"
          >
            Explore Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="speech-bubble animate-float">
            <h3 className="font-bold text-lg mb-2 text-comic-red">Create Stories</h3>
            <p className="text-gray-600">Build engaging narratives with our intuitive story builder</p>
          </div>
          <div className="speech-bubble animate-float" style={{ animationDelay: '2s' }}>
            <h3 className="font-bold text-lg mb-2 text-comic-blue">Design Characters</h3>
            <p className="text-gray-600">Bring your heroes and villains to life with custom designs</p>
          </div>
          <div className="speech-bubble animate-float" style={{ animationDelay: '4s' }}>
            <h3 className="font-bold text-lg mb-2 text-comic-purple">Share & Connect</h3>
            <p className="text-gray-600">Join a vibrant community of comic creators and fans</p>
          </div>
        </div>
      </div>
    </section>
  );
};
