import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from './Section';
import { hireReadiness } from '../data';
import { useTheme } from '../context/ThemeContext';

const CARD_GRADIENTS = [
    'from-cyan-500/10 to-blue-500/5 border-cyan-500/20 hover:border-cyan-400/50',
    'from-violet-500/10 to-indigo-500/5 border-violet-500/20 hover:border-violet-400/50',
    'from-amber-500/10 to-orange-500/5 border-amber-500/20 hover:border-amber-400/50',
    'from-emerald-500/10 to-teal-500/5 border-emerald-500/20 hover:border-emerald-400/50',
    'from-pink-500/10 to-rose-500/5 border-pink-500/20 hover:border-pink-400/50',
    'from-sky-500/10 to-cyan-500/5 border-sky-500/20 hover:border-sky-400/50',
];
const CARD_GRADIENTS_LIGHT = [
    'from-cyan-50 to-blue-50 border-cyan-200 hover:border-cyan-400',
    'from-violet-50 to-indigo-50 border-violet-200 hover:border-violet-400',
    'from-amber-50 to-orange-50 border-amber-200 hover:border-amber-400',
    'from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-400',
    'from-pink-50 to-rose-50 border-pink-200 hover:border-pink-400',
    'from-sky-50 to-cyan-50 border-sky-200 hover:border-sky-400',
];

const CapabilityCard = ({ capability, index }) => {
    const { isDark } = useTheme();
    const [tapped, setTapped] = useState(false);
    const gradient = isDark ? CARD_GRADIENTS[index % CARD_GRADIENTS.length] : CARD_GRADIENTS_LIGHT[index % CARD_GRADIENTS_LIGHT.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { setTapped(true); setTimeout(() => setTapped(false), 500); }}
            className={`bg-gradient-to-br ${gradient} border rounded-2xl p-6 cursor-pointer transition-all duration-300`}
        >
            <motion.div
                className={`text-4xl mb-3 w-fit transition-all duration-300 ${isDark ? 'drop-shadow-lg' : 'drop-shadow-md'}`}
                style={isDark ? { color: capability.color, filter: `drop-shadow(0 0 12px ${capability.color}99)` } : { color: capability.color }}
                animate={tapped ? { scale: 1.3, rotate: -15 } : { scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <capability.icon />
            </motion.div>
            <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{capability.title}</h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{capability.description}</p>
        </motion.div>
    );
};

const HireReadiness = () => {
    const { isDark } = useTheme();
    return (
        <Section id="hire-readiness" title={hireReadiness.title} subtitle="Skills I can apply from day one">
            {/* Available badge */}
            <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className={`text-sm font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Available Now — Ready to contribute from day one</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hireReadiness.capabilities.map((capability, index) => (
                    <CapabilityCard key={index} capability={capability} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-12 text-center"
            >
                <p className={`text-lg mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Ready to deliver value from <span className="gradient-text font-bold">day one</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.5)] hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                        Let's Talk
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`font-bold py-3 px-8 rounded-full border transition-all duration-300
              ${isDark ? 'border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400' : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600'}`}
                    >
                        View My Work
                    </motion.a>
                </div>
            </motion.div>
        </Section>
    );
};

export default HireReadiness;
