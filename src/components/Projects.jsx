import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Immersive Product Showcase',
    tags: ['Three.js', 'Spline', 'UI/UX'],
    desc: 'Interactive 3D product page with smooth camera transitions and responsive layouts.',
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    tags: ['React', 'WebSockets'],
    desc: 'Live metrics with beautiful charts and subtle motion for a modern analytics experience.',
    link: '#',
  },
  {
    title: 'Creative Portfolio',
    tags: ['Next.js', 'Framer Motion'],
    desc: 'Animated case studies, auto dark-mode, and delightful microinteractions throughout.',
    link: '#',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-black/95 text-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl bg-gradient-to-b from-fuchsia-500/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A mix of client work and personal explorations focused on interaction, performance, and polish.
            </p>
          </div>
          <div className="flex gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`h-2 w-8 rounded-full transition ${active === i ? 'bg-white' : 'bg-white/30'}`}
                aria-label={`Show ${p.title}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${active === i ? 'ring-2 ring-white/20' : ''}`}
            >
              <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/10 via-indigo-500/10 to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs text-white/60">Case study</span>
              </div>
              <p className="relative mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
