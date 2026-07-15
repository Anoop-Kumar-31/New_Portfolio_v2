import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoImages } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({
  title,
  businessContext,
  description,
  techStack,
  project_img,
  link,
  githubRepo,
  category,
  gallery,
  onOpenGallery,
  index = 0,
}) => {
  const { isDark } = useTheme();
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isTechExpanded, setIsTechExpanded] = useState(false);

  const btnBase = `flex items-center justify-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-all duration-200`;
  const btnSecondary = isDark
    ? `${btnBase} border-white/10 text-slate-400 hover:text-white hover:border-white/20`
    : `${btnBase} border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300`;

  // Resolve GitHub URL(s)
  const githubUrl = typeof githubRepo === 'string'
    ? githubRepo
    : githubRepo?.frontend ?? githubRepo?.backend ?? null;

  const showDescriptionToggle = description.length > 120;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: 'easeOut' }}
      className={`group flex flex-col rounded-2xl border overflow-hidden transition-colors duration-200 ${isDark
        ? 'bg-[#191C20] border-white/5 hover:border-white/10'
        : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
        }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
        <img
          src={project_img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${isDark ? 'bg-black/50 text-white backdrop-blur-sm' : 'bg-white/80 text-slate-700 backdrop-blur-sm'
          }`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-accent">
          {businessContext}
        </p>
        <h3 className={`text-base font-bold mb-2 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>
        <div className="mb-4">
          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'} ${!isDescExpanded ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          {showDescriptionToggle && (
            <button
              onClick={() => setIsDescExpanded(!isDescExpanded)}
              className="text-xs font-semibold text-accent hover:underline mt-1 focus:outline-none"
            >
              {isDescExpanded ? 'Show less' : 'view more...'}
            </button>
          )}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {(isTechExpanded ? techStack : techStack.slice(0, 5)).map((tech, i) => (
            <span key={i} className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}>
              {tech}
            </span>
          ))}
          {techStack.length > 5 && (
            <button
              onClick={() => setIsTechExpanded(!isTechExpanded)}
              className={`text-[11px] font-bold px-2 py-0.5 rounded-md border hover:opacity-80 transition-all focus:outline-none cursor-pointer ${isDark
                ? 'bg-accent/10 border-accent/20 text-accent'
                : 'bg-accent/5 border-accent/10 text-accent'
                }`}
            >
              {isTechExpanded ? 'Show less' : `+${techStack.length - 5}`}
            </button>
          )}
        </div>

        {/* ── Action buttons — always visible, mobile-friendly ── */}
        <div className={`mt-auto flex items-center gap-2 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
          {/* Primary: Live Demo */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-lg bg-accent text-white hover:opacity-90 transition-opacity"
            >
              <FiExternalLink size={13} />
              <span className="hidden min-[400px]:inline">Live Demo</span>
              <span className="inline min-[400px]:hidden">Live</span>
            </a>
          )}

          {/* Gallery */}
          {gallery?.length > 0 && (
            <button
              onClick={() => onOpenGallery(gallery, title)}
              className={btnSecondary}
              title="View Gallery"
            >
              <IoImages size={13} />
              Gallery
            </button>
          )}

          {/* GitHub */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              title="Source Code"
            >
              <FaGithub size={13} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
