"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/products";

const categoryGradients: Record<string, string> = {
  pains: "linear-gradient(135deg, #F5ECD7 0%, #C9A040 100%)",
  viennoiseries: "linear-gradient(135deg, #FDF6EC 0%, #D4A840 100%)",
  patisseries: "linear-gradient(135deg, #FDF6EC 0%, #F0D0C0 100%)",
  sandwichs: "linear-gradient(135deg, #F0F4EC 0%, #C8D8B0 100%)",
};

export default function CartePage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen bg-cream">
      {/* Page hero */}
      <div className="relative h-56 md:h-72 flex items-end pb-12 overflow-hidden bg-brown">
        <Image
          src="https://images.unsplash.com/photo-1579691040498-7e99c5b96da0?w=1600&q=80"
          alt="Pains et viennoiseries en boulangerie"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-3">
            La Fournée Bordelaise
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream">
            Notre Carte
          </h1>
        </div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-brown/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex-shrink-0 font-sans text-sm tracking-wider uppercase px-6 py-5 transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? "text-gold font-medium"
                    : "text-brown/60 hover:text-brown"
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-brown">
                {active.label}
              </h2>
              <div className="w-12 h-px bg-gold mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {active.products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex flex-col items-center justify-center gap-2 transition-transform duration-700 group-hover:scale-105"
                        style={{ background: categoryGradients[activeCategory] }}
                      >
                        <span className="text-6xl select-none" role="img" aria-label={product.alt}>
                          {product.emoji}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg font-semibold text-brown">
                        {product.name}
                      </h3>
                      <span className="font-sans text-gold font-semibold text-sm ml-3 flex-shrink-0">
                        {product.price}
                      </span>
                    </div>
                    <p className="font-sans text-brown/65 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom note */}
      <div className="bg-warm py-10 text-center">
        <p className="font-sans text-brown/60 text-sm max-w-xl mx-auto px-4">
          Nos produits sont fabriqués chaque matin avec des ingrédients frais et de saison.
          Les disponibilités peuvent varier selon les jours. N&apos;hésitez pas à nous appeler.
        </p>
      </div>
    </div>
  );
}
