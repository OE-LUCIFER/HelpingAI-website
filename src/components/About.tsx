import React from 'react';
import { Brain, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About HelpingAI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Abhay Koul" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">Abhay Koul: The Mind Behind HelpingAI</h3>
            <p className="text-gray-600 mb-6">
              Abhay Koul, born on November 26, 2006, is a young and talented AI developer from KP Colony, Vessu, Anantnag. At just 17 years old, Abhay has been actively involved in AI projects since January 2023, showcasing a remarkable aptitude for innovation and technology.
            </p>
            <p className="text-gray-600 mb-6">
              As the founder of HelpingAI, Abhay has developed a suite of advanced AI models designed to provide personalized assistance and foster innovative learning experiences. His work spans various types of models, including text-to-image, lightweight, and emotionally intelligent models.
            </p>
            <p className="text-gray-600">
              Abhay's commitment to making AI technology more accessible and emotionally intelligent has positioned him as a promising figure in the AI community. His focus on emotional depth aims to create more empathetic and supportive AI interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;