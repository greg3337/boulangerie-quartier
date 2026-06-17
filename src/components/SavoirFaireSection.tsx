"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Wheat, Flame } from "lucide-react";

const pillars = [
  {
    icon: Wheat,
    title: "Farine bio Label Rouge",
    description:
      "Nous sélectionnons des farines issues de blés anciens cultivés en agriculture biologique, moulues sur meule de pierre.",
  },
  {
    icon: Leaf,
    title: "Levain naturel",
    description:
      "Notre levain chef, cultivé depuis 39 ans, est le secret d'une mie aérée et d'une conservation naturelle sans additifs.",
  },
  {
    icon: Flame,
    title: "Four à bois",
    description:
      "La chaleur enveloppante de notre four à bois, chauffé aux essences de chêne gascon, confère aux pains leur croûte inimitable.",
  },
];

export default function SavoirFaireSection() {
  return (
    <section className="py-24 bg-brown dark:bg-night-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=900&q=85"
                alt="Boulanger pétrissant la pâte dans notre fournil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Notre philosophie
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              Notre
              <br />
              <span className="text-gold italic">Savoir-Faire</span>
            </h2>
            <p className="font-sans text-cream/70 text-base leading-relaxed mb-10">
              Chez La Fournée Bordelaise, nous refusons les compromis. Chaque
              pain est le fruit d&apos;un processus lent et respectueux : longue
              fermentation, gestes maîtrisés, matières premières d&apos;exception.
              L&apos;artisanat comme seule réponse.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <pillar.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-cream font-semibold mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-cream/60 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
