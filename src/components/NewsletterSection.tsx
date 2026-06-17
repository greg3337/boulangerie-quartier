"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <section className="py-20 bg-brown dark:bg-night">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
              <Mail size={22} className="text-gold" />
            </div>
          </div>

          <span className="inline-block font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Restez informés
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-3">
            Recevez nos spécialités du jour
          </h2>
          <p className="font-sans text-cream/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Chaque matin, nos boulangers créent de nouvelles merveilles. Soyez les premiers à découvrir les spécialités éphémères et les créations saisonnières.
          </p>

          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-3"
              >
                <CheckCircle size={40} className="text-gold" />
                <p className="font-serif text-xl text-cream font-semibold">
                  Inscription confirmée !
                </p>
                <p className="font-sans text-cream/60 text-sm">
                  Bienvenue dans la famille de La Fournée Bordelaise.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="votre@email.fr"
                    aria-label="Adresse email"
                    className="w-full font-sans text-sm bg-brown-light/50 dark:bg-night-card text-cream border border-cream/20 dark:border-night-border px-4 py-3 outline-none focus:border-gold transition-colors placeholder:text-cream/30"
                  />
                  {error && (
                    <p className="mt-1.5 text-left text-xs text-gold/80">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="flex-shrink-0 bg-gold hover:bg-gold-dark text-brown font-sans font-semibold text-sm tracking-wider uppercase px-7 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  S&apos;inscrire
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
