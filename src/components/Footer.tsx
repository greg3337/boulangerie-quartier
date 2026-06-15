import Link from "next/link";
import { MapPin, Phone, Clock, Share2, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-gold mb-3">
              La Fournée Bordelaise
            </h2>
            <p className="text-cream/70 text-sm leading-relaxed">
              Boulangerie artisanale au cœur de Bordeaux depuis 1987.
              L&apos;art du pain, façonné avec passion et tradition.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/50 hover:text-gold transition-colors"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/50 hover:text-gold transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">
              Nous trouver
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-cream/70">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>12 rue Sainte-Catherine<br />33000 Bordeaux</span>
              </li>
              <li className="flex gap-3 text-sm text-cream/70">
                <Phone size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>05 56 XX XX XX</span>
              </li>
              <li className="flex gap-3 text-sm text-cream/70">
                <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>Mar–Sam : 7h–19h30<br />Dim : 7h–13h · Lun : Fermé</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/carte", label: "Notre Carte" },
                { href: "/a-propos", label: "Notre Histoire" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} La Fournée Bordelaise — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
