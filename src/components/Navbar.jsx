import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Play, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-colors ${
        scrolled ? 'bg-black/50' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <button
          onClick={() => scrollToId('home')}
          className="group inline-flex items-center gap-2 text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
            <Rocket className="h-4 w-4 text-white" />
          </span>
          <span className="font-semibold tracking-tight">My Interactive Portfolio</span>
        </button>
        <div className="hidden items-center gap-2 md:flex">
          {[
            { id: 'home', label: 'Home' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollToId('projects')}
          className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
        >
          <Play className="h-4 w-4" />
          <span>Explore</span>
          <Sparkles className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
        </button>
      </div>
    </motion.nav>
  );
}
