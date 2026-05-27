import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ProjectGallery = ({ images, isOpen, onClose, projectTitle }) => {
    const { isDark } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClose = (e) => {
        setCurrentIndex(0);
        onClose();
    };

    const handleNext = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

    if (!isOpen) return null;

    const overlayBg = isDark ? 'bg-slate-950/70' : 'bg-slate-200/70';
    const closeBtnBg = isDark ? 'bg-slate-800/60 hover:bg-slate-700' : 'bg-white/80 hover:bg-white';
    const closeBtnTxt = isDark ? 'text-white' : 'text-slate-700';
    const titleTxt = isDark ? 'text-white' : 'text-slate-900';
    const subTxt = isDark ? 'text-slate-400' : 'text-slate-500';
    const navBtnBg = isDark ? 'bg-slate-800/50 hover:bg-cyan-500' : 'bg-white/80 hover:bg-cyan-500 hover:text-white';
    const navBtnTxt = isDark ? 'text-white' : 'text-slate-700';
    const imageBg = isDark ? 'bg-slate-900 border-slate-700/50' : 'bg-white border-slate-300/60';
    const dotInactive = isDark ? 'bg-slate-600 hover:bg-slate-400' : 'bg-slate-300 hover:bg-slate-500';
    const swipeHint = isDark ? 'text-slate-500' : 'text-slate-400';

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`fixed inset-0 z-100000 flex items-center justify-center backdrop-blur-xl p-4 md:p-8 h-screen w-screen overflow-hidden ${overlayBg}`}
                onClick={handleClose}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className={`absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full transition-all duration-300 z-50 group shadow-lg ${closeBtnBg} ${closeBtnTxt}`}
                >
                    <FiX className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 pr-16 md:pr-0">
                    <h3 className={`font-bold text-base md:text-xl line-clamp-1 md:line-clamp-none ${titleTxt}`}>{projectTitle}</h3>
                    <p className={`text-[10px] md:text-sm font-medium ${subTxt}`}>
                        {currentIndex + 1} / {images.length}
                    </p>
                </div>

                {/* Carousel */}
                <div
                    className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-full flex items-center justify-center">
                        {/* Desktop Nav Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className={`absolute left-0 md:-left-20 p-4 rounded-full transition-all duration-300 z-50 hidden lg:block shadow ${navBtnBg} ${navBtnTxt}`}
                                >
                                    <FiChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className={`absolute right-0 md:-right-20 p-4 rounded-full transition-all duration-300 z-50 hidden lg:block shadow ${navBtnBg} ${navBtnTxt}`}
                                >
                                    <FiChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Main Image */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) handleNext();
                                else if (swipe > swipeConfidenceThreshold) handlePrev();
                            }}
                            className={`flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border cursor-grab active:cursor-grabbing h-[65vh] md:h-[75vh] md:w-[80vw] w-[90vw] ${imageBg}`}
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                                className="pointer-events-none md:h-full md:w-auto w-full h-auto"
                            />
                        </motion.div>
                    </div>

                    {/* Swipe hint */}
                    <div className={`lg:hidden text-[10px] uppercase tracking-widest font-bold animate-pulse ${swipeHint}`}>
                        Swipe to browse
                    </div>

                    {/* Dots */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-[80vw]">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`h-1.5 md:h-2 rounded-full transition-all duration-300
                                    ${currentIndex === idx
                                        ? 'bg-cyan-500 w-4 md:w-6'
                                        : `w-1.5 md:w-2 ${dotInactive}`
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectGallery;
