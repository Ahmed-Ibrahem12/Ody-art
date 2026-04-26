import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults , fetchImages } from "../redux/Slices/ImagesSlice";


const filters = [
  { label: "All", query: "fine art painting" },
  { label: "Paintings", query: "oil painting art" },
  { label: "Sculptures", query: "sculpture museum" },
  { label: "Photography", query: "art photography" },
  { label: "Abstract", query: "abstract art colorful" },
];

const badges = [
  { label: "Hot", style: "bg-[#fff0e8] text-[#a0420a]" },
  { label: "Top", style: "bg-[#faf0d4] text-[#7a5a00]" },
  { label: "New", style: "bg-[#e8f5f0] text-[#0f6e56]" },
  { label: "Top", style: "bg-[#faf0d4] text-[#7a5a00]" },
];

const prices = ["$3,200", "$5,800", "$4,100", "$7,600"];

const SkeletonCard = () => (
  <div className="rounded-sm overflow-hidden">
    <div className="aspect-[3/4] bg-stone-100 animate-pulse rounded-sm" />
    <div className="pt-3 space-y-2">
      <div className="h-3.5 bg-stone-100 rounded w-4/5 animate-pulse" />
      <div className="h-3 bg-stone-50 rounded w-1/2 animate-pulse" />
    </div>
  </div>
);

const Trending = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const dispatch = useDispatch();
  

  const {images , searchResults, loading } = useSelector(
    (state: any) => state.image,
  );

  useEffect(() => {
    if (activeFilter === 0) {
      dispatch(fetchImages(1) as any)
    } else {

      dispatch(fetchSearchResults({ query: filters[activeFilter].query, page: 1 }) as any);
    }
  }, [activeFilter, dispatch]);

  return (
    <section className="w-full bg-white px-6 py-14">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <div>
          <p className="text-[10px] tracking-[.35em] uppercase text-amber-700 mb-1">
            Collector's Choice · 2025
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-normal">
            Most <em className="italic text-amber-700">Coveted</em> Works
          </h2>
          <div className="w-9 h-px bg-amber-700 mt-3" />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-8">
        {filters.map((f, i) => (
          <button
            key={f.label}
            onClick={() => setActiveFilter(i)}
            className={`text-[10px] tracking-[.18em] uppercase px-3.5 py-1.5 border rounded-sm transition-all ${
              activeFilter === i
                ? "bg-amber-700 text-white border-amber-700 font-bold"
                : "text-stone-400 border-stone-400 font-bold hover:text-amber-700 hover:border-amber-700 cursor-pointer"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {loading
            ? Array.from({ length: 4 }).slice(0,4).map((_, i) => <SkeletonCard key={i} />)
            : (activeFilter === 0 ? images : searchResults || []).map((photo: string, i: number) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredId(photo.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden border border-stone-100 rounded-sm aspect-[3/4]">
                    <motion.img
                      src={photo.urls.small}
                      alt={photo.alt_description ?? "artwork"}
                      className="w-full h-full object-cover"
                      animate={{ scale: hoveredId === photo.id ? 1.07 : 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Rank */}
                    <span className="absolute top-2 left-2.5 font-serif text-[1.6rem] font-bold text-black/[0.07]">
                      0{i + 1}
                    </span>

                    {/* Badge */}
                    <span
                      className={`absolute top-2 right-2 text-[8px] tracking-[.2em] uppercase px-2 py-1 rounded-sm ${
                        badges[i % badges.length].style
                      }`}
                    >
                      {badges[i % badges.length].label}
                    </span>

                    {/* Hover */}
                    <motion.div
                      className="absolute inset-0 bg-stone-900/60 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === photo.id ? 1 : 0 }}
                    >
                      <button className="text-[10px] tracking-[.22em] uppercase text-white border px-4 py-1.5">
                        Quick View
                      </button>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="pt-3 px-0.5">
                    <div className="flex justify-between">
                      <p className="text-sm">
                        {photo.alt_description || "Untitled Work"}
                      </p>
                      <p>{prices[i % prices.length]}</p>
                    </div>

                    <div className="flex justify-between text-xs mt-1">
                      <span>{photo.user.name}</span>
                      <span className="flex items-center gap-1">
                        <FiHeart />
                        {photo.likes}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Trending;
