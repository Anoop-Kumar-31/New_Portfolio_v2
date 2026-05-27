import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { IoImages } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, businessContext, period, description, problemSolutionImpact, techStack, project_img, link, githubRepo, category, gallery, onOpenGallery }) => {
    const { isDark } = useTheme();
    const [isTapped, setIsTapped] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [isDescExpanded, setIsDescExpanded] = useState(false);

    const handleTap = () => {
        if ('ontouchstart' in window) {
            setIsTapped(!isTapped);
        }
    };

    const cardBg = isDark
        ? 'bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 shadow-2xl hover:shadow-cyan-500/10'
        : 'bg-white border-slate-200 hover:border-cyan-400/60 shadow-md hover:shadow-cyan-500/10';

    const detailsBg = isDark ? 'bg-slate-800 border-slate-700/40' : 'bg-slate-50 border-slate-300';

    const githubBtnBase = isDark
        ? 'border-slate-700  text-slate-400 '
        : 'border-slate-200  text-slate-500 ';

    const detailsToggleBtn = isDark
        ? 'border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800/50 hover:border-slate-600'
        : 'border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 hover:border-slate-300';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="group h-full"
        >
            <div
                className={`relative rounded-2xl  border transition-all duration-500 flex flex-col h-full ${cardBg} ${isTapped ? 'is-tapped' : ''} ${showDetails ? 'z-50' : 'z-0'}`}
                onClick={handleTap}
            >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden shrink-0 rounded-t-2xl">
                    <img
                        src={project_img}
                        alt={title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-xs "
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-t from-black/60 via-black/10 to-transparent' : 'bg-linear-to-t from-black/25 via-black/5 to-transparent'}`} />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {category}
                        </span>
                    </div>

                    {/* Overlay Buttons */}
                    <div className={`absolute inset-0 flex items-center justify-center gap-4  transition-opacity duration-300
                        ${isTapped ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'} 
                        ${isDark ? 'bg-black/50' : 'bg-white/50'}
                        `}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 ${isDark ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-cyan-600 hover:bg-cyan-500'} text-white rounded-full transition-all duration-300 transform shadow-xl ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'}
                            ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'}`}
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FiExternalLink className={`w-5 h-5`} />
                        </a>

                        {gallery && gallery.length > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); onOpenGallery(gallery, title); }}
                                onMouseEnter={() => gallery.forEach(src => { const img = new Image(); img.src = src; })}
                                className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white text-slate-800 hover:bg-slate-200'}`}
                                title="View Gallery"
                            >
                                <IoImages className={`w-5 h-5 hover:scale-110 transition-all duration-300`} />
                            </button>
                        )}

                        {typeof githubRepo === 'object' ? (
                            <div className={`flex gap-2 transition-all duration-300 delay-75 transform ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'}`}>
                                <a href={githubRepo.frontend} target="_blank" rel="noopener noreferrer"
                                    className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-cyan-900 text-white' : 'bg-white text-slate-800 hover:bg-cyan-200'}`}
                                    title="Frontend Source" onClick={(e) => e.stopPropagation()}>
                                    <FaGithub className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'} hover:scale-110 transition-all duration-300`} />
                                </a>
                                <a href={githubRepo.backend} target="_blank" rel="noopener noreferrer"
                                    className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-violet-900 text-white' : 'bg-white text-slate-800 hover:bg-violet-200'}`}
                                    title="Backend Source" onClick={(e) => e.stopPropagation()}>
                                    <FaGithub className={`w-5 h-5 ${isDark ? 'text-violet-400' : 'text-violet-700'} hover:scale-110 transition-all duration-300`} />
                                </a>
                            </div>
                        ) : (
                            <a href={githubRepo} target="_blank" rel="noopener noreferrer"
                                className={`p-3 rounded-full transition-all duration-300 transform shadow-xl delay-75 ${isTapped ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'} ${isTapped ? 'pointer-events-auto' : 'pointer-events-none md:group-hover:pointer-events-auto'} ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white text-slate-800 hover:bg-slate-200'}`}
                                title="Source Code" onClick={(e) => e.stopPropagation()}>
                                <FaGithub className="w-5 h-5 hover:scale-110 transition-all duration-300" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-col justify-between items-start mb-2">
                        <h3 className={`text-lg font-bold transition-colors duration-300 group-hover:text-cyan-400
                            ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {title}
                        </h3>
                        <span className={`text-xs whitespace-nowrap mt-1 italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{period}</span>
                    </div>

                    <p className="text-xs text-cyan-500 font-semibold uppercase tracking-wider mb-3">
                        {businessContext}
                    </p>

                    <div className="mb-4">
                        <p className={`text-sm leading-relaxed ${!isDescExpanded ? 'line-clamp-2' : ''} ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            {description}
                        </p>
                        {description.length > 80 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsDescExpanded(!isDescExpanded); }}
                                className="text-xs font-bold text-cyan-400/70 hover:text-cyan-400 mt-1 transition-colors duration-200"
                            >
                                {isDescExpanded ? 'Show less' : 'Read more'}
                            </button>
                        )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {techStack.map((tech, index) => (
                            <span key={index}
                                className={`px-2 py-0.5 text-[11px] font-medium rounded-md border
                                    ${isDark
                                        ? 'bg-slate-700/40 text-slate-400 border-slate-700/40'
                                        : 'bg-slate-100 text-slate-500 border-slate-200'
                                    }`}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto space-y-3">
                        <button
                            onClick={(e) => { e.stopPropagation(); setShowDetails(!showDetails); }}
                            className={`w-full py-2 px-4 rounded-xl border text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${detailsToggleBtn}`}
                        >
                            {showDetails ? 'Hide Details' : 'View Problem, Solution & Impact'}
                        </button>

                        {showDetails && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl border space-y-3 absolute z-1000 w-[calc(100%-48px)] ${detailsBg}`}
                            >
                                <div>
                                    <h4 className="text-[10px] text-yellow-400 font-bold uppercase mb-1">Problem</h4>
                                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{problemSolutionImpact.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Solution</h4>
                                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{problemSolutionImpact.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] text-blue-400 font-bold uppercase mb-1">Impact</h4>
                                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{problemSolutionImpact.impact}</p>
                                </div>
                            </motion.div>
                        )}

                        <div className="flex gap-3 pt-1">
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-white text-center text-xs font-black py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/15 uppercase tracking-widest"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Project
                            </a>
                            {typeof githubRepo === 'object' ? (
                                <div className="flex gap-2">
                                    <a href={githubRepo.frontend} target="_blank" rel="noopener noreferrer"
                                        className={`p-3 border rounded-xl transition-all duration-300 ${githubBtnBase} hover:border-cyan-500/50 hover:text-cyan-400`}
                                        title="Frontend" onClick={(e) => e.stopPropagation()}>
                                        <FaGithub className="w-4 h-4" />
                                    </a>
                                    <a href={githubRepo.backend} target="_blank" rel="noopener noreferrer"
                                        className={`p-3 border rounded-xl transition-all duration-300 ${githubBtnBase} hover:border-violet-500/50 hover:text-violet-400`}
                                        title="Backend" onClick={(e) => e.stopPropagation()}>
                                        <FaGithub className="w-4 h-4" />
                                    </a>
                                </div>
                            ) : (
                                <a href={githubRepo} target="_blank" rel="noopener noreferrer"
                                    className={`p-3 border rounded-xl transition-all duration-300 ${githubBtnBase} hover:border-cyan-500/50 hover:text-cyan-400`}
                                    title="GitHub" onClick={(e) => e.stopPropagation()}>
                                    <FaGithub className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
