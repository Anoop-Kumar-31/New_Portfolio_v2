import { useState } from 'react';
import Section from './Section';
import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { isDark } = useTheme();
  const [sending, setSending] = useState(false);

  const inputCls = `w-full rounded-xl border py-3 px-4 text-sm outline-none focus:ring-2 transition-all duration-200 ${
    isDark
      ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:border-accent focus:ring-accent/20'
      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-accent/10'
  }`;

  const socials = [
    { href: `mailto:${personalInfo.email}`, icon: FaEnvelope, label: personalInfo.email },
    { href: personalInfo.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: personalInfo.github, icon: FaGithub, label: 'GitHub' },
  ];

  return (
    <Section
      id="contact"
      label="Connect"
      title={`Start a <span class="font-serif italic text-accent">conversation.</span>`}
      subtitle="Open to full-time roles, freelance projects, and collaborations."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Let's build something great.
            </h3>
            <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'll review your requirements and provide a clear execution plan within one business day.
            </p>
          </div>

          <div className="space-y-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 group ${
                  isDark
                    ? 'border-white/5 hover:border-accent/30 hover:bg-accent/5'
                    : 'border-slate-100 hover:border-accent/30 hover:bg-accent/5'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="text-accent" size={14} />
                </div>
                <span className={`text-sm font-medium group-hover:text-accent transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <form
          className={`rounded-2xl border p-7 ${isDark ? 'bg-[#191C20] border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}
          action="https://formspree.io/f/mnnegljz"
          method="POST"
          onSubmit={() => setSending(true)}
        >
          <div className="space-y-4">
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
              <input type="text" name="name" required placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
              <input type="email" name="email" required placeholder="your@email.com" className={inputCls} />
            </div>
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
              <textarea name="message" rows="4" required placeholder="Tell me about your project..." className={`${inputCls} resize-none`} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={sending}
              className="w-full bg-accent text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 disabled:opacity-60 text-sm"
            >
              {sending ? 'Sending…' : 'Send Message →'}
            </motion.button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
