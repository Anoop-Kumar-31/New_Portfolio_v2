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
    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'text-slate-300' : 'text-slate-700'} antialiased transition-colors duration-300`}>
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-8">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />

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
