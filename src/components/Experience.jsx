import { motion } from 'framer-motion';
import { workExperience } from '../data';
import { useTheme } from '../context/ThemeContext';
import Section from './Section';

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <Section
      id="experience"
      label="The Process"
      title={`Ship digital products <span class="font-serif italic text-accent">with precision.</span>`}
      subtitle="A refined approach to engineering — bridging aesthetic intuition with technical execution."
    >
      <div className="space-y-10">
        {workExperience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-2xl border p-8 transition-all duration-300 ${
              isDark
                ? 'bg-[#191C20] border-white/5 hover:border-white/10'
                : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
            }`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center bg-white border border-slate-100`}>
                <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-contain p-1.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                <p className="text-accent text-sm font-medium mt-0.5">{exp.company}</p>
              </div>
              <span className={`text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full border shrink-0 ${
                isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                {exp.period}
              </span>
            </div>

            {/* Key points — pick the most impactful bullets across categories */}
            <div className={`space-y-1 border-t pt-6 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              {Object.entries(exp)
                .filter(([key, value]) => Array.isArray(value))
                .flatMap(([, items]) => items.slice(0, 2))
                .slice(0, 5)
                .map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;