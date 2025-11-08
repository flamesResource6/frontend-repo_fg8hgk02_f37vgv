import { useState } from 'react';

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
            <a
              key={p.title}
              href={p.link}
              className={`group relative rounded-xl border border-white/10 bg-white/5 p-5 transition transform hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${active === i ? 'ring-2 ring-white/20' : ''}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs text-white/60">Case study</span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
