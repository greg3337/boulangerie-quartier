"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const specialties = [
  {
    title: "Pain de Campagne",
    description:
      "Notre levain naturel, cultivé depuis 1987, donne à ce pain son caractère acidulé et sa mie alvéolée incomparable.",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80",
    alt: "Pain de campagne rustique",
  },
  {
    title: "Croissant au Beurre",
    description:
      "Beurre AOP Charentes-Poitou, 27 couches de feuilletage, dorure dorée — l'excellence viennoise à la bordelaise.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    alt: "Croissants au beurre dorés",
  },
  {
    title: "Tarte aux Fruits",
    description:
      "Fruits de saison sélectionnés chez nos producteurs locaux, crème pâtissière vanille, pâte sablée maison.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    alt: "Tarte aux fruits frais",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function SpecialtiesSection() {
  return (
    <section className="py-24 bg-cream dark:bg-night">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Nos incontournables
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown dark:text-cream mb-4">
            Nos Spécialités
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specialties.map((spec) => (
            <motion.div
              key={spec.title}
              variants={item}
              className="group bg-white dark:bg-night-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={spec.image}
                  alt={spec.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-brown dark:text-cream mb-3">
                  {spec.title}
                </h3>
                <p className="font-sans text-brown/70 dark:text-cream/70 text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/carte"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-gold border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
          >
            Voir toute notre carte →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
