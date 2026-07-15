import { motion } from "framer-motion";
import { workExperience } from "../data";
import { useTheme } from "../context/ThemeContext";
import Section from "./Section";

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <Section
      id="experience"
      label="Experience"
      title={`Building products <span class="font-serif italic text-accent">beyond the classroom.</span>`}
      subtitle="Hands-on experience delivering full-stack features across frontend, backend, databases, and real-time systems."
    >
      <div className="space-y-8">
        {workExperience.map((exp, index) => {
          const categories = Object.entries(exp).filter(
            ([, value]) => Array.isArray(value)
          );

          return (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${isDark
                ? "bg-[#191C20] border-white/5 hover:border-white/10"
                : "bg-white border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md"
                }`}
            >
              {/* Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-13 h-13 rounded-xl overflow-hidden shrink-0 flex items-center justify-center bg-white border border-slate-100">
                    <img
                      src={exp.companyLogo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {exp.role}
                    </h3>

                    <p className="text-accent text-sm font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <span
                  className={`w-fit shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider ${isDark
                    ? "border-white/10 text-slate-400"
                    : "border-slate-200 text-slate-500"
                    }`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Experience Areas */}
              <div
                className={`grid gap-6 mt-6 pt-6 border-t md:grid-cols-3 ${isDark ? "border-white/5" : "border-slate-100"
                  }`}
              >
                {categories.map(([category, items]) => (
                  <div key={category}>
                    <h4
                      className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      {category}
                    </h4>

                    <div className="space-y-3">
                      {items.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />

                          <p
                            className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"
                              }`}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;