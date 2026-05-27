import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import QuickInfo from './components/QuickInfo';
import Projects from './components/Projects';
import HireReadiness from './components/HireReadiness';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';
import { trackVisitor } from './utils/visitorTracker';
import { projects } from './data';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function AppContent() {
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => { trackVisitor(); }, []);

  useEffect(() => {
    if (!isLoaded) {
      const allImages = projects.flatMap(project => project.gallery);
      preloadImages(allImages);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to body for CSS vars
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'text-slate-300' : 'text-slate-700'} font-sans antialiased transition-colors duration-400`}>
      <Header />

      {/* Quick Info */}
      <div className="container mx-auto px-6 -mt-8 xl:px-40 lg:px-25 mb-8">
        <QuickInfo />
      </div>

      <main className="container mx-auto px-6 py-10 xl:px-40 lg:px-25">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <HireReadiness />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top */}
      {showTop && (
        <button
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg glow-cyan transition-all duration-300 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
