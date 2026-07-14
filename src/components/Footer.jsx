import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <>
      {/* CTA Banner */}
      <section className={`${isDark ? 'bg-[#191C20]' : 'bg-slate-900'} py-24 px-6`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4">
            Design and code{' '}
            <span className="font-serif italic text-accent">aligned.</span>{' '}
            Build with confidence.
          </h2>
          <p className="text-slate-400 text-base font-light mt-6 mb-10 max-w-xl mx-auto">
            I'll review your project requirements and provide a clear execution plan within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-all"
            >
              Start a Project →
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-medium text-sm px-7 py-3.5 rounded-full hover:border-white/40 transition-all"
            >
              <FaGithub size={14} /> View Github
            </a>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className={`border-t py-8 px-6 transition-colors duration-300 ${
        isDark ? 'border-white/5 bg-[#111316]' : 'border-slate-200 bg-[#F7F6F2]'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>AK</span>
            <span className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              · {personalInfo.name} · {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className={`text-sm transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
              <FaGithub size={16} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className={`text-sm transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
              <FaLinkedin size={16} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className={`text-sm font-medium transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
              {personalInfo.email}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;