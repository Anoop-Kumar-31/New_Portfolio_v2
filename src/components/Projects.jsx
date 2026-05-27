import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { projects } from '../data';
import { FiFilter } from 'react-icons/fi';
import ProjectGallery from './ProjectGallery';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('★ Featured');
  const [activeSort, setActiveSort] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryConfig, setGalleryConfig] = useState({ images: [], title: '' });
  const featuredProjects = projects.filter(p => p.isFeatured);

  const categories = ['All', '★ Featured', 'Full-Stack', 'Frontend'];

  const processedProjects = useMemo(() => {
    let filtered = activeCategory === 'All'
      ? [...projects]
      : projects.filter(p => p.category === activeCategory);
    if (activeCategory === '★ Featured') {
      filtered = projects.filter(p => p.isFeatured);
      console.log(filtered);
    }
    return filtered.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return activeSort === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [activeCategory, activeSort]);

  const handleOpenGallery = (images, title) => {
    setGalleryConfig({ images, title });
    setIsGalleryOpen(true);
  };

  const sortBarBg = isDark ? 'bg-slate-900/60 border-slate-700/50' : 'bg-slate-100 border-slate-300';
  const sortActiveBtn = isDark ? 'bg-slate-700 text-cyan-400' : 'bg-white text-cyan-600 shadow';
  const sortInactiveBtn = isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-700';

  return (
    <Section id="projects" title="Featured Work" subtitle="Architecting elegant solutions for complex problems">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Filter */}
        <div className="flex flex-nowrap items-center justify-center gap-2">
          <FiFilter className={isDark ? 'text-slate-500 mr-1' : 'text-slate-400 mr-1'} />
          <div id="categoryFilterBox" className={`flex flex-wrap items-center justify-center gap-2 `} >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 border
              ${activeCategory === cat
                    ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                    : isDark
                      ? 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-500'
                      : 'bg-white border-slate-300 text-slate-500 hover:text-slate-800 hover:border-slate-400'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Controls */}
        <div className={`flex items-center gap-1 p-1.5 rounded-2xl border ${sortBarBg}`}>
          {['newest', 'oldest'].map(sort => (
            <button
              key={sort}
              onClick={() => setActiveSort(sort)}
              className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300
                ${activeSort === sort ? sortActiveBtn : sortInactiveBtn}`}
            >
              {sort}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {processedProjects.slice(0, visibleCount).map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onOpenGallery={handleOpenGallery}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {processedProjects.length === 0 && (
          <div className={`text-center py-20 rounded-3xl border border-dashed
            ${isDark ? 'bg-slate-800/20 border-slate-700' : 'bg-slate-100 border-slate-300'}`}>
            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>No projects found in this category.</p>
          </div>
        )}

        {/* Load More */}
        {processedProjects.length > visibleCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className={`px-8 py-3 border text-xs font-bold rounded-2xl transition-all duration-300 flex items-center gap-2
                ${isDark
                  ? 'bg-slate-800/50 hover:bg-slate-700/50 border-slate-700 text-slate-300'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'
                }`}
            >
              Show More Projects
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
            </button>
          </div>
        )}
      </div>

      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryConfig.images}
        projectTitle={galleryConfig.title}
      />
    </Section>
  );
};

export default Projects;
