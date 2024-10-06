import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center text-3xl font-bold text-blue-600 transition-transform duration-300 hover:scale-105">
          <Brain size={36} className="mr-2" />
          HelpingAI
        </a>
        <nav>
          <ul className="flex space-x-8">
            {['Home', 'Models', 'Use Cases', 'Blog'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className={`font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;