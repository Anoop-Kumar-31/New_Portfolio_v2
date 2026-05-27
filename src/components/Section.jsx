import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Section = ({ id, title, subtitle, children }) => {
  const { isDark } = useTheme();
  return (
    <motion.section
      id={id}
      className="mb-20 scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <div className="relative flex items-center font-serif w-fit">
          {/* Accent bar */}
          {/* <span className="block w-1 h-8 bg-linear-to-b from-cyan-400 to-indigo-500 rounded-full shrink-0" /> */}
          {/* /Playfair Display', Georgia, serif; */}
          <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <div className={`w-2.5 h-2.5 absolute bg-linear-to-r from-cyan-400 to-indigo-500 rounded-full shrink-0 top-0 right-[-15px]`} />
          {/* <div className={`grow h-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} /> */}
        </div>
        {subtitle && (
          <p className={`text-xs md:text-sm font-normal ${isDark ? 'text-slate-400/50' : 'text-slate-600/50'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
