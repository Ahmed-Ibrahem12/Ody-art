import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ── Brand ── */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-xl font-normal text-stone-900 cursor-pointer">
            Arte<em className="italic text-amber-700">Vista</em>
          </h2>
          <div className="w-8 h-px bg-amber-700" />
          <p className="text-sm text-stone-400 leading-relaxed font-light">
            A curated gallery of fine art and contemporary works — connecting
            collectors with visionary artists from around the globe.
          </p>
          {/* Socials */}
          <div className="flex gap-3 mt-1">
            {[
              { icon: <FiInstagram size={15} />, label: "Instagram" },
              { icon: <FiTwitter size={15} />, label: "Twitter" },
              { icon: <RiPinterestLine size={15} />, label: "Pinterest" },
              { icon: <FiMail size={15} />, label: "Email" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-8 h-8 border border-stone-200 rounded-sm flex items-center justify-center text-stone-400 hover:border-amber-700 hover:text-amber-700 transition-all cursor-pointer bg-transparent"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* ── Explore ── */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] tracking-[.3em] uppercase text-amber-700 font-medium">
            Explore
          </p>
          <ul className="flex flex-col gap-2.5">
            {[
              "Gallery",
              "Trending Works",
              "New Arrivals",
              "Sculptures",
              "Photography",
              "Abstract Art",
            ].map((item) => (
              <li
                key={item}
                className="text-sm text-stone-400 hover:text-amber-700 cursor-pointer transition-colors font-light"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Company ── */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] tracking-[.3em] uppercase text-amber-700 font-medium">
            Company
          </p>
          <ul className="flex flex-col gap-2.5">
            {[
              "About Us",
              "Our Artists",
              "Exhibitions",
              "Press",
              "Contact",
              "Careers",
            ].map((item) => (
              <li
                key={item}
                className="text-sm text-stone-400 hover:text-amber-700 cursor-pointer transition-colors font-light"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Newsletter ── */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] tracking-[.3em] uppercase text-amber-700 font-medium">
            Newsletter
          </p>
          <p className="text-sm text-stone-800 font-serif font-normal leading-snug">
            First access to new works &amp; exclusive collector previews.
          </p>
          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="text-sm border-stone-200 rounded-sm focus:border-amber-700 focus:ring-0 font-light"
            />
            <Button className="bg-amber-700 hover:bg-amber-800 text-white text-[10px] tracking-[.2em] uppercase rounded-sm font-normal h-9">
              Subscribe
            </Button>
          </div>
          <p className="text-[11px] text-stone-300 font-light">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
      </div>

      {/* ── Bottom ── */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-stone-300 tracking-wide font-light">
          © 2026 ArteVista. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
            <span
              key={item}
              className="text-[11px] text-stone-300 hover:text-amber-700 cursor-pointer transition-colors font-light"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
