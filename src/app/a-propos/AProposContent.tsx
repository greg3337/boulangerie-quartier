"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

const team = [
  {
    name: "Michel Dubois",
    role: "Fondateur & Maître Boulanger",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    alt: "Michel Dubois, fondateur",
  },
  {
    name: "Sophie Dubois",
    role: "Pâtissière",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80",
    alt: "Sophie Dubois, pâtissière",
  },
  {
    name: "Lucas Martin",
    role: "Boulanger",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    alt: "Lucas Martin, boulanger",
  },
  {
    name: "Amandine Lefèvre",
    role: "Boulangère & Viennoisier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    alt: "Amandine Lefèvre, viennoisière",
  },
];

const values = [
  {
    icon: Heart,
    title: "Authenticité",
    description:
      "Nos recettes n'ont pas changé depuis 1987. Nous résistons aux sirènes de l'industriel pour préserver la tradition.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Chaque produit sort de notre fournil avec la même exigence qu'un chef étoilé. La médiocrité n'a pas sa place ici.",
  },
  {
    icon: Users,
    title: "Communauté",
    description:
      "La boulangerie est le cœur battant du quartier. Nous tissons des liens, partageons nos sourires et nourrissons notre quartier.",
  },
];

export default function AProposContent() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative h-72 md:h-96 flex items-end pb-12 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=85"
          alt="Intérieur chaleureux de la boulangerie"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Depuis 1987
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream">
            Notre Histoire
          </h1>
        </div>
      </div>

      {/* Histoire */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
                Les origines
              </span>
              <h2 className="font-serif text-4xl font-bold text-brown mb-6">
                Une histoire de passion transmise
              </h2>
              <div className="space-y-4 font-sans text-brown/75 leading-relaxed">
                <p>
                  En 1987, Michel Dubois, jeune boulanger formé dans les Pyrénées, posait ses malles rue Sainte-Catherine avec une seule ambition : créer le meilleur pain de Bordeaux. Armé d&apos;un levain centenaire rapporté de son village natal et d&apos;une conviction inébranlable pour le travail bien fait, il ouvrait les portes de La Fournée Bordelaise.
                </p>
                <p>
                  Les premières années furent rudes. Seul dans son fournil glacé, Michel se levait à quatre heures du matin pour pétrir des pâtes que peu de clients venaient chercher. Les semaines passaient, les fins de mois étaient serrées, et plus d&apos;une fois il songea à tout abandonner. Mais il y avait quelque chose d&apos;obstiné dans ce jeune homme — une foi absolue que le bon pain finit toujours par trouver ceux qui savent l&apos;apprécier.
                </p>
                <p>
                  Le tournant vint un matin de décembre 1990. Raymond Escarpit, vieux boulanger à la retraite qui habitait la rue d&apos;à côté, poussa la porte presque par curiosité. Il repartit avec une miche, la goûta chez lui, et revint l&apos;après-midi même. &laquo; C&apos;est le pain de mon enfance &raquo;, dit-il simplement à Michel. Dans les semaines qui suivirent, le quartier Sainte-Catherine commença à s&apos;éveiller à l&apos;odeur du fournil. Le bouche-à-oreille fit le reste, plus efficacement que n&apos;importe quelle publicité.
                </p>
                <p>
                  En 2005, porté par une clientèle fidèle et grandissante, Michel agrandit le fournil et recruta ses deux premiers compagnons boulangers. Dix ans plus tard, sa fille Sophie, fraîchement diplômée de l&apos;École Nationale Supérieure de Pâtisserie de Yssingeaux, rejoignit l&apos;aventure familiale. Elle apporta dans ses bagages des recettes délicates, une créativité qui renouvelait la carte sans jamais trahir son âme, et cette énergie propre à ceux qui ont choisi leur métier par vocation plutôt que par habitude.
                </p>
                <p>
                  Trente-neuf ans plus tard, La Fournée Bordelaise est devenue une institution du quartier — une de ces adresses que les Bordelais glissent à l&apos;oreille des visiteurs avec une pointe de fierté. Aujourd&apos;hui, une équipe de passionnés perpétue cette tradition : lever avant l&apos;aube, pétrir à la main, laisser le temps faire son œuvre, et ouvrir les portes à 7h avec le sourire de ceux qui savent qu&apos;ils ont bien fait leur travail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative h-[450px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=800&q=85"
                  alt="Michel Dubois dans son fournil"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold px-6 py-4">
                <span className="font-serif text-brown font-bold text-3xl">1987</span>
                <p className="font-sans text-brown/80 text-xs tracking-wider uppercase">Fondation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Ce qui nous guide
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
              Nos Valeurs
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center p-8 border border-cream/10 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                  <val.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-4">
                  {val.title}
                </h3>
                <p className="font-sans text-cream/65 text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Ceux qui font La Fournée
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown">
              L&apos;Équipe
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group text-center"
              >
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-5">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brown mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-gold text-xs tracking-wider uppercase">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
