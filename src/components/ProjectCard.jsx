import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoImages } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, businessContext, period, description, techStack, project_img, link, githubRepo, category, gallery, onOpenGallery }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={`group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-[#191C20] border-white/5 hover:border-white/10'
          : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={project_img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
          isDark ? 'bg-black/50 text-white backdrop-blur-sm' : 'bg-white/80 text-slate-700 backdrop-blur-sm'
        }`}>
          {category}
        </span>

        {/* Hover overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-black/60' : 'bg-white/70'}`}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer"
              className="p-2.5 bg-accent text-white rounded-full hover:opacity-90 transition-all"
              onClick={e => e.stopPropagation()}>
              <FiExternalLink size={16} />
            </a>
          )}
          {gallery?.length > 0 && (
            <button
              onClick={e => { e.stopPropagation(); onOpenGallery(gallery, title); }}
              className={`p-2.5 rounded-full transition-all ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-white text-slate-800 hover:bg-slate-50 shadow'}`}
            >
              <IoImages size={16} />
            </button>
          )}
          {typeof githubRepo === 'string' && (
            <a href={githubRepo} target="_blank" rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-white text-slate-800 hover:bg-slate-50 shadow'}`}
              onClick={e => e.stopPropagation()}>
              <FaGithub size={16} />
            </a>
          )}
          {typeof githubRepo === 'object' && (
            <>
              <a href={githubRepo.frontend} target="_blank" rel="noopener noreferrer" title="Frontend"
                className={`p-2.5 rounded-full transition-all text-xs font-bold ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-white text-slate-800 hover:bg-slate-50 shadow'}`}
                onClick={e => e.stopPropagation()}>
                <FaGithub size={16} />
              </a>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className={`text-xs font-semibold uppercase tracking-wider mb-2 text-accent`}>{businessContext}</p>
        <h3 className={`text-base font-bold mb-2 leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed line-clamp-3 mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {techStack.slice(0, 5).map((tech, i) => (
            <span key={i} className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
              isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              {tech}
            </span>
          ))}
          {techStack.length > 5 && (
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              +{techStack.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
