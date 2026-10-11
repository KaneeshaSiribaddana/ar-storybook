"use client";
import { motion } from "framer-motion";
import type { Component } from "@/lib/data";
import { details } from "@/lib/details";
import { ParallaxImage, Reveal } from "./Parallax";
import DetailsPanel from "./DetailsPanel";

export default function ComponentSection({ c, flip }: { c: Component; flip: boolean }) {
  return (
    <section id={`c${c.no}`} className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -top-10 select-none text-[22rem] font-black leading-none opacity-[0.04]"
        style={{ [flip ? "right" : "left"]: "-2rem", color: c.accent }}>{c.no}</div>
      <div className={`relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal x={flip ? 60 : -60}>
          <div className="relative">
            <ParallaxImage src={c.image} alt={c.title} className="aspect-[4/5] rounded-3xl" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/15" style={{ boxShadow: `0 30px 90px -30px ${c.accent}88` }} />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-5 left-6 rounded-2xl border border-white/15 bg-slate-900/90 px-5 py-3 backdrop-blur">
              <p className="text-xs text-slate-400">Student ID</p>
              <p className="font-mono text-sm font-semibold text-white">{c.studentId}</p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: c.accent + "22", color: c.accent }}>
              Research Component {c.no}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{c.title}</h2>
            <div className="mt-5 flex items-center gap-4">
              <motion.img src={c.photo} alt={c.researcher} whileHover={{ scale: 1.08, rotate: 2 }}
                className="h-20 w-20 rounded-full object-cover object-top ring-4" style={{ ["--tw-ring-color" as string]: c.accent }} />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Researcher</p>
                <p className="text-lg font-bold text-white">{c.researcher}</p>
                <p className="font-mono text-sm text-slate-400">{c.studentId}</p>
              </div>
            </div>
          </Reveal>

          {c.summary.map((p, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}><p className="mt-5 leading-relaxed text-slate-300">{p}</p></Reveal>
          ))}

          <Reveal delay={0.2}>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-widest" style={{ color: c.accent }}>Research focus</h3>
          </Reveal>
          <ul className="mt-3 space-y-2">
            {c.focus.map((f, i) => (
              <motion.li key={f} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }} whileHover={{ x: 6 }}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                <span style={{ color: c.accent }}>●</span>{f}
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {c.tags.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{t}</span>)}
          </div>
        </div>
      </div>
      <DetailsPanel c={c} d={details[c.no]} />
    </section>
  );
}
