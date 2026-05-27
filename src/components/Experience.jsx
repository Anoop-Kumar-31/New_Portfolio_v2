import Section from './Section';
import { workExperience } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const SECTION_META = {
  'Backend Development': { color: 'text-cyan-500', dot: 'bg-cyan-400', border: 'border-cyan-500/20', darkBg: 'bg-cyan-500/5', lightBg: 'bg-cyan-50' },
  'Frontend Development': { color: 'text-violet-500', dot: 'bg-violet-400', border: 'border-violet-500/20', darkBg: 'bg-violet-500/5', lightBg: 'bg-violet-50' },
  'DevOps & Collaboration': { color: 'text-amber-500', dot: 'bg-amber-400', border: 'border-amber-500/20', darkBg: 'bg-amber-500/5', lightBg: 'bg-amber-50' },
  'Key Achievements': { color: 'text-emerald-500', dot: 'bg-emerald-400', border: 'border-emerald-500/20', darkBg: 'bg-emerald-500/5', lightBg: 'bg-emerald-50' },
};
const DEFAULT_META = { color: 'text-cyan-400', dot: 'bg-cyan-400', border: 'border-cyan-500/20', darkBg: 'bg-cyan-500/5', lightBg: 'bg-cyan-50' };

const ExperienceItem = ({ title, items, isDark }) => {
  const meta = SECTION_META[title] || DEFAULT_META;
  return (
    <div className={`rounded-xl border p-5 ${meta.border} ${isDark ? meta.darkBg : meta.lightBg}`}>
      <div className="flex items-center gap-2 mb-3">
        <h4 className={`text-sm font-bold uppercase tracking-wider ${meta.color}`}>{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className={`flex items-start gap-2 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            <span className={`self-center w-1.5 h-1.5 rounded-full shrink-0 ${meta.dot} opacity-60`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const { isDark } = useTheme();
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';

  return (
    <Section id="experience" title="Work Experience">
      <div className="relative pl-8">
        {/* Timeline line */}
        <div className={`absolute left-3 top-0 bottom-0 w-0.5 ${isDark ? 'bg-linear-to-b from-cyan-500 via-indigo-500 to-transparent' : 'bg-linear-to-b from-cyan-400 via-indigo-400 to-transparent'}`} />

        {workExperience.map((exp, index) => (
          <div key={index} className="mb-10 relative">
            {/* Pulse dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className={`absolute -left-[26.5px] top-13 w-4 h-4 animate-pulse-ring bg-cyan-500 rounded-full border-2 ${isDark ? 'border-[#080c14]' : 'border-white'} shadow-[0_0_12px_rgba(34,211,238,0.6)]`}
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border shadow-lg ${cardBase}`}
            >
              {/* Card header */}
              <div className={`flex items-center gap-4 p-6 border-b ${isDark ? 'border-slate-700/50' : 'border-slate-100'}`}>
                <div className={`w-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border bg-white border-slate-200`}>
                  <img src={exp.companyLogo} alt={exp.company} className="object-stretch fill-transparent p-2" />
                </div>
                <div className="min-w-0">
                  <h3 className={`text-xl font-extrabold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                  <p className="text-cyan-400 font-semibold text-sm">{exp.company}</p>
                  <p className={`text-xs mt-0.5 italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{exp.period}</p>
                </div>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold shrink-0
                  ${isDark ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  Internship
                </span>
              </div>

              {/* Section cards grid */}
              <div className="p-6 grid md:grid-cols-2 gap-4">
                {Object.entries(exp)
                  .filter(([, value]) => Array.isArray(value))
                  .map(([title, items]) => (
                    <ExperienceItem key={title} title={title} items={items} isDark={isDark} />
                  ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;