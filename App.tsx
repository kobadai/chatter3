import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-gradient-slow"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <CtaSection />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;