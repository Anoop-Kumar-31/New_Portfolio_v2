import Section from './Section';
import { education, certificates } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Education = () => {
  const { isDark } = useTheme();
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';

  return (
    <Section id="education" title="Education">
      {/* University Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-2xl border shadow-lg mb-8 overflow-hidden ${cardBase}`}
      >
        <div className="h-1 bg-linear-to-r from-cyan-400 via-indigo-500 to-pink-500" />
        <div className="p-5 sm:p-6">

          {/* Mobile: logo + CGPA in one row; desktop: all in one row */}
          <div className="flex items-center justify-between sm:hidden mb-4">
            {/* Logo */}
            <div className={`w-14 overflow-hidden flex items-center justify-center border shrink-0
              ${isDark ? 'bg-white/10 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
              <img src={education.logo} alt="University Logo" className="w-full h-full object-contain p-1" />
            </div>
            {/* CGPA badge */}
            <div className={`flex flex-col items-center px-4 py-2 rounded-xl border
              ${isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'}`}>
              <span className={`text-[10px] font-semibold uppercase tracking-widest mb-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>CGPA</span>
              <span className="text-xl font-black gradient-text">{education.cgpa ?? '7.98'}</span>
              <span className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>/ 10.00</span>
            </div>
          </div>

          {/* University info — full width on mobile */}
          <div className="sm:hidden">
            <h3 className={`text-lg font-extrabold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{education.university}</h3>
            <p className="text-cyan-400 font-semibold text-sm mb-0.5">{education.degree}</p>
            <p className={`text-xs italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{education.period}</p>
          </div>

          {/* Desktop layout — single row */}
          <div className="hidden sm:flex items-center gap-6">
            <div className={`w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 border
              ${isDark ? 'bg-white/10 border-slate-600' : 'bg-slate-50 border-slate-200'}`}>
              <img src={education.logo} alt="University Logo" className="w-full h-full object-contain p-1.5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{education.university}</h3>
              <p className="text-cyan-400 font-semibold text-sm mb-1">{education.degree}</p>
              <p className={`text-sm italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{education.period}</p>
            </div>
            <div className={`flex flex-col items-center px-5 py-3 rounded-xl border shrink-0
              ${isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'}`}>
              <span className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>CGPA</span>
              <span className="text-2xl font-black gradient-text">{education.cgpa ?? '7.98'}</span>
              <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>/ 10.00</span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Certificates */}
      <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        <FaMedal className="text-amber-400" /> Certifications & Achievements
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.verify}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className={`rounded-xl border p-4 flex flex-col gap-3 transition-all duration-200 group cursor-pointer
              ${isDark
                ? 'bg-slate-800/40 border-slate-700/50 hover:border-cyan-500/40 hover:bg-slate-800/70'
                : 'bg-white border-slate-200 hover:border-cyan-400/60 hover:shadow-md'
              }`}
          >
            {/* Top row: logo + type badge */}
            <div className="flex items-center justify-between">
              <div className={`h-10 rounded-lg flex items-center justify-center border p-1 bg-slate-50 border-slate-200`}>
                <img src={cert.icon} alt={cert.authorizedBy} className="w-full h-full object-contain" />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border
                ${cert.type.includes('Specialization')
                  ? isDark ? 'text-violet-400 border-violet-500/30 bg-violet-500/10' : 'text-violet-600 border-violet-200 bg-violet-50'
                  : isDark ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' : 'text-emerald-600 border-emerald-200 bg-emerald-50'
                }`}>
                {cert.type.includes('Specialization') ? 'Specialization' : 'Course'}
              </span>
            </div>

            {/* Cert name */}
            <p className={`text-sm font-bold leading-snug group-hover:text-cyan-400 transition-colors duration-200
              ${isDark ? 'text-white' : 'text-slate-800'}`}>
              {cert.name}
            </p>

            {/* Footer: issuer + date + verify */}
            <div className="flex items-end justify-between mt-auto">
              <div>
                <p className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{cert.authorizedBy}</p>
                <p className={`text-[10px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{cert.date}</p>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1
                ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}>
                Verify <FiExternalLink size={10} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Education;