import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-white/80 max-w-3xl"
        >
          I’m a creative developer focused on building immersive web experiences. My work blends strong visual design with robust engineering. I love working with 3D, motion, and real-time interactivity to craft memorable products.
        </motion.p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: 'Focus', copy: 'Interactive UI, 3D Web, Design Systems' },
            { title: 'Stack', copy: 'React, Three.js, Spline, Node, FastAPI' },
            { title: 'Values', copy: 'Clarity, performance, and playful details that delight users' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{card.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
