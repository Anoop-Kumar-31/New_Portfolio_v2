import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVite } from 'react-icons/si';

const Footer = () => {
  const { isDark } = useTheme();
  const navLinks = ['experience', 'projects', 'skills', 'education', 'hire-readiness'];

  return (
    <footer className={`border-t pt-16 pb-8 transition-colors duration-400 relative overflow-hidden ${isDark ? 'border-slate-800 bg-[#080c14]' : 'border-slate-200 bg-slate-50'}`}>

      {/* Background Glow Effect */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl rounded-full opacity-20 pointer-events-none ${isDark ? 'bg-cyan-900/50' : 'bg-cyan-200/50'}`} />

      <div className="container mx-auto px-6 xl:px-40 lg:px-25 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">

          {/* Column 1: Brand & Motto (spanning 5 cols) */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" aria-label="Scroll to top" className="hover:scale-105 hover:opacity-90 transition-all duration-300 mb-2 inline-block">
              <img src="/img/MyLogo.png" alt="AK Portfolio Logo" className="h-20 w-auto object-contain drop-shadow-md" />
            </a>
            <h1 className={`gradient-text text-2xl font-semibold mb-0`}>{personalInfo.name}</h1>
            <p className={`text-sm leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {personalInfo.motto}
            </p>
          </div>

          {/* Column 2: Quick Links (spanning 3 cols) */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Quick Links
            </h3>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className={`capitalize text-sm font-medium transition-colors hover:text-cyan-500
                      ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                  >
                    {link.replace('-', ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials (spanning 4 cols) */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start lg:items-end text-center md:text-left lg:text-right">
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Let's Connect
            </h3>
            <a href={`mailto:${personalInfo.email}`} className={`text-sm mb-6 font-medium hover:text-cyan-500 transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-3">
              {[
                { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: 'Email', color: 'hover:text-cyan-400 hover:border-cyan-400 lg:hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]' },
                { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400 lg:hover:shadow-[0_0_12px_rgba(96,165,250,0.4)]' },
                { href: personalInfo.github, icon: FaGithub, label: 'GitHub', color: isDark ? 'hover:text-white hover:border-white lg:hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]' : 'hover:text-slate-900 hover:border-slate-900 lg:hover:shadow-[0_0_12px_rgba(15,23,42,0.3)]' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-full border transition-all duration-300
                    ${isDark ? 'border-slate-800 bg-slate-800/50 text-slate-400' : 'border-slate-200 bg-white text-slate-500'}
                    ${color}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className={`w-full h-px mb-8 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

        {/* Bottom: Copyright + Tech */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className={`text-sm flex items-center gap-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            <span>Made with <FaHeart className="inline text-pink-700 mb-0.5 mx-0.5 hover:text-pink-500 transition-colors cursor-pointer" size={14} /></span>
            <SiReact className="text-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer" size={16} title="React" />
            <SiTailwindcss className="text-teal-500 hover:text-teal-400 transition-colors cursor-pointer" size={16} title="Tailwind CSS" />
            <SiVite className="text-purple-500 hover:text-purple-400 transition-colors cursor-pointer" size={16} title="Vite" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;