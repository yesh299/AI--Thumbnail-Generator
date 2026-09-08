import { FormEvent, useState } from "react";
import { MailIcon, MessageSquareIcon, SendIcon } from "lucide-react";
import { motion } from "motion/react";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
    event.currentTarget.reset();
    toast.success("Thanks for reaching out. We will get back to you soon.");
  };

  return (
    <main className="min-h-screen overflow-hidden px-6 pb-24 pt-32 md:px-16 lg:px-24 xl:px-32">
      <section className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 w-max rounded-full border border-pink-800 bg-pink-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">
            Contact the studio
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Let&apos;s make something people stop for.
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
            Have a question, a feature idea, or a thumbnail that needs a second
            opinion? Send us a note and the Thumblify team will be in touch.
          </p>
          <a
            href="mailto:hello@thumblify.app"
            className="mt-10 flex w-max items-center gap-3 text-slate-200 transition hover:text-pink-400"
          >
            <MailIcon className="size-5 text-pink-500" />
            hello@thumblify.app
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Name
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-lg border border-slate-700 bg-black/30 p-3 text-white outline-none transition placeholder:text-slate-600 focus:border-pink-500"
              />
            </label>
            <label className="text-sm text-slate-300">
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-slate-700 bg-black/30 p-3 text-white outline-none transition placeholder:text-slate-600 focus:border-pink-500"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm text-slate-300">
            What can we help with?
            <div className="relative mt-2">
              <MessageSquareIcon className="absolute left-3 top-3 size-5 text-slate-500" />
              <textarea
                required
                name="message"
                rows={7}
                placeholder="Tell us what is on your mind"
                className="w-full resize-none rounded-lg border border-slate-700 bg-black/30 p-3 pl-11 text-white outline-none transition placeholder:text-slate-600 focus:border-pink-500"
              />
            </div>
          </label>
          <button
            type="submit"
            className="mt-6 flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-medium transition hover:bg-pink-700"
          >
            {isSent ? "Message sent" : "Send message"}
            <SendIcon className="size-4" />
          </button>
        </motion.form>
      </section>
    </main>
  );
}
