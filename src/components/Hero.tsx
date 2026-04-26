import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import img1 from "../assets/1.WebP";
import img2 from "../assets/2.WebP";
import img3 from "../assets/3.WebP";
import img4 from "../assets/4.WebP";
import heroBg from "../assets/hero.WebP"
import React from "react";

const categories = [
  {
    title: "Oil Paintings",
    count: "124 works",
    bg: img1,
  },
  {
    title: "Watercolor",
    count: "89 works",
    bg: img2,
  },
  {
    title: "Abstract Art",
    count: "67 works",
    bg: img3,
  },
  {
    title: "Sculpture",
    count: "41 works",
    bg: img4,
  },
];

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-[calc(100vh-63px)] bg-cover bg-center relative flex items-center p-5 md:p-10 shadow-2xl"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        {/* Corner frames */}
        <div className="absolute top-5 left-5 w-14 h-14 border-t-2 border-l-2 border-amber-400/50" />
        <div className="absolute bottom-5 right-5 w-14 h-14 border-b-2 border-r-2 border-amber-400/50" />

        {/* Watermark text */}
        <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[6rem] font-bold text-amber-400/5 select-none pointer-events-none [writing-mode:vertical-rl] tracking-widest font-serif">
          ART
        </span>

        <div className="text-white z-10 flex flex-col gap-5 max-w-xl">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-light">
            Gallery Collection · 2025
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-serif font-normal">
            Where <em className="italic text-amber-400">Art</em>
            <br />
            Meets the Soul.
          </h1>

          <p className="text-sm sm:text-base text-white/65 leading-relaxed">
            Explore a curated world of paintings, sculptures, and fine art —
            crafted by visionary artists from around the globe.
          </p>

          <Button className="text-amber-400 cursor-pointer bg-transparent border border-amber-400/60 hover:bg-amber-400/10 text-sm sm:text-base tracking-widest uppercase px-6 py-3 mt-3 w-fit font-light rounded-sm">
            Explore the Gallery
          </Button>
        </div>
      </div>

      {/* Category Section */}
      <div className="flex flex-col justify-center py-10 md:py-20 px-5 md:px-10">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-2">
            Browse by Medium
          </p>
          <h2 className="text-2xl md:text-4xl font-serif font-normal text-foreground">
            Discover <em className="italic text-amber-700">Art Forms</em>
          </h2>
          <div className="w-10 h-px bg-amber-500 my-3" />
          <p className="text-sm md:text-base text-muted-foreground font-light">
            Immerse yourself in every dimension of artistic expression.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[3/4]"
            >
              
              <Card className="group relative w-full h-full overflow-hidden bg-gradient-to-b border-0">
                
                <motion.img
                  src={cat.bg}
                  alt=""
                  loading="lazy"
                  className="transition-transform duration-500 group-hover:scale-110"
                  decoding="async"
                />

              </Card>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-amber-400/50" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-serif text-base md:text-lg font-normal">
                  {cat.title}
                </h3>
                <p className="text-amber-400/80 text-xs uppercase tracking-widest mt-0.5">
                  {cat.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(Hero);
