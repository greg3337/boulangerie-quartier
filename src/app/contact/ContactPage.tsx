"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const horaires = [
  { jour: "Lundi", heures: "Fermé", closed: true },
  { jour: "Mardi – Vendredi", heures: "7h00 – 19h30", closed: false },
  { jour: "Samedi", heures: "7h00 – 19h30", closed: false },
  { jour: "Dimanche", heures: "7h00 – 13h00", closed: false },
];

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = "Le nom est requis.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email invalide.";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Le message doit faire au moins 10 caractères.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-night">
      {/* Hero */}
      <div className="bg-brown pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Venez nous voir
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-cream">
            Contact
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info + horaires + map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Infos */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brown dark:text-cream mb-6">
                Informations
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-brown dark:text-cream text-sm mb-0.5">
                      Adresse
                    </p>
                    <p className="font-sans text-brown/70 dark:text-cream/70 text-sm">
                      12 rue Sainte-Catherine
                      <br />
                      33000 Bordeaux, France
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-semibold text-brown dark:text-cream text-sm mb-0.5">
                      Téléphone
                    </p>
                    <a
                      href="tel:0556000000"
                      className="font-sans text-brown/70 dark:text-cream/70 text-sm hover:text-gold transition-colors"
                    >
                      05 56 XX XX XX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires détaillés */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={20} className="text-gold" />
                <h2 className="font-serif text-2xl font-bold text-brown dark:text-cream">
                  Horaires d&apos;ouverture
                </h2>
              </div>
              <div className="space-y-2">
                {horaires.map((h) => (
                  <div
                    key={h.jour}
                    className={`flex justify-between py-3 border-b border-brown/10 dark:border-cream/10 ${
                      h.closed ? "opacity-40" : ""
                    }`}
                  >
                    <span className="font-sans text-sm font-medium text-brown dark:text-cream">
                      {h.jour}
                    </span>
                    <span
                      className={`font-sans text-sm ${
                        h.closed
                          ? "text-brown/50 dark:text-cream/50 italic"
                          : "text-brown/75 dark:text-cream/75"
                      }`}
                    >
                      {h.heures}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brown dark:text-cream mb-4">
                Nous trouver
              </h2>
              <div className="overflow-hidden border border-brown/10 dark:border-night-border">
                <iframe
                  title="Carte La Fournée Bordelaise"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3920453977887!2d-0.5758499!3d44.8393296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e80c87e469%3A0x53adff9b39e04e6b!2sRue%20Sainte-Catherine%2C%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-serif text-2xl font-bold text-brown dark:text-cream mb-8">
              Envoyer un message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-16 gap-4"
              >
                <CheckCircle size={48} className="text-gold" />
                <h3 className="font-serif text-2xl font-semibold text-brown dark:text-cream">
                  Message envoyé !
                </h3>
                <p className="font-sans text-brown/70 dark:text-cream/70 text-sm max-w-xs">
                  Merci pour votre message. Nous vous répondrons dans les plus
                  brefs délais.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ nom: "", email: "", message: "" });
                  }}
                  className="mt-4 font-sans text-sm text-gold border-b border-gold hover:text-gold-dark transition-colors"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="nom"
                    className="block font-sans text-xs tracking-widest uppercase text-brown dark:text-cream mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    type="text"
                    value={form.nom}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, nom: e.target.value }))
                    }
                    placeholder="Jean Dupont"
                    className={`w-full font-sans text-sm bg-white dark:bg-night-card text-brown dark:text-cream border px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-brown/30 dark:placeholder:text-cream/30 ${
                      errors.nom ? "border-red-400" : "border-brown/20 dark:border-night-border"
                    }`}
                  />
                  {errors.nom && (
                    <p className="mt-1 text-red-500 text-xs">{errors.nom}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs tracking-widest uppercase text-brown dark:text-cream mb-2"
                  >
                    Adresse email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="jean@exemple.fr"
                    className={`w-full font-sans text-sm bg-white dark:bg-night-card text-brown dark:text-cream border px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-brown/30 dark:placeholder:text-cream/30 ${
                      errors.email ? "border-red-400" : "border-brown/20 dark:border-night-border"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-widest uppercase text-brown dark:text-cream mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Votre message, une commande spéciale, une question..."
                    className={`w-full font-sans text-sm bg-white dark:bg-night-card text-brown dark:text-cream border px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-brown/30 dark:placeholder:text-cream/30 resize-none ${
                      errors.message ? "border-red-400" : "border-brown/20 dark:border-night-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brown dark:bg-night-card hover:bg-brown-light dark:hover:bg-night-card/80 text-cream font-sans font-semibold text-sm tracking-wider uppercase py-4 transition-all duration-300 hover:shadow-md"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
