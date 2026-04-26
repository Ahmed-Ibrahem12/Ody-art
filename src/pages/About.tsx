import { Link } from "react-router-dom";

const values = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b8860b"
        strokeWidth="1.5"
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    title: "Curation over volume",
    desc: "We'd rather show 100 exceptional works than 10,000 mediocre ones. Every listing is reviewed by a human curator — no algorithms, no auto-approvals.",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b8860b"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Radical transparency",
    desc: "Prices are always visible. Artist commissions are fair and disclosed. Collectors deserve full clarity before committing to any work.",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b8860b"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Artists first",
    desc: "Artists keep 80% of every sale — well above industry standard. We also invest in profiles, studio features, and exhibition opportunities.",
  },
];

const team = [
  {
    initials: "LA",
    name: "Layla Amin",
    role: "Founder & CEO",
    bio: "Former curator at the Tate Modern. Founded ArteVista after seeing too many brilliant artists go unnoticed.",
  },
  {
    initials: "MK",
    name: "Marcus Keller",
    role: "Head of Curation",
    bio: "Art historian with 15 years of experience across European and Middle Eastern contemporary art scenes.",
  },
  {
    initials: "SR",
    name: "Sofia Reyes",
    role: "Artist Relations",
    bio: "Practicing sculptor and advocate for emerging artists. Manages our global artist onboarding programs.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "ArteVista is founded in Cairo",
    desc: "Launched with 12 artists and 80 works. Our first sale happened within 48 hours.",
  },
  {
    year: "2020",
    title: "First international expansion",
    desc: "Opened to Europe and Southeast Asia. Reached 200 collectors across 18 countries.",
  },
  {
    year: "2022",
    title: "Launched the Collector's Certificate",
    desc: "Introduced provenance documentation and authenticity certificates for every work.",
  },
  {
    year: "2024",
    title: "1,000th artwork milestone",
    desc: "Partnered with three international art fairs for exclusive online previews.",
  },
  {
    year: "2025",
    title: "ArteVista v2 — the new gallery",
    desc: "Complete redesign focused on discovery, transparency, and a more intimate experience.",
  },
];

const Eyebrow = ({ text }: { text: string }) => (
  <p className="text-[10px] tracking-[.35em] uppercase text-amber-700 mb-1">
    {text}
  </p>
);

const Divider = () => <div className="w-10 h-px bg-amber-700 my-3" />;

