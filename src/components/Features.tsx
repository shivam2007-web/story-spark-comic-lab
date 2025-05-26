
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, BookOpen, Users, Star, Zap, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-comic-red" />,
      title: "Character Designer",
      description: "Create unique characters with our powerful design tools. Customize everything from appearance to superpowers.",
      gradient: "from-comic-red/20 to-comic-pink/20"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-comic-blue" />,
      title: "Story Builder",
      description: "Craft compelling narratives with panels, dialogue, and dynamic layouts that bring your stories to life.",
      gradient: "from-comic-blue/20 to-comic-green/20"
    },
    {
      icon: <Users className="h-8 w-8 text-comic-purple" />,
      title: "Community Hub",
      description: "Connect with fellow creators, share feedback, and collaborate on amazing comic book projects.",
      gradient: "from-comic-purple/20 to-comic-blue/20"
    },
    {
      icon: <Star className="h-8 w-8 text-comic-yellow" />,
      title: "Gallery Showcase",
      description: "Display your creations in our beautiful gallery and discover inspiring work from other artists.",
      gradient: "from-comic-yellow/20 to-comic-orange/20"
    },
    {
      icon: <Zap className="h-8 w-8 text-comic-orange" />,
      title: "Quick Templates",
      description: "Jump-start your creativity with professionally designed templates and comic layouts.",
      gradient: "from-comic-orange/20 to-comic-red/20"
    },
    {
      icon: <Heart className="h-8 w-8 text-comic-pink" />,
      title: "Fan Engagement",
      description: "Build a following for your comics with likes, comments, and sharing features.",
      gradient: "from-comic-pink/20 to-comic-purple/20"
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="comic-title text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Super Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to create, share, and discover amazing comic book stories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="hover:scale-105 transition-all duration-300 border-0 bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl border border-white/30 group cursor-pointer rounded-2xl"
          >
            <CardHeader className="text-center">
              <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} backdrop-blur-sm mx-auto mb-4 group-hover:animate-comic-pop shadow-inner border border-white/40`}>
                {feature.icon}
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
