import Section from './Section';
import { education } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Education = () => {
  const { isDark } = useTheme();

  return (
    <Section
      id="education"
      label="Background"
      title={`Academic <span class="font-serif italic text-accent">foundation.</span>`}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-2xl border p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center ${isDark ? 'bg-[#191C20] border-white/5' : 'bg-white border-slate-100 shadow-sm'
          }`}
      >
        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 bg-white flex items-center justify-center shrink-0">
          <img src={education.logo} alt="University" className="w-full h-full object-contain p-1.5" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {education.university}
          </h3>
          <p className="text-accent text-sm font-medium mb-1">{education.degree}</p>
          <p className={`text-xs tracking-wide uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            {education.period}
          </p>
        </div>

        {/* CGPA */}
        <div className={`flex flex-col items-center px-6 py-4 rounded-2xl border shrink-0 ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'
          }`}>
          <span className={`text-3xl font-bold tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {education.cgpa}
          </span>
          <span className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            CGPA / 10
          </span>
        </div>
      </motion.div>
    </Section>
  );
};

export default Education;