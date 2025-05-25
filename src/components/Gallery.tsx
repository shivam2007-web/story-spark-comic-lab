
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
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Magic Academy",
      author: "Luna Mystic",
      likes: 567,
      views: 2100,
      rating: 4.9,
      genre: "Fantasy",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      title: "Street Fighter",
      author: "Max Thunder",
      likes: 234,
      views: 890,
      rating: 4.5,
      genre: "Action",
      color: "bg-gradient-to-br from-red-500 to-orange-600"
    },
    {
      title: "Space Odyssey",
      author: "Zara Cosmos",
      likes: 445,
      views: 1680,
      rating: 4.7,
      genre: "Adventure",
      color: "bg-gradient-to-br from-green-500 to-blue-600"
    },
    {
      title: "Monster Hunter",
      author: "Jake Wild",
      likes: 189,
      views: 756,
      rating: 4.3,
      genre: "Horror",
      color: "bg-gradient-to-br from-gray-600 to-black"
    },
    {
      title: "Time Traveler",
      author: "Emma Future",
      likes: 678,
      views: 2450,
      rating: 4.9,
      genre: "Mystery",
      color: "bg-gradient-to-br from-yellow-500 to-red-600"
    }
  ];

  return (
    <section id="gallery" className="container mx-auto px-4 py-20 bg-white/50">
      <div className="text-center mb-16">
        <h2 className="comic-title text-4xl md:text-6xl font-bold mb-4 text-gray-900">
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
            className="overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
          >
            <div className={`h-48 ${comic.color} relative flex items-center justify-center`}>
              <h3 className="text-white text-2xl font-bold comic-title text-center px-4">
                {comic.title}
              </h3>
              <Badge 
                className="absolute top-4 right-4 bg-white text-gray-900"
              >
                {comic.genre}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-gray-900">by {comic.author}</p>
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
          className="bg-comic-blue hover:bg-comic-blue/90 text-white px-8 py-4 text-lg"
        >
          View All Comics
        </Button>
      </div>
    </section>
  );
};
