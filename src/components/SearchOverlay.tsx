import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../redux/Slices/ImagesSlice";

const SearchOverlay = ({ open, onClose }: any) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const { searchResults, loading } = useSelector((state: any) => state.image);

  // debounce عشان متحرقش الlimit
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim().length > 0) {
        dispatch(fetchSearchResults({query : query.trim() , page : 2}) as any);
      }
    }, 200);

    return () => clearTimeout(delay);
  }, [query, dispatch]);

  // منع scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center pt-32 px-6"
        >
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-2xl hover:opacity-70"
          >
            ✕
          </button>

          {/* input */}
          <motion.input
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search artwork..."
            className="w-full max-w-xl bg-transparent border-b border-white text-white text-2xl outline-none pb-3 placeholder:text-white/50"
          />

          {/* results */}
          <div className="w-full max-w-6xl mt-10">
            {loading ? (
              <p className="text-white text-center">Loading...</p>
            ) : query.length <= 0 ? (
              <p className="text-white/50 text-center">
                Start typing to search...
              </p>
            ) : searchResults && searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {searchResults.slice(0, 8).map((img: any) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="overflow-hidden rounded cursor-pointer group"
                  >
                    <img
                      src={img.urls.small}
                      alt={img.alt_description || "art"}
                      className="w-full h-40 object-cover group-hover:scale-105 transition"
                    />

                    <div className="p-2 text-xs text-white/70">
                      {img.user.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-white text-center mt-10 text-lg">
                No results found
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
