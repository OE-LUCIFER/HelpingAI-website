import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HelpingAI</h3>
            <p className="text-gray-300">
              Revolutionizing AI with emotional intelligence to create more meaningful human-machine interactions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Models', 'Use Cases', 'Blog'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/oevortex/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://huggingface.co/OEvortex" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
            </div>
            <a href="https://buymeacoffee.com/oevortex" target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center">
              <Coffee size={18} className="mr-2" />
              Buy me a coffee
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 HelpingAI. All rights reserved.</p>
          <p className="mt-2">Contact: helpingai5@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;