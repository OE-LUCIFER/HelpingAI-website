import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Models from './components/Models';
import UseCases from './components/UseCases';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Models />
        <UseCases />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;