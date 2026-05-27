import { motion } from 'framer-motion';
import { quickInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle, FaCode } from 'react-icons/fa';

const items = [
    { icon: FaBriefcase, label: 'Experience', value: 'experience', color: 'cyan', iconColor: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { icon: FaCode, label: 'Stack', value: 'stack', color: 'violet', iconColor: 'text-violet-400', bg: 'bg-violet-500/10' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'location', color: 'amber', iconColor: 'text-amber-400', bg: 'bg-amber-500/10' },
    { icon: FaCheckCircle, label: 'Status', value: 'availability', color: 'emerald', iconColor: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

const QuickInfo = () => {
    const { isDark } = useTheme();
    const base = isDark
        ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50'
        : 'bg-gradient-to-br from-white/90 to-slate-50/90 border-slate-200';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`backdrop-blur-md border rounded-2xl p-6 shadow-xl ${base}`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map(({ icon: Icon, label, value, iconColor, bg }) => (
                    <div key={label} className="flex items-start space-x-3">
                        <div className={`p-2.5 rounded-xl ${bg} flex-shrink-0`}>
                            <Icon className={`w-4 h-4 ${iconColor}`} />
                        </div>
                        <div>
                            <p className={`text-xs uppercase tracking-widest font-semibold mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                            <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{quickInfo[value]}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`mt-5 pt-4 border-t ${isDark ? 'border-slate-700/50' : 'border-slate-200'}`}>
                <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Open To</p>
                <div className="flex flex-wrap gap-2">
                    {quickInfo.openTo.map((type) => (
                        <span key={type}
                            className={`px-3 py-1 text-xs font-semibold rounded-full border
                ${isDark ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border-cyan-200'}`}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default QuickInfo;
