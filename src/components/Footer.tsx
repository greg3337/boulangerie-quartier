import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://facebook.com/lafourneebordelaise",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://instagram.com/lafourneebordelaise",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://maps.google.com",
    label: "Google Maps",
    Icon: GoogleMapsIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-brown dark:bg-night text-cream">
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
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cream/50 hover:text-gold hover:scale-110 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
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
