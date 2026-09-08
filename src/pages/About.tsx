import { motion } from "motion/react";
import {
  ArrowRightIcon,
  BotIcon,
  Layers3Icon,
  SparklesIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: SparklesIcon,
    title: "Clarity wins",
    text: "Every thumbnail should make the promise of a video obvious before the first second plays.",
  },
  {
    icon: BotIcon,
    title: "AI with taste",
    text: "We pair fast generation with creative controls so your channel still feels unmistakably yours.",
  },
  {
    icon: Layers3Icon,
    title: "Built for momentum",
    text: "From idea to publish-ready artwork, Thumblify keeps the visual work moving with your content.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-16 lg:px-24 xl:px-32">
      <section className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 w-max rounded-full border border-pink-800 bg-pink-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
            The studio behind the click
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Make the first impression do more work.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Thumblify is an AI thumbnail studio for creators who care about the
            story before the play button. Turn a rough idea into a sharp visual
            direction, then shape it until it feels ready for your audience.
          </p>
        </motion.div>

        <motion.div
          className="relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-950 via-black to-slate-900 p-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute -right-16 -top-20 size-64 rounded-full border-[32px] border-pink-600/20" />
          <div className="absolute bottom-7 left-8 h-px w-2/3 bg-gradient-to-r from-pink-500 to-transparent" />
          <p className="relative max-w-xs text-2xl font-medium leading-relaxed">
            “Great content deserves a thumbnail that makes people stop and
            click.”
          </p>
          <p className="relative mt-10 text-sm text-slate-400">
            Thumblify, for the next upload
          </p>
        </motion.div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            What guides us
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Creative control, minus the blank canvas.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Icon className="size-7 text-pink-500" />
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 flex max-w-6xl flex-col justify-between gap-8 rounded-2xl border border-pink-900/60 bg-pink-950/30 p-8 md:flex-row md:items-center md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            Ready to create?
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Give your next idea a stronger opening frame.
          </h2>
        </div>
        <Link
          to="/generate"
          className="flex w-max items-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-medium transition hover:bg-pink-700"
        >
          Start generating
          <ArrowRightIcon className="size-5" />
        </Link>
      </section>
    </main>
  );
}
