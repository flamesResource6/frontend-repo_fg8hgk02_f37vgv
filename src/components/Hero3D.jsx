import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md text-xs font-medium mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Interactive 3D Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Tech-forward, playful, and modern.
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Explore my work through an immersive 3D experience. Scroll, interact, and discover the projects that define my craft.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
