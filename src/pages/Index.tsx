
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50">
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
