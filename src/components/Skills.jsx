import { useRef, useEffect, useState } from 'react';
import Section from './Section';
import { skills } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';


const CATEGORY_COLORS = [
  'from-cyan-500 to-blue-600',
  'from-violet-500 to-indigo-600',
  'from-amber-500 to-orange-600',
];
const TEXT_COLORS = ['text-cyan-500', 'text-violet-500', 'text-amber-500'];

const Skills = () => {
  const { isDark } = useTheme();
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';

  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with daily">
      <div className="grid md:grid-cols-5 gap-8">
        {/* Technical */}
        <div className="md:col-span-3 space-y-5">
          {skills.technical.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`rounded-2xl border p-5 shadow-sm ${cardBase}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={` rounded-lg flex items-center justify-center text-xl font-black bg-linear-to-br ${CATEGORY_COLORS[catIndex]} bg-clip-text text-transparent`}>
                  {catIndex + 1}
                </span>
                <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>{category.name}</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.list.map((item) => (
                  <div key={item.name} className="group text-center">
                    <div className={`mx-auto mb-2 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
                      ${isDark ? 'bg-slate-700/60 group-hover:bg-slate-700' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                      <img src={item.icon} alt={item.name} className={`w-7 h-7 object-contain select-none drop-shadow-sm ${isDark ? 'drop-shadow-black' : 'drop-shadow-white'} ${(item.name == "GitHub") && !isDark ? 'filter invert' : ''} ${(item.name == "Express" || item.name == "Next.js" || item.name == "Prisma ORM" || item.name == "Socket.IO") && isDark ? 'filter invert' : ''}`} />
                    </div>
                    <p className={`text-sm font-semibold text-shadow-xs ${isDark ? '' : 'text-shadow-gray-400'} ${TEXT_COLORS[catIndex]}`}>{item.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl border p-5 shadow-sm h-full ${cardBase}`}
          >
            <h3 className={`font-bold text-sm mb-5 ${isDark ? 'text-white' : 'text-slate-800'}`}>Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.social.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-default
                    ${isDark ? 'bg-slate-700/50 text-slate-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-300' : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-600'}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Stack summary */}
            <div className={`mt-6 pt-5 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Core Stack</p>
              {['React + Redux', 'Node.js + Express', 'PostgreSQL + Sequelize', 'JWT Auth + RBAC', 'REST APIs + SSE', 'WebSockets (Socket.IO)', 'Event-Driven Architecture'].map((s) => (
                <div key={s} className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;