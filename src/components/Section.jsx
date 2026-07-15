import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Section = ({ id, label, title, subtitle, children }) => {
  const { isDark } = useTheme();
  return (
    <motion.section
      id={id}
      className="mb-25 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        {label && (
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className={`text-xs font-semibold tracking-[0.15em] uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {label}
            </span>
          </div>
        )}
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className={`text-base font-light max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
