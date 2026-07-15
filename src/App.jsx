import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
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
  const [showTop, setShowTop] = useState(false);

  useEffect(() => { trackVisitor(); }, []);

  useEffect(() => {
    const allImages = projects.flatMap(project => project.gallery || []);
    preloadImages(allImages);
  }, []);

  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.pageX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.pageY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'text-slate-300' : 'text-slate-700'} antialiased transition-colors duration-300 relative min-h-screen overflow-x-hidden`}>
      {/* Subtle dynamic background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base structural grid */}
        <div className="base-grid" />

        {/* Cursor interactive grid highlight */}
        <div className="highlight-grid" />

        {/* Ambient drift blob 1 */}
        <div className={`absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] animate-drift bg-accent/5 ${isDark ? 'opacity-40' : 'opacity-25'
          }`} />

        {/* Ambient drift blob 2 */}
        <div className={`absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] animate-drift-reverse bg-accent/5 ${isDark ? 'opacity-30' : 'opacity-15'
          }`} />
      </div>

      {/* Main content container */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-6xl mx-auto px-6 pt-8">
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          className="fixed bottom-6 right-6 bg-accent hover:opacity-90 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={14} />
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
