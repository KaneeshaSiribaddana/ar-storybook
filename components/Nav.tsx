"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [["About", "#about"], ["Component 1", "#c1"], ["Component 2", "#c2"], ["Component 3", "#c3"], ["Together", "#together"], ["Contribution", "#contribution"]];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-sm font-bold tracking-wide text-white">R26-IM-007</a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="transition hover:text-white">{l}</a>)}
        </nav>
      </div>
      <motion.div style={{ scaleX }} className="h-0.5 origin-left bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400" />
    </header>
  );
}
