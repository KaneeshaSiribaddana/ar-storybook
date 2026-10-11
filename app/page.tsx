"use client";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ComponentSection from "@/components/ComponentSection";
import { ParallaxImage, Reveal } from "@/components/Parallax";
import { components, together, img } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-200">
      <Nav />
      <Hero />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-400">About the project</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">One storybook, three research lenses</h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              The AR-Enhanced Storybook for Teaching Simple Machines is a collaborative research project conducted under Project ID <b className="text-white">R26-IM-007</b> at the Sri Lanka Institute of Information Technology (SLIIT).
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              The project explores how Augmented Reality (AR), interactive storytelling, and personalized learning can improve science education for primary school students. It focuses on teaching simple machines through interactive 3D models, visual demonstrations, embedded assessments, and adaptive story experiences.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              The overall research consists of three complementary research components, each investigating a different aspect of AR-based educational technology.
            </p>
          </Reveal>
          <Reveal x={60}>
            <ParallaxImage src={img.vr} alt="Student using AR" className="aspect-[4/3] rounded-3xl ring-1 ring-white/10" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {components.map((c, i) => (
            <motion.a key={c.no} href={`#c${c.no}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12 }} whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black" style={{ color: c.accent }}>0{c.no}</span>
                <img src={c.photo} alt={c.researcher} className="h-16 w-16 rounded-full object-cover object-top ring-2" style={{ ["--tw-ring-color" as string]: c.accent }} />
              </div>
              <h3 className="mt-3 font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.researcher}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {components.map((c, i) => <ComponentSection key={c.no} c={c} flip={i % 2 === 1} />)}

      {/* Together */}
      <section id="together" className="relative overflow-hidden py-28">
        <ParallaxImage src={img.classroom} className="absolute inset-0 opacity-25" strength={120} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-400">Big picture</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">How the research components work together</h2>
            <p className="mt-4 max-w-3xl text-slate-300">Each researcher investigates a distinct but complementary dimension of the AR-enhanced storybook.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {together.map((t, i) => (
              <motion.div key={t.who} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }} whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur" style={{ borderTop: `3px solid ${t.accent}` }}>
                <div className="flex items-center gap-3">
                  <img src={components[i].photo} alt={t.who} className="h-12 w-12 rounded-full object-cover object-top ring-2" style={{ ["--tw-ring-color" as string]: t.accent }} />
                  <p className="text-sm font-semibold" style={{ color: t.accent }}>{t.who}</p>
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.text}</p>
              </motion.div>
            ))}
          </div>
          <Reveal><p className="mt-10 max-w-3xl text-slate-300">Together, these studies provide a broader research perspective on the design and evaluation of AR-enhanced educational experiences for primary science education.</p></Reveal>
        </div>
      </section>

      {/* Contribution */}
      <section id="contribution" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal x={-60}><ParallaxImage src={img.tech} alt="" className="aspect-[4/3] rounded-3xl ring-1 ring-white/10" /></Reveal>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Expected research contribution</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Better AR learning, by design</h2>
            <p className="mt-5 leading-relaxed text-slate-300">The combined research aims to provide insights into how interactive visualization, assessment, personalized storytelling, and adaptive learning mechanisms can support more engaging and effective STEM education.</p>
            <p className="mt-4 leading-relaxed text-slate-300">The findings are expected to inform educators, researchers, and educational technology developers about the design of AR learning systems that support conceptual understanding, learner engagement, and knowledge retention.</p>
            <motion.div whileHover={{ scale: 1.03 }} className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4">
              <span className="text-3xl font-black text-red-400">4</span>
              <span className="text-sm text-slate-200"><b className="text-white">Sustainable Development Goal 4:</b> Quality Education — inclusive and equitable quality education and lifelong learning opportunities.</span>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-xs text-slate-500">
        <p className="mx-auto max-w-3xl"><i>Note: These descriptions summarize the research proposals and their intended contributions. They do not represent confirmed experimental results or guarantee that every proposed feature has already been implemented.</i></p>
        <p className="mt-4">R26-IM-007 · SLIIT · Images via Unsplash</p>
      </footer>
    </main>
  );
}
