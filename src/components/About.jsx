export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
        <p className="mt-4 text-white/80 max-w-3xl">
          I’m a creative developer focused on building immersive web experiences. My work blends strong visual design with robust engineering. I love working with 3D, motion, and real-time interactivity to craft memorable products.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">Focus</h3>
            <p className="mt-2 text-white/70 text-sm">Interactive UI, 3D Web, Design Systems</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">Stack</h3>
            <p className="mt-2 text-white/70 text-sm">React, Three.js, Spline, Node, FastAPI</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold">Values</h3>
            <p className="mt-2 text-white/70 text-sm">Clarity, performance, and playful details that delight users</p>
          </div>
        </div>
      </div>
    </section>
  );
}
