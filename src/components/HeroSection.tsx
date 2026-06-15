"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=90"
          alt="Pain artisanal doré sortant du four"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-brown/70" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-6"
        >
          Boulangerie Artisanale · Bordeaux depuis 1987
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          L&apos;art du pain,
          <br />
          <span className="text-gold italic">façonné avec amour</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-cream/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Chaque matin, nos boulangers pétrisent, façonnent et enfournent avec
          la même exigence que celle transmise par Michel Dubois en 1987.
          Le goût de l&apos;authentique, à chaque bouchée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/carte"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-brown font-sans font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
          >
            Découvrir notre carte
          </Link>
          <Link
            href="/a-propos"
            className="inline-flex items-center justify-center gap-2 border border-cream/50 text-cream hover:border-gold hover:text-gold font-sans text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300"
          >
            Notre histoire
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
