
import { motion, useReducedMotion } from "framer-motion";
import {
    FiArrowRight,
    FiArrowUpRight,
    FiBriefcase,
    FiCode,
    FiGithub,
    FiLinkedin,
} from "react-icons/fi";

import { personalInfo } from "../data";
import { useTheme } from "../context/ThemeContext";

const coreSkills = [
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "REST APIs",
    "WebSockets",
];

const Hero = () => {
    const { isDark } = useTheme();
    const reduceMotion = useReducedMotion();

    const headingColor = isDark ? "text-white" : "text-slate-950";
    const mutedColor = isDark ? "text-slate-400" : "text-slate-600";

    const cardStyle = isDark
        ? "border-white/10 bg-[#191C20]"
        : "border-slate-200 bg-white";

    const socialStyle = isDark
        ? "border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
        : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-950";

    const motionProps = reduceMotion
        ? {}
        : {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.55, ease: "easeOut" },
        };

    return (
        <section
            id="me"
            aria-labelledby="hero-title"
            className="scroll-mt-24 py-12 sm:py-16 lg:py-20"
        >
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

                {/* LEFT: Introduction and primary actions */}
                <motion.div {...motionProps} className="min-w-0 order-2 lg:order-1">

                    {/* Hiring status */}
                    <div className="flex items-center gap-2.5 mb-2">
                        <span className={`text-xs font-semibold tracking-[0.15em] uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Full-Stack Developer
                        </span>
                    </div>

                    <h1
                        id="hero-title"
                        className={`max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-3xl lg:text-4xl xl:text-[4rem] ${headingColor}`}
                    >
                        I build full-stack products with{" "} <br />
                        <span className="font-serif italic text-accent">
                            React and Node.js.
                        </span>
                    </h1>

                    {/* Professional introduction */}
                    <p
                        className={`mt-4 font-light max-w-xl text-base leading-8 sm:text-lg ${mutedColor}`}
                    >
                        I&apos;m a full-stack developer with professional internship experience and hands-on experience building web applications. I work across frontend interfaces, REST APIs, authentication, relational databases, and real-time collaboration workflows. I focus on understanding the problem, choosing practical
                        solutions, and writing code that is easy to maintain.
                    </p>

                    {/* Primary actions */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">

                        <a
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#9B4A1A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#843D16] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
                        >
                            View my projects
                            <FiArrowRight aria-hidden="true" size={17} />
                        </a>

                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ${isDark
                                ? "border-white/15 text-slate-200 hover:bg-white/5"
                                : "border-slate-300 text-slate-800 hover:bg-slate-100"
                                }`}
                        >
                            View résumé
                            <FiArrowUpRight aria-hidden="true" size={16} />
                        </a>

                    </div>

                    {/* Professional profiles */}
                    <div className="mt-7 flex flex-wrap items-center gap-3">

                        <span className={`mr-1 text-sm ${mutedColor}`}>
                            Find me on
                        </span>

                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Anoop Kumar on GitHub"
                            className={`inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${socialStyle}`}
                        >
                            <FiGithub aria-hidden="true" size={17} />
                            GitHub
                        </a>

                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Anoop Kumar on LinkedIn"
                            className={`inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${socialStyle}`}
                        >
                            <FiLinkedin aria-hidden="true" size={17} />
                            LinkedIn
                        </a>

                    </div>

                    {/* Core skills */}
                    <div className="mt-10 border-t border-current/10 pt-6">
                        <p
                            className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${mutedColor}`}
                        >
                            Core technologies
                        </p>

                        <ul className="flex flex-wrap gap-2">
                            {coreSkills.map((skill) => (
                                <li
                                    key={skill}
                                    className={`rounded-md border px-3 py-1.5 text-xs font-medium ${isDark
                                        ? "border-white/10 bg-white/[0.025] text-slate-300"
                                        : "border-slate-200 bg-white/70 text-slate-700"
                                        }`}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* RIGHT: Portrait and featured-work card */}
                <motion.div
                    {...(reduceMotion
                        ? {}
                        : {
                            initial: { opacity: 0, y: 12 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                                duration: 0.65,
                                delay: 0.12,
                                ease: "easeOut",
                            },
                        })}
                    className="relative mx-auto w-full max-w-sm lg:max-w-none order-1 lg:order-2"
                >

                    {/* Subtle decorative border */}
                    <div
                        aria-hidden="true"
                        className={`absolute -inset-3 rotate-2 rounded-[2rem] border-2 ${isDark ? "border-white/[0.1]" : "border-slate-300"
                            }`}
                    />

                    {/* Portrait */}
                    <div
                        className={`relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-accent shadow-xl ${isDark ? "bg-[#111315]" : "bg-white"
                            }`}
                    >
                        <img
                            src={personalInfo.MyImage.src}
                            alt={personalInfo.MyImage.alt || "Portrait of Anoop Kumar"}
                            width="600"
                            height="750"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="h-full w-full object-cover object-center"
                        />

                        {/* Readable image overlay */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5"
                        />

                        {/* Nameplate */}
                        <div className="absolute inset-x-0 text-center bottom-0 p-2 sm:p-4 backdrop-blur-md bg-black/35 border-t border-white/10">

                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                                Full-stack development
                            </p>

                            <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                                {personalInfo.name}
                            </p>

                            <p className="mt-0 text-sm text-white/80">
                                React · Node.js · PostgreSQL
                            </p>

                        </div>
                    </div>

                    {/* Featured project shortcut */}
                    <a
                        href="#projects"
                        aria-label="Explore featured projects, including QueueFlow"
                        className={`relative mt-4 flex items-center gap-3 rounded-2xl border p-4 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 ${cardStyle}`}
                    >
                        <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isDark
                                ? "bg-orange-400/10 text-orange-300"
                                : "bg-orange-100 text-orange-800"
                                }`}
                        >
                            <FiCode aria-hidden="true" size={21} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p
                                className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"
                                    }`}
                            >
                                Featured project
                            </p>

                            <p className={`mt-1 font-semibold ${headingColor}`}>
                                QueueFlow
                            </p>

                            <p className={`mt-1 text-sm leading-5 ${mutedColor}`}>
                                Real-time task management and team collaboration
                            </p>
                        </div>

                        <FiArrowUpRight
                            aria-hidden="true"
                            className={`shrink-0 ${isDark ? "text-slate-400" : "text-slate-500"
                                }`}
                            size={20}
                        />
                    </a>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
