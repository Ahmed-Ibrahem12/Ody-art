import { useState } from "react";

const contactItems = [
  {
    rank: "01",
    label: "Email",
    value: "ahmedibrahem8642@gmail.com",
    copyText: "ahmedibrahem8642@gmail.com",
    href: "mailto:ahmedibrahem8642@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-amber-800 fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    rank: "02",
    label: "Phone",
    value: "+20 115 302 5370",
    copyText: "+201153025370",
    href: "tel:+201153025370",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-amber-800 fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.34 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="w-full bg-white px-6 py-14">
      {/* Header */}
      <div className="mb-6">
        <p className="text-[10px] tracking-[.35em] uppercase text-amber-700 mb-1">
          Collector's Choice · 2025 · Get in Touch
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-normal">
          Ahmed <em className="italic text-amber-700">Ibrahim</em> Rizk
        </h2>
        <p className="text-sm font-light text-stone-400 tracking-widest mt-1">
          Frontend Developer · React & TypeScript
        </p>
        <div className="w-9 h-px bg-amber-700 mt-3" />
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2.5">
        {contactItems.map((item) => (
          <div
            key={item.rank}
            onClick={() => handleCopy(item.copyText, item.rank)}
            className="relative border border-stone-200 rounded-sm p-4 cursor-pointer transition-all hover:border-amber-700 hover:bg-amber-50/30 hover:-translate-y-0.5 group"
          >
            <span className="absolute top-1.5 left-2.5 font-serif text-2xl font-bold text-black/[0.06]">
              {item.rank}
            </span>

            <button
              className={`absolute top-2.5 right-2.5 text-[9px] tracking-[.15em] uppercase border px-1.5 py-0.5 rounded-sm transition-all ${
                copied === item.rank
                  ? "border-amber-700 text-amber-700 bg-amber-50"
                  : "border-stone-200 text-stone-300 group-hover:border-amber-700 group-hover:text-amber-700"
              }`}
              onClick={(e) => { e.stopPropagation(); handleCopy(item.copyText, item.rank); }}
            >
              {copied === item.rank ? "Copied!" : "Copy"}
            </button>

            <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center mb-2">
              {item.icon}
            </div>

            <p className="text-[9px] tracking-[.3em] uppercase text-stone-300 mb-1">{item.label}</p>
            <a
              href={item.href}
              className="text-sm text-stone-800 hover:text-amber-700 break-all"
              onClick={(e) => e.stopPropagation()}
            >
              {item.value}
            </a>
          </div>
        ))}

        {/* GitHub — full width */}
        <div className="border border-stone-200 rounded-sm p-4 transition-all hover:border-amber-700 hover:bg-amber-50/30 hover:-translate-y-0.5 sm:col-span-2 relative">
          <span className="absolute top-1.5 left-2.5 font-serif text-2xl font-bold text-black/[0.06]">03</span>
          <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center mb-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-amber-800 fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>
          <p className="text-[9px] tracking-[.3em] uppercase text-stone-300 mb-1">GitHub</p>
          <a
            href="https://github.com/Ahmed-Ibrahem12"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-stone-800 hover:text-amber-700"
          >
            github.com/Ahmed-Ibrahem12
          </a>
        </div>
      </div>

      {/* Available Badge */}
      <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-sm px-3.5 py-2.5 mb-10">
        <span className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
        <span className="text-xs text-amber-900">
          Available for work · Open to freelance &amp; full-time opportunities
        </span>
      </div>

      {/* Contact Form */}
      <div className="border-t border-stone-100 pt-8">
        <p className="text-[10px] tracking-[.3em] uppercase text-stone-400 mb-5">Send a message</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] tracking-[.25em] uppercase text-stone-300">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border border-stone-200 rounded-sm px-3 py-2 text-sm text-stone-800 placeholder:text-stone-300 outline-none focus:border-amber-700 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] tracking-[.25em] uppercase text-stone-300">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="border border-stone-200 rounded-sm px-3 py-2 text-sm text-stone-800 placeholder:text-stone-300 outline-none focus:border-amber-700 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <label className="text-[9px] tracking-[.25em] uppercase text-stone-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={4}
            className="border border-stone-200 rounded-sm px-3 py-2 text-sm text-stone-800 placeholder:text-stone-300 outline-none focus:border-amber-700 transition-colors resize-none"
          />
        </div>

        <button className="flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white text-[10px] tracking-[.18em] uppercase px-5 py-2.5 rounded-sm transition-colors group">
          Send message
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-white fill-none stroke-2 transition-transform group-hover:translate-x-0.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Contact;
