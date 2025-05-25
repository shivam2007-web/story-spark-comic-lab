
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, BookOpen, Users, Star, Zap, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-comic-red" />,
      title: "Character Designer",
      description: "Create unique characters with our powerful design tools. Customize everything from appearance to superpowers.",
      gradient: "from-comic-red to-comic-pink"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-comic-blue" />,
      title: "Story Builder",
      description: "Craft compelling narratives with panels, dialogue, and dynamic layouts that bring your stories to life.",
      gradient: "from-comic-blue to-comic-green"
    },
    {
      icon: <Users className="h-8 w-8 text-comic-purple" />,
      title: "Community Hub",
      description: "Connect with fellow creators, share feedback, and collaborate on amazing comic book projects.",
      gradient: "from-comic-purple to-comic-blue"
    },
    {
      icon: <Star className="h-8 w-8 text-comic-yellow" />,
      title: "Gallery Showcase",
      description: "Display your creations in our beautiful gallery and discover inspiring work from other artists.",
      gradient: "from-comic-yellow to-comic-orange"
    },
    {
      icon: <Zap className="h-8 w-8 text-comic-orange" />,
      title: "Quick Templates",
      description: "Jump-start your creativity with professionally designed templates and comic layouts.",
      gradient: "from-comic-orange to-comic-red"
    },
    {
      icon: <Heart className="h-8 w-8 text-comic-pink" />,
      title: "Fan Engagement",
      description: "Build a following for your comics with likes, comments, and sharing features.",
      gradient: "from-comic-pink to-comic-purple"
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="comic-title text-4xl md:text-6xl font-bold mb-4 text-gray-900">
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
            className="hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card-gradient group cursor-pointer"
          >
            <CardHeader className="text-center">
              <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${feature.gradient} mx-auto mb-4 group-hover:animate-comic-pop`}>
                {feature.icon}
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
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
