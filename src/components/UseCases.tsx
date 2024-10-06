import React from 'react';
import { HeartHandshake, GraduationCap, Users } from 'lucide-react';

const useCases = [
  { icon: HeartHandshake, title: 'Mental Health Support', description: 'Providing empathetic listening and supportive interactions for those dealing with mental health challenges.' },
  { icon: GraduationCap, title: 'Educational Assistance', description: 'Offering personalized learning experiences and emotional support to students of all ages.' },
  { icon: Users, title: 'Customer Service Enhancement', description: 'Improving customer interactions with emotionally intelligent responses and problem-solving capabilities.' },
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How HelpingAI Makes a Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
              <useCase.icon className="w-16 h-16 text-blue-500 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;