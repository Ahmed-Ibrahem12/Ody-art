import { useEffect, useState } from "react";
import {
  fetchImages,
  fetchSearchResults,
} from "../redux/Slices/ImagesSlice";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Pagination Components ──────────────────────────────
const Pagination = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex justify-center">{children}</nav>
);
const PaginationContent = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex gap-1">{children}</ul>
);
const PaginationItem = ({ children }: { children: React.ReactNode }) => (
  <li>{children}</li>
);
const PaginationLink = ({
  isActive,
  onClick,
  children,
  className,
}: {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded border text-sm ${
      isActive
        ? className
        : `${className} border-stone-300 text-stone-700 hover:border-stone-400`
    }`}
  >
    {children}
  </button>
);
const PaginationPrevious = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => (
  <button onClick={onClick} className={className}>
    <ChevronLeft className="w-5 h-5" />
  </button>
);
const PaginationNext = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => (
  <button onClick={onClick} className={className}>
    <ChevronRight className="w-5 h-5" />
  </button>
);

// ── Types ─────────────────────────────────────────────
interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string | null;
  user: { name: string };
  likes: number;
}

// ── Constants ─────────────────────────────────────────
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

const prices = [
  "$3,200",
  "$5,800",
  "$4,100",
  "$7,600",
  "$2,900",
  "$6,700",
  "$1,850",
  "$8,200",
];

// ── Skeleton ───────────────────────────────────────────
const SkeletonCard = () => (
  <div className="rounded-sm overflow-hidden">
    <div className="aspect-[3/4] bg-stone-100 animate-pulse rounded-sm" />
    <div className="pt-3 space-y-2">
      <div className="h-3.5 bg-stone-100 rounded w-4/5 animate-pulse" />
      <div className="h-3   bg-stone-50  rounded w-1/2 animate-pulse" />
    </div>
  </div>
);

// ── Card ───────────────────────────────────────────────
const ArtCard = ({
  photo,
  index,
  hoveredId,
  onEnter,
  onLeave,
  onSelect,
}: {
  photo: Image;
  index: number;
  hoveredId: string | null;
  onEnter: (id: string) => void;
  onLeave: () => void;
  onSelect: (url: string) => void;
}) => {
  const badge = badges[index % badges.length];
  const price = prices[index % prices.length];
  const fmtLikes = (n: number) =>
    n > 999 ? (Math.round(n / 100) / 10).toFixed(1) + "k" : String(n);

  return (
    <motion.div
      key={photo.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="cursor-pointer"
      onMouseEnter={() => onEnter(photo.id)}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="relative overflow-hidden border border-stone-100 rounded-sm aspect-[3/4]">
        <motion.img
          src={photo.urls.small}
          alt={photo.alt_description ?? "artwork"}
          className="w-full h-full object-cover"
          animate={{ scale: hoveredId === photo.id ? 1.07 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Rank watermark */}
        <span className="absolute top-2 left-2.5 font-serif text-[1.6rem] font-bold text-black/[0.07] leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Badge */}
        <span
          className={`absolute top-2 right-2 text-[8px] tracking-[.2em] uppercase px-2 py-1 rounded-sm ${badge.style}`}
        >
          {badge.label}
        </span>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-stone-900/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredId === photo.id ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => onSelect(photo.urls.regular)}
        >
          <button
            onClick={() => onSelect(photo.urls.regular)}
            className="text-[10px] tracking-[.22em] cursor-pointer uppercase text-stone-100 border border-stone-100/50 px-4 py-1.5 rounded-sm hover:bg-white/10 transition-colors"
          >
            Quick View
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="pt-3 px-0.5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="font-serif text-stone-800 text-sm leading-tight line-clamp-2">
            {photo.alt_description
              ? photo.alt_description
                  .split(" ")
                  .slice(0, 5)
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")
              : "Untitled Work"}
          </p>
          <p className="text-amber-700 text-xs whitespace-nowrap font-medium">
            {price}
          </p>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-stone-400 truncate">{photo.user.name}</span>
          <span className="flex items-center gap-1 text-amber-700/70 shrink-0">
            <FiHeart className="w-[11px] h-[11px]" />
            {fmtLikes(photo.likes)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ── Gallery Page ───────────────────────────────────────
const Gallery = () => {
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dispatch = useDispatch();
  const { images, searchResults, loading } = useSelector(
    (state: any) => state.image,
  );

  const isAll = activeFilter === 0;

  // ── fetch on filter or page change
  useEffect(() => {
    if (isAll) {
      dispatch(fetchImages(page) as any);
    } else {
      dispatch(
        fetchSearchResults({ query: filters[activeFilter].query, page }) as any
      );
    }
  }, [activeFilter, page, dispatch]);

  // ── reset page when filter changes
  const handleFilterChange = (i: number) => {
    setActiveFilter(i);
    setPage(1);
  };

  const photos: Image[] = isAll ? images : (searchResults ?? []);
  const totalCount = photos.length > 0 ? `${photos.length * page}+` : "0";

  // ── pagination helpers
  const goNext = () => setPage((p) => p + 1);
  const goPrev = () => setPage((p) => Math.max(1, p - 1));

  return (
    <div className="flex flex-col min-h-screen gap-4 mt-5 p-5 md:p-8">
      {/* ── Header ── */}
      <p className="text-[10px] tracking-[.35em] uppercase text-amber-700">
        Fine Art · Contemporary · 2025
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-stone-900 font-normal leading-tight">
        The <em className="italic text-amber-700">Gallery</em>
      </h1>
      <div className="w-10 h-px bg-amber-700" />

      <div className="flex justify-between items-start flex-wrap gap-6">
        <p className="text-stone-400 md:w-1/2 text-sm leading-relaxed font-light">
          Curated works from emerging and established artists across every
          medium — each piece verified and ready to collect.
        </p>
        <div className="flex gap-8">
          <div className="text-center">
            <p className="font-serif text-3xl text-stone-900 font-normal">
              {totalCount}
            </p>
            <p className="text-[10px] tracking-[.2em] uppercase text-stone-400 mt-1">
              Works
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl text-stone-900 font-normal">
              40+
            </p>
            <p className="text-[10px] tracking-[.2em] uppercase text-stone-400 mt-1">
              Artists
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-amber-700/20" />

      {/* ── Filters ── */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((f, i) => (
          <button
            key={f.label}
            onClick={() => handleFilterChange(i)}
            className={`text-[10px] tracking-[.18em] uppercase px-3.5 py-1.5 border rounded-sm transition-all font-medium ${
              activeFilter === i
                ? "bg-amber-700 text-white border-amber-700"
                : "text-stone-400 border-stone-300 hover:text-amber-700 hover:border-amber-700 cursor-pointer"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <AnimatePresence mode="popLayout">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : photos.map((photo, i) => (
                <ArtCard
                  key={photo.id}
                  photo={photo}
                  index={i}
                  hoveredId={hoveredId}
                  onEnter={setHoveredId}
                  onLeave={() => setHoveredId(null)}
                  onSelect={setSelectedImage}
                />
              ))}
        </AnimatePresence>
      </div>

      {/* ── Pagination ── */}
      {!loading && photos.length > 0 && (
        <div className="flex justify-center py-6 items-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={goPrev}
                  className={
                    page === 1
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {page > 2 && (
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage(1)}
                    className="cursor-pointer"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              )}
              {page > 3 && (
                <PaginationItem>
                  <span className="px-2 text-stone-400">…</span>
                </PaginationItem>
              )}
              {page > 1 && (
                <PaginationItem>
                  <PaginationLink onClick={goPrev} className="cursor-pointer">
                    {page - 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationLink
                  isActive
                  className="bg-amber-700 text-white border-amber-700 hover:bg-amber-700 hover:text-white"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink onClick={goNext} className="cursor-pointer">
                  {page + 1}
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext onClick={goNext} className="cursor-pointer" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