const About = () => (
  <div className="bg-white text-stone-900 font-['Cormorant_Garamond',serif] min-h-screen">
    {/* ── Hero ── */}
    <section className="px-6 md:px-10 pt-16 pb-12 border-b border-stone-100 relative">
      <div className="absolute right-10 top-10 font-serif text-[9rem] font-bold text-amber-700/[0.05] leading-none select-none pointer-events-none">
        AV
      </div>
      <Eyebrow text="Our Story · Since 2019" />
      <h1 className="font-serif text-5xl md:text-6xl font-normal leading-tight text-stone-900">
        We believe art
        <br />
        belongs to <em className="italic text-amber-700">everyone.</em>
      </h1>
      <Divider />
      <p className="text-stone-400 font-light text-base max-w-lg leading-relaxed">
        ArteVista was founded on a simple belief — that extraordinary art should
        be accessible, and that every artist deserves a global stage.
      </p>
    </section>

    {/* ── Stats ── */}
    <section className="grid grid-cols-2 md:grid-cols-4 border-b border-stone-100">
      {[
        ["1,200+", "Artworks"],
        ["40+", "Countries"],
        ["850+", "Collectors"],
        ["6", "Years Active"],
      ].map(([num, label]) => (
        <div
          key={label}
          className="py-8 px-6 text-center border-r border-stone-100 last:border-r-0"
        >
          <p className="font-serif text-4xl font-normal text-stone-900">
            {num}
          </p>
          <p className="text-[10px] tracking-[.25em] uppercase text-stone-300 mt-1">
            {label}
          </p>
        </div>
      ))}
    </section>

    {/* ── Mission ── */}
    <section className="grid md:grid-cols-2 border-b border-stone-100">
      <div className="px-6 md:px-10 py-14 border-r border-stone-100">
        <Eyebrow text="Our Mission" />
        <h2 className="font-serif text-3xl font-normal leading-snug">
          Bridging artists
          <br />
          and <em className="italic text-amber-700">collectors</em>
        </h2>
        <Divider />
        <p className="text-stone-400 font-light text-sm leading-loose mb-4">
          ArteVista was born from a frustration with how inaccessible the
          traditional art world felt. Galleries with no prices, auctions for the
          ultra-wealthy, artists struggling to find an audience beyond their
          city.
        </p>
        <p className="text-stone-400 font-light text-sm leading-loose">
          We set out to build something different — a transparent, curator-led
          marketplace where every work is verified, every artist is celebrated,
          and every collector feels confident.
        </p>
      </div>
      <div className="px-6 md:px-10 py-14 flex flex-col gap-6">
        <Eyebrow text="Our Philosophy" />
        <blockquote className="border-l-2 border-amber-700 pl-5">
          <p className="font-serif text-lg italic text-stone-800 leading-relaxed">
            "Art is not what you see, but what you make others see."
          </p>
          <p className="text-[10px] tracking-[.2em] uppercase text-stone-300 mt-2">
            — Edgar Degas
          </p>
        </blockquote>
        <p className="text-stone-400 font-light text-sm leading-loose">
          Every artwork on ArteVista is hand-reviewed by our curatorial team. We
          look for originality, craftsmanship, and emotional resonance — not
          trends or follower counts.
        </p>
        <p className="text-stone-400 font-light text-sm leading-loose">
          Collectors receive full provenance documentation, a certificate of
          authenticity, and direct access to the artist — because trust is the
          foundation of every great collection.
        </p>
      </div>
    </section>

    {/* ── Values ── */}
    <section className="px-6 md:px-10 py-14 border-b border-stone-100">
      <Eyebrow text="What We Stand For" />
      <h2 className="font-serif text-3xl font-normal">
        Our <em className="italic text-amber-700">Values</em>
      </h2>
      <div className="grid md:grid-cols-3 gap-px bg-stone-100 border border-stone-100 rounded-sm overflow-hidden mt-8">
        {values.map((v) => (
          <div key={v.title} className="bg-white p-8">
            <div className="w-9 h-9 border border-stone-200 rounded-full flex items-center justify-center mb-4">
              {v.icon}
            </div>
            <h3 className="font-serif text-base font-normal text-stone-900 mb-2">
              {v.title}
            </h3>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Team ── */}
    <section className="px-6 md:px-10 py-14 border-b border-stone-100">
      <Eyebrow text="The Team" />
      <h2 className="font-serif text-3xl font-normal">
        The people behind <em className="italic text-amber-700">ArteVista</em>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {team.map((m) => (
          <div key={m.name} className="text-center">
            <div className="w-16 h-16 rounded-full border border-stone-200 bg-amber-50 flex items-center justify-center mx-auto mb-4 font-serif text-2xl text-amber-700 font-normal">
              {m.initials}
            </div>
            <p className="font-serif text-base text-stone-900">{m.name}</p>
            <p className="text-[10px] tracking-[.18em] uppercase text-stone-300 mt-1 mb-2">
              {m.role}
            </p>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              {m.bio}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Timeline ── */}
    <section className="px-6 md:px-10 py-14 border-b border-stone-100">
      <Eyebrow text="Our Journey" />
      <h2 className="font-serif text-3xl font-normal">
        From idea to <em className="italic text-amber-700">institution</em>
      </h2>
      <div className="mt-8 pl-6 border-l border-stone-100 flex flex-col gap-8">
        {timeline.map((t) => (
          <div key={t.year} className="relative">
            <div className="absolute -left-[1.6rem] top-1 w-2.5 h-2.5 rounded-full bg-amber-700 border-2 border-white outline outline-1 outline-amber-700" />
            <p className="text-[10px] tracking-[.25em] uppercase text-amber-700 mb-1">
              {t.year}
            </p>
            <p className="font-serif text-base text-stone-900 mb-1">
              {t.title}
            </p>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="px-6 md:px-10 py-16 flex flex-col items-center text-center gap-4">
      <Eyebrow text="Join Us" />
      <h2 className="font-serif text-3xl md:text-4xl font-normal">
        Ready to start your{" "}
        <em className="italic text-amber-700">collection?</em>
      </h2>
      <p className="text-stone-400 font-light text-sm max-w-md leading-relaxed">
        Explore over 1,200 verified works from artists across 40 countries.
        Every piece comes with full documentation and a direct line to its
        creator.
      </p>
      <div className="flex gap-3 flex-wrap justify-center mt-2">
        <Link to="/gallery">
          <button className="text-[10px] tracking-[.22em] uppercase text-white bg-amber-700 border border-amber-700 px-8 py-2.5 rounded-sm hover:bg-amber-800 transition-colors cursor-pointer">
            Explore the Gallery
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-[10px] tracking-[.22em] uppercase text-amber-700 bg-transparent border border-amber-700/40 px-8 py-2.5 rounded-sm hover:bg-amber-50 transition-colors cursor-pointer">
            Meet the Developer
          </button>
        </Link>
      </div>
    </section>
  </div>
);

export default About;
