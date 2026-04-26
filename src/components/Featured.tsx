import { BsStars } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

const features = [
  {
    icon: <BsStars className="text-2xl text-amber-400" />,
    title: "Museum-Grade Quality",
    desc: "Every artwork is verified by our curators and sourced from certified studios and ateliers worldwide.",
  },
  {
    icon: <BiWorld className="text-2xl text-amber-400" />,
    title: "Artists Worldwide",
    desc: "Discover voices from over 40 countries — from emerging talents to established masters of the craft.",
  },
  {
    icon: <FaRegHeart className="text-2xl text-amber-400" />,
    title: "Collector's Certificate",
    desc: "Each piece ships with a certificate of authenticity and provenance documentation for your collection.",
  },
];

const Featured = () => {
  return (
    <div className="w-full bg-[#1a1207] relative overflow-hidden px-6 py-16">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-amber-400/30" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-amber-400/30" />

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[10px] tracking-[0.35em] uppercase text-amber-400 mb-2">
          Why Choose Us
        </p>
        <h2 className="font-serif text-3xl font-normal text-[#f5f0e8]">
          The Art of <em className="italic text-amber-400">Excellence</em>
        </h2>
        <div className="w-10 h-px bg-amber-400 mx-auto mt-3" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-400/20 border border-amber-400/20 rounded-lg overflow-hidden">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-4 p-10 bg-[#1a1207] hover:bg-amber-400/20 transition relative"
          >
            {/* Icon ring */}
            <div className="w-14 h-14 rounded-full border border-amber-400/40 flex items-center justify-center relative">
              <div className="absolute inset-1 rounded-full border border-amber-400/15" />
              {f.icon}
            </div>

            <h3 className="font-serif text-[#f5f0e8] text-lg font-normal">
              {f.title}
            </h3>
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed font-light">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
