import React from 'react';
import { Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-32 text-center hero-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Brain size={120} className="mx-auto mb-8 text-white opacity-80 animate-float" />
        <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in-down">
          HelpingAI: AI with a Heart
        </h1>
        <p className="text-2xl text-gray-200 mb-10 animate-fade-in-up max-w-3xl mx-auto">
          Experience the future of human-machine interaction with emotionally intelligent AI.
        </p>
        <a href="#models" className="btn btn-primary text-lg">
          Explore Our Models
        </a>
      </div>
    </section>
  );
};

export default Hero;