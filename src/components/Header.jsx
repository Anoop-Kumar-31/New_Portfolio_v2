import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const navBg = isDark
    ? 'bg-[#111316]/90 border-b border-white/5'
    : 'bg-[#F7F6F2]/90 border-b border-black/5';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[1000] backdrop-blur-md ${navBg} transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#me" className="font-serif italic flex items-center gap-2">
            <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <span className='text-accent'>Anoop</span>{" "}Kumar
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative overflow-hidden pb-1 text-sm font-medium transition-colors duration-200 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-accent before:transition-transform before:duration-300 before:-translate-x-full hover:before:translate-x-0
                  ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:opacity-90"
            >
              Start a Project
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden border-t ${isDark ? 'border-white/5 bg-[#111316]' : 'border-black/5 bg-[#F7F6F2]'}`}
            >
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-base font-medium border-b transition-colors
                    ${isDark ? 'border-white/5 text-slate-400 hover:text-white' : 'border-black/5 text-slate-600 hover:text-slate-900'}`}
                >
                  {label}
                </a>
              ))}
              <div className="p-4">
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-accent text-white text-sm font-medium px-5 py-3 rounded-full">
                  Start a Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;