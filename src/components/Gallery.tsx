
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Star } from "lucide-react";

export const Gallery = () => {
  const comics = [
    {
      title: "Cyber Hero",
      author: "Alex Storm",
      likes: 324,
      views: 1250,
      rating: 4.8,
      genre: "Sci-Fi",
      color: "bg-gradient-to-br from-blue-500/80 to-purple-600/80"
    },
    {
      title: "Magic Academy",
      author: "Luna Mystic",
      likes: 567,
      views: 2100,
      rating: 4.9,
      genre: "Fantasy",
      color: "bg-gradient-to-br from-purple-500/80 to-pink-600/80"
    },
    {
      title: "Street Fighter",
      author: "Max Thunder",
      likes: 234,
      views: 890,
      rating: 4.5,
      genre: "Action",
      color: "bg-gradient-to-br from-red-500/80 to-orange-600/80"
    },
    {
      title: "Space Odyssey",
      author: "Zara Cosmos",
      likes: 445,
      views: 1680,
      rating: 4.7,
      genre: "Adventure",
      color: "bg-gradient-to-br from-green-500/80 to-blue-600/80"
    },
    {
      title: "Monster Hunter",
      author: "Jake Wild",
      likes: 189,
      views: 756,
      rating: 4.3,
      genre: "Horror",
      color: "bg-gradient-to-br from-gray-600/80 to-black/80"
    },
    {
      title: "Time Traveler",
      author: "Emma Future",
      likes: 678,
      views: 2450,
      rating: 4.9,
      genre: "Mystery",
      color: "bg-gradient-to-br from-yellow-500/80 to-red-600/80"
    }
  ];

  return (
    <section id="gallery" className="container mx-auto px-4 py-20 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg">
      <div className="text-center mb-16">
        <h2 className="comic-title text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Featured Comics
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing stories created by our talented community of comic artists
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {comics.map((comic, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:scale-105 transition-all duration-300 bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl group cursor-pointer rounded-2xl border border-white/30"
          >
            <div className={`h-48 ${comic.color} backdrop-blur-sm relative flex items-center justify-center`}>
              <h3 className="text-white text-2xl font-bold comic-title text-center px-4 drop-shadow-lg">
                {comic.title}
              </h3>
              <Badge 
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-900 border border-white/40"
              >
                {comic.genre}
              </Badge>
            </div>
            <CardContent className="p-6 bg-white/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-gray-800">by {comic.author}</p>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold">{comic.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-comic-red" />
                  <span>{comic.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4 text-comic-blue" />
                  <span>{comic.views}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-white/30 backdrop-blur-sm text-gray-800 border border-white/40 hover:bg-white/40 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
        >
          View All Comics
        </Button>
      </div>
    </section>
  );
};
