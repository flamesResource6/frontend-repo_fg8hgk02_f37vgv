import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus("Thanks! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Let’s work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-white/80"
        >
          Have an idea or project in mind? Drop a message.
        </motion.p>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 grid grid-cols-1 gap-4"
        >
          <input required name="name" placeholder="Your name" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <input required name="email" type="email" placeholder="Your email" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <textarea required name="message" rows="5" placeholder="Tell me about your project" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black shadow transition hover:-translate-y-0.5 hover:bg-white/90">
              Send Message
            </button>
            {status && <span className="text-emerald-400 text-sm">{status}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
