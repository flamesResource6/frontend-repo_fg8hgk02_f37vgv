import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s work together</h2>
        <p className="mt-3 text-white/80">Have an idea or project in mind? Drop a message.</p>
        <form onSubmit={submit} className="mt-8 grid grid-cols-1 gap-4">
          <input required name="name" placeholder="Your name" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <input required name="email" type="email" placeholder="Your email" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <textarea required name="message" rows="5" placeholder="Tell me about your project" className="w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white/90 transition">
              Send Message
            </button>
            {status && <span className="text-emerald-400 text-sm">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
