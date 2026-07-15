import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { projects } from '../data';
import ProjectCard from './ProjectCard';
import ProjectGallery from './ProjectGallery';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('★ Featured');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryConfig, setGalleryConfig] = useState({ images: [], title: '' });

  const categories = ['★ Featured', 'All'];

  const processedProjects = useMemo(() => {
    if (activeCategory === '★ Featured') return projects.filter(p => p.isFeatured);
    if (activeCategory === 'All') return [...projects];
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleOpenGallery = (images, title) => {
    setGalleryConfig({ images, title });
    setIsGalleryOpen(true);
  };

  return (
    <Section
      id="projects"
      label="Selected Works"
      title={`Build digital products <span class="font-serif italic text-accent">with conviction.</span>`}
      subtitle="High-performance web applications that balance engineering precision with intuitive design."
    >
      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
              ? 'bg-accent border-accent text-white'
              : isDark
                ? 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid — key forces full remount on category change for a clean swap */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {processedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              index={i}
              {...project}
              onOpenGallery={handleOpenGallery}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {processedProjects.length === 0 && (
        <div className={`text-center py-20 rounded-2xl border border-dashed ${isDark ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
          No projects in this category.
        </div>
      )}

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
