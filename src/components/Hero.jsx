import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rX = useTransform(my, [-200, 200], [6, -6]);
  const rY = useTransform(mx, [-200, 200], [-6, 6]);
  const tX = useTransform(mx, [-200, 200], [-8, 8]);
  const tY = useTransform(my, [-200, 200], [8, -8]);

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative h-[100vh] w-full overflow-hidden bg-black text-white"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_50%_120%,rgba(236,72,153,0.16),transparent_40%)]" />

      {/* Animated aura following cursor */}
      <motion.div
        style={{ x: tX, y: tY }}
        className="pointer-events-none absolute -inset-24 opacity-40"
      >
        <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.15),transparent_60%)] blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="pointer-events-auto mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="max-w-2xl will-change-transform"
            style={{ rotateX: rX, rotateY: rY }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Immersive, animated web experiences
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              Playful, modern 3D portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
              className="mt-4 text-white/80 md:text-lg"
            >
              I blend creative coding with functional product design. Explore my recent work and get in touch to bring ideas to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <span className="i-lucide-rocket" />
                View Projects
                <span className="translate-x-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
