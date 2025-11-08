import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-sm font-medium transition-colors hover:text-white/90';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-30 ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-md" />
          <span className="text-white font-semibold tracking-tight group-hover:opacity-90">Flames • Portfolio</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-white/80">
          <button onClick={() => scrollTo('projects')} className={linkBase}>Projects</button>
          <button onClick={() => scrollTo('about')} className={linkBase}>About</button>
          <button onClick={() => scrollTo('contact')} className={linkBase}>Contact</button>
          <a href="#" className="px-3 py-1.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Resume</a>
        </div>
      </nav>
    </header>
  );
}
