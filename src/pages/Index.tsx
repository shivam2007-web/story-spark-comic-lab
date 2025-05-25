
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, BookOpen, Users, Star, Zap, Heart } from "lucide-react";
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-comic-blue via-white to-comic-yellow">
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
