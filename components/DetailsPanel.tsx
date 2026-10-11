"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Component } from "@/lib/data";
import type { Details, Mark } from "@/lib/details";
import { Reveal } from "./Parallax";

const TABS = ["Research gap", "Questions & objectives", "Method", "System", "Evaluation", "Plan & budget"] as const;
type Tab = (typeof TABS)[number];

const fmt = (n: number) => n.toLocaleString("en-US");

function Cell({ m, accent, hi }: { m: Mark; accent: string; hi: boolean }) {
  const base = "inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold";
  if (m === "y") return <span className={base} style={{ background: hi ? accent : "#10b98133", color: hi ? "#0f172a" : "#34d399" }}>✓</span>;
  if (m === "p") return <span className={`${base} bg-amber-400/20 text-amber-300`}>Partial</span>;
  return <span className={`${base} bg-white/5 text-slate-500`}>✗</span>;
}

function Card({ children, i = 0 }: { children: React.ReactNode; i?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5">{children}</motion.div>
  );
}

export default function DetailsPanel({ c, d }: { c: Component; d: Details }) {
  const [tab, setTab] = useState<Tab>("Research gap");
  const h = (t: string) => <h4 className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: c.accent }}>{t}</h4>;

  return (
    <Reveal className="relative mx-auto mt-16 max-w-6xl px-5">
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur sm:p-8">
        <div className="-mx-1 flex gap-1 overflow-x-auto pb-1">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${tab === t ? "text-slate-900" : "text-slate-300 hover:text-white"}`}>
              {tab === t && <motion.span layoutId={`tab-${c.no}`} className="absolute inset-0 rounded-full" style={{ background: c.accent }} transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="mt-8">
            {tab === "Research gap" && (
              <div className="space-y-8">
                <p className="max-w-3xl text-slate-300">{d.gapIntro}</p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {d.gaps.map((g, i) => (
                    <Card key={g.title} i={i}>
                      <span className="text-3xl font-black" style={{ color: c.accent }}>{String(i + 1).padStart(2, "0")}</span>
                      <h5 className="mt-2 font-bold text-white">{g.title}</h5>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.text}</p>
                    </Card>
                  ))}
                </div>
                {d.response && (
                  <div>
                    {h("How this research responds")}
                    <ul className="grid gap-2 md:grid-cols-2">
                      {d.response.map((r) => <li key={r} className="flex gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-200"><span style={{ color: c.accent }}>→</span>{r}</li>)}
                    </ul>
                  </div>
                )}
                <div>
                  {h("Research gap comparison")}
                  <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead>
                        <tr className="bg-white/5 text-xs uppercase tracking-wide text-slate-400">
                          <th className="px-4 py-3">Research aspect</th>
                          {d.table.cols.map((col, i) => (
                            <th key={col} className="px-3 py-3 text-center" style={i === d.table.cols.length - 1 ? { color: c.accent } : undefined}>{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {d.table.rows.map(([label, marks], r) => (
                          <motion.tr key={label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: r * 0.06 }} className="border-t border-white/10">
                            <td className="px-4 py-3 text-slate-200">{label}</td>
                            {marks.map((m, i) => (
                              <td key={i} className="px-3 py-3 text-center" style={i === marks.length - 1 ? { background: c.accent + "14" } : undefined}>
                                <Cell m={m} accent={c.accent} hi={i === marks.length - 1} />
                              </td>
                            ))}
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {tab === "Questions & objectives" && (
              <div className="space-y-8">
                {d.mainQuestion && (
                  <div className="rounded-2xl border p-6" style={{ borderColor: c.accent + "55", background: c.accent + "10" }}>
                    {h("Main research question")}
                    <p className="text-lg leading-relaxed text-white">{d.mainQuestion}</p>
                  </div>
                )}
                {d.subQuestions && (
                  <div>
                    {h("Sub research questions")}
                    <div className="grid gap-3">{d.subQuestions.map((q, i) => <Card key={i} i={i}><p className="text-sm leading-relaxed text-slate-200">{q}</p></Card>)}</div>
                  </div>
                )}
                <div>
                  {h("Main objective")}
                  <p className="text-slate-200">{d.mainObjective}</p>
                </div>
                <div>
                  {h("Specific objectives")}
                  <ol className="grid gap-3 md:grid-cols-2">
                    {d.objectives.map((o, i) => (
                      <Card key={i} i={i}><div className="flex gap-3"><span className="font-black" style={{ color: c.accent }}>{i + 1}</span><p className="text-sm leading-relaxed text-slate-300">{o}</p></div></Card>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {tab === "Method" && (
              <div className="space-y-8">
                <div>{h("Research approach")}<p className="max-w-3xl leading-relaxed text-slate-300">{d.approach}</p></div>
                {d.steps && (
                  <div className="flex flex-wrap items-stretch gap-2">
                    {d.steps.map((s, i) => (
                      <motion.div key={s} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-2">
                        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"><span className="mr-2 font-bold" style={{ color: c.accent }}>{i + 1}</span>{s}</div>
                        {i < d.steps!.length - 1 && <span className="text-slate-500">→</span>}
                      </motion.div>
                    ))}
                  </div>
                )}
                <div>
                  {h("Technical methods")}
                  <div className="grid gap-4 md:grid-cols-2">
                    {d.techniques.map((t, i) => <Card key={t.name} i={i}><h5 className="font-bold text-white">{t.name}</h5><p className="mt-1 text-sm text-slate-400">{t.text}</p></Card>)}
                  </div>
                </div>
                <div>
                  {h("Tools & platforms")}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {d.tools.map(([n, p]) => <div key={n} className="rounded-xl border border-white/10 px-4 py-3"><p className="font-semibold text-white">{n}</p><p className="text-xs text-slate-400">{p}</p></div>)}
                  </div>
                </div>
              </div>
            )}

            {tab === "System" && (
              <div>
                {h("Core modules")}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {d.modules.map((m, i) => (
                    <Card key={m.name} i={i}>
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-black text-slate-900" style={{ background: c.accent }}>{i + 1}</div>
                      <h5 className="font-bold text-white">{m.name}</h5>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{m.text}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {tab === "Evaluation" && (
              <div className="space-y-8">
                <div>
                  {h(d.evalTitle)}
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {d.metrics.map((m, i) => (
                      <Card key={m.name} i={i}><p className="font-semibold text-white">{m.name}</p>{m.text && <p className="mt-1 text-sm text-slate-400">{m.text}</p>}</Card>
                    ))}
                  </div>
                </div>
                {d.ethics && (
                  <div>
                    {h("Ethics, privacy & safeguards")}
                    <ul className="grid gap-2 md:grid-cols-2">{d.ethics.map((e) => <li key={e} className="flex gap-3 text-sm text-slate-300"><span style={{ color: c.accent }}>✓</span>{e}</li>)}</ul>
                  </div>
                )}
              </div>
            )}

            {tab === "Plan & budget" && (
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  {h("Timeline")}
                  <ol className="relative space-y-4 border-l border-white/15 pl-6">
                    {d.plan.map((p, i) => (
                      <motion.li key={p.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className="relative">
                        <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full" style={{ background: c.accent }} />
                        <p className="text-sm font-bold" style={{ color: c.accent }}>{p.when}</p>
                        <p className="text-slate-200">{p.label}</p>
                      </motion.li>
                    ))}
                  </ol>
                  {d.planNote && <p className="mt-5 text-xs text-slate-500">{d.planNote}</p>}
                </div>
                <div>
                  {h("Estimated budget (LKR)")}
                  <div className="space-y-3">
                    {d.budget.map((b, i) => (
                      <div key={b.label}>
                        <div className="flex justify-between gap-4 text-sm"><span className="text-slate-300">{b.label}</span><span className="font-mono text-white">{b.lkr === null ? "Free" : fmt(b.lkr)}</span></div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div initial={{ width: 0 }} animate={{ width: b.lkr === null ? "2%" : `${(b.lkr / Math.max(...d.budget.map((x) => x.lkr ?? 0))) * 100}%` }} transition={{ delay: 0.1 + i * 0.07, duration: 0.7 }} className="h-full rounded-full" style={{ background: c.accent }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-baseline justify-between border-t border-white/10 pt-4">
                    <span className="text-sm text-slate-400">Total estimated budget</span>
                    <span className="text-2xl font-black text-white">LKR {fmt(d.total)}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
