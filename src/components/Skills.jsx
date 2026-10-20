import { useState, useMemo } from 'react';
import Section from './Section';
import { skills } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend & APIs', 'Databases & ORM', 'Tools & Platforms'];

  const filteredTech = useMemo(() => {
    if (activeCategory === 'All') {
      return skills.technical.flatMap(cat => cat.list);
    }
    const catData = skills.technical.find(cat => cat.name === activeCategory);
    return catData ? catData.list : [];
  }, [activeCategory]);

  const coreStack = [
    'React + Redux Toolkit',
    'Node.js + Express',
    'PostgreSQL + Sequelize',
    'Socket.IO + SSE',
    'JWT Auth + RBAC',
    'Prisma ORM',
    'REST APIs',
    'Git + Linux',
  ];

  return (
    <Section
      id="skills"
      label="Capabilities"
      title={`Full-stack engineering <span class="font-serif italic text-accent">that scales.</span>`}
      subtitle="I build end-to-end digital products — from database schema to polished UI."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Tech Icons */}
        <div className={`rounded-2xl border p-7 ${isDark ? 'bg-[#191C20]/50 border-white/5' : 'bg-white/50 border-slate-100 shadow-sm'}`}>
          <p className={`text-xs font-semibold tracking-[0.12em] uppercase mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Technologies
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 border cursor-pointer ${activeCategory === cat
                  ? 'bg-accent border-accent text-white'
                  : isDark
                    ? 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}
              >
                {cat.replace(' & APIs', '').replace(' & ORM', '').replace(' & Platforms', '')}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-4 sm:grid-cols-5 gap-5"
          >
            {filteredTech.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className={`w-15 h-15 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-100 group-hover:bg-slate-100'}`}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`w-10 h-10 object-contain ${item.name === 'GitHub' && isDark ? 'filter invert' : ''
                      } ${['Express.js', 'Next.js', 'Prisma', 'Socket.IO', 'Docker'].includes(item.name) && isDark ? 'filter invert' : ''
                      }`}
                  />
                </div>
                <span className={`text-[10px] font-semibold text-center leading-tight ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Stack + Soft Skills */}
        <div className="flex flex-col gap-6">
          <div className={`rounded-2xl border p-7 ${isDark ? 'bg-[#191C20] border-white/5' : 'bg-white/50 border-slate-100 shadow-sm'}`}>
            <p className={`text-xs font-semibold tracking-[0.12em] uppercase mb-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Core Stack
            </p>
            <div className="space-y-2.5">
              {coreStack.map(s => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl border p-7 ${isDark ? 'bg-[#191C20] border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
            <p className={`text-xs font-semibold tracking-[0.12em] uppercase mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Approach
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.social.map(s => (
                <span key={s} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
                  }`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;