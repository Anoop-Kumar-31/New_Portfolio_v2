import { useState } from 'react';
import Section from './Section';
import { personalInfo } from '../data';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { isDark } = useTheme();
  const [sending, setSending] = useState(false);
  const cardBase = isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-slate-200';
  const inputBase = isDark
    ? 'bg-slate-900/60 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20'
    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20';

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build something great together">
      <div className={`rounded-2xl border shadow-lg overflow-hidden ${cardBase}`}>
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500" />
        <div className="grid md:grid-cols-2 gap-0">

          {/* Left info */}
          <div className={`p-8 flex flex-col justify-center ${isDark ? 'border-r border-slate-700/50' : 'border-r border-slate-100'}`}>
            <h3 className={`text-2xl font-extrabold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Let's Collaborate</h3>
            <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'm open to new opportunities, freelance projects, and collaborations. Whether you have a specific project or just want to connect — my inbox is always open.
            </p>

            <div className="space-y-4">
              <a
                href={`https://mail.google.com/mail?view=cm&fs=1&to=${personalInfo.email}&su=Visited_your_portfolio`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group
                  ${isDark ? 'border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/5' : 'border-slate-200 hover:border-cyan-400 hover:bg-cyan-50'}`}
              >
                <div className="p-2 rounded-lg bg-cyan-500/10">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Email</p>
                  <p className={`text-sm font-semibold group-hover:text-cyan-400 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group
                  ${isDark ? 'border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5' : 'border-slate-200 hover:border-blue-400 hover:bg-blue-50'}`}
              >
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <FaLinkedin className="text-blue-400" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>LinkedIn</p>
                  <p className={`text-sm font-semibold group-hover:text-blue-400 transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>anoop--kumar</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group
                  ${isDark ? 'border-slate-700 hover:border-slate-500 hover:bg-slate-700/50' : 'border-slate-200 hover:border-slate-400 hover:bg-slate-100'}`}
              >
                <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                  <FaGithub className={isDark ? 'text-slate-300' : 'text-slate-700'} />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>GitHub</p>
                  <p className={`text-sm font-semibold transition-colors ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>Anoop-Kumar-31</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right form */}
          <form
            className="p-8 space-y-4"
            action="https://formspree.io/f/mnnegljz"
            method="POST"
            onSubmit={() => setSending(true)}
          >
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Your Name</label>
              <input
                type="text" name="name" required
                placeholder="Anoop Kumar"
                className={`w-full rounded-xl border py-3 px-4 text-sm outline-none focus:ring-2 transition-all duration-200 ${inputBase}`}
              />
            </div>
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Your Email</label>
              <input
                type="email" name="email" required
                placeholder="anoop.kumar@company.com"
                className={`w-full rounded-xl border py-3 px-4 text-sm outline-none focus:ring-2 transition-all duration-200 ${inputBase}`}
              />
            </div>
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
              <textarea
                name="message" rows="5" required
                placeholder="Tell me about your project or opportunity..."
                className={`w-full rounded-xl border py-3 px-4 text-sm outline-none focus:ring-2 transition-all duration-200 resize-none ${inputBase}`}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              disabled={sending}
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-70"
            >
              {sending ? 'Sending...' : <span className="flex items-center justify-center gap-2">Send Message <FaEnvelope size={13} /></span>}
            </motion.button>
            <p className={`text-xs text-center ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
              Or click the Email link to send directly via Gmail
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
