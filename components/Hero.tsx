"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { img } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.img src={img.hero} alt="" style={{ y: bgY }} className="absolute inset-0 h-[130%] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
      <motion.div style={{ y: orbY }} className="absolute left-[12%] top-1/3 h-56 w-56 rounded-full bg-sky-500/30 blur-3xl" />
      <motion.div style={{ y: orbY }} className="absolute bottom-1/4 right-[10%] h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-5 inline-block rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-300">
          Project ID R26-IM-007 · SLIIT
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
          className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          AR-Enhanced Storybook for Teaching{" "}
          <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">Simple Machines</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Three research components · Interactive Media · STEM Education
        </motion.p>
        <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900">
          Explore the structure ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
