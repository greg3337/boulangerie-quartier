"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const horaires = [
  { jour: "Lundi", heures: "Fermé", closed: true },
  { jour: "Mardi", heures: "7h00 – 19h30", closed: false },
  { jour: "Mercredi", heures: "7h00 – 19h30", closed: false },
  { jour: "Jeudi", heures: "7h00 – 19h30", closed: false },
  { jour: "Vendredi", heures: "7h00 – 19h30", closed: false },
  { jour: "Samedi", heures: "7h00 – 19h30", closed: false },
  { jour: "Dimanche", heures: "7h00 – 13h00", closed: false },
];

export default function HorairesSection() {
  return (
    <section className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Quand nous rendre visite
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-8">
              Horaires
            </h2>

            <div className="space-y-2">
              {horaires.map((h, index) => (
                <motion.div
                  key={h.jour}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className={`flex justify-between items-center py-3 border-b border-brown/10 ${
                    h.closed ? "opacity-40" : ""
                  }`}
                >
                  <span className="font-sans font-medium text-brown text-sm">
                    {h.jour}
                  </span>
                  <span
                    className={`font-sans text-sm ${
                      h.closed ? "text-brown/50 italic" : "text-brown/80"
                    }`}
                  >
                    {h.heures}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infos pratiques + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
                Informations pratiques
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-8">
                Nous Trouver
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-brown text-sm mb-0.5">Adresse</p>
                    <p className="font-sans text-brown/70 text-sm">
                      12 rue Sainte-Catherine
                      <br />
                      33000 Bordeaux
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-brown text-sm mb-0.5">Téléphone</p>
                    <p className="font-sans text-brown/70 text-sm">05 56 XX XX XX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-brown text-sm mb-0.5">Accès</p>
                    <p className="font-sans text-brown/70 text-sm">
                      Tramway ligne B – Arrêt Sainte-Catherine
                      <br />
                      Parking Victor Hugo à 200m
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brown hover:bg-brown-light text-cream font-sans font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
