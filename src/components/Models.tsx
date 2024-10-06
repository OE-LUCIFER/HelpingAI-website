import React from 'react';

const models = [
  { name: 'HelpingAI-15B', description: 'Advanced conversational model with superior emotional and technical intelligence.', eqScore: 96.79, huggingFaceId: 'OEvortex/HelpingAI-15B' },
  { name: 'HelpingAI2-9B', description: 'Next-level emotional intelligence for nuanced interactions.', eqScore: 95.89, huggingFaceId: 'OEvortex/HelpingAI2-9B' },
  { name: 'HelpingAI-9B', description: 'Emotionally intelligent model for deep and meaningful conversations.', eqScore: 89.23, huggingFaceId: 'OEvortex/HelpingAI-9B-200k' },
  { name: 'HelpingAI2-6B', description: 'Combines advanced performance with exceptional emotional intelligence.', eqScore: 93.5, huggingFaceId: 'OEvortex/HelpingAI2-6B' },
  { name: 'HelpingAI-Flash', description: 'High-performance 2B parameter model for all devices.', eqScore: 87.5, huggingFaceId: 'OEvortex/HelpingAI-flash' },
  { name: 'HelpingAI-3B', description: 'Detailed and nuanced conversational abilities.', eqScore: 88.0, huggingFaceId: 'OEvortex/HelpingAI-3B' },
  { name: 'HelpingAI-Lite', description: 'Resource-efficient model with core EQ features.', eqScore: 85.0, huggingFaceId: 'OEvortex/HelpingAI-Lite' },
  { name: 'HelpingAI-Vision', description: 'Image-to-text model for visual understanding.', eqScore: 86.0, huggingFaceId: 'OEvortex/HelpingAI-Vision' },
  { name: 'PixelGen', description: 'Text-to-image generation model.', eqScore: 84.0, huggingFaceId: 'OEvortex/PixelGen' },
];

const Models: React.FC = () => {
  return (
    <section id="models" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our AI Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{model.name}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <p className="text-lg font-semibold text-blue-500 mb-4">EQ Score: {model.eqScore}</p>
                <a 
                  href={`https://huggingface.co/${model.huggingFaceId}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary inline-block text-sm"
                >
                  View on Hugging Face
                </a>
              </div>
              <div 
                className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 ease-out"
                style={{ width: `${model.eqScore}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;