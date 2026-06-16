"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const avis = [
  {
    prenom: "Sophie M.",
    texte:
      "Le pain au levain est absolument incroyable — croûte craquante, mie alvéolée, un vrai régal chaque matin. Je ne peux plus me passer de La Fournée Bordelaise.",
  },
  {
    prenom: "Thomas R.",
    texte:
      "Les croissants sont les meilleurs que j'aie mangés à Bordeaux. Beurrés, feuilletés, fondants. L'équipe est souriante et le cadre chaleureux.",
  },
  {
    prenom: "Élodie C.",
    texte:
      "Une adresse qui mérite amplement sa réputation. Les viennoiseries du dimanche matin sont un rituel chez nous depuis des années.",
  },
  {
    prenom: "Marc A.",
    texte:
      "Rarement vu une telle constance dans la qualité. Que ce soit le pain de seigle ou la baguette tradition, c'est toujours parfait.",
  },
  {
    prenom: "Nathalie D.",
    texte:
      "La tarte aux abricots de cette boulangerie est un chef-d'œuvre. Sophie a un talent fou pour la pâtisserie. Je recommande sans hésiter !",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AvisClientsSection() {
  return (
    <section className="bg-brown py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-sans text-gold text-xs tracking-[0.4em] uppercase">
            Ce que disent nos clients
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mt-3">
            Avis & Témoignages
          </h2>
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" />
            ))}
            <span className="font-sans text-cream/60 text-sm ml-2">5/5 — 120+ avis</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {avis.map((a) => (
            <motion.div
              key={a.prenom}
              variants={cardVariants}
              className="bg-brown-light/40 border border-gold/20 rounded-sm p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-cream/80 text-sm leading-relaxed flex-1">
                &ldquo;{a.texte}&rdquo;
              </p>
              <p className="font-sans text-gold text-xs tracking-wider uppercase font-medium">
                — {a.prenom}
              </p>
            </motion.div>
          ))}

          {/* 5 avis sur 2 dernières lignes → 6e cellule vide centrée sur lg */}
          <motion.div
            variants={cardVariants}
            className="hidden lg:flex bg-brown-light/20 border border-gold/10 rounded-sm p-6 items-center justify-center"
          >
            <p className="font-serif text-gold/40 text-5xl italic">&ldquo;</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
