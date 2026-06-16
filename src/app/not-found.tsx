import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
      <p className="font-sans text-gold text-xs tracking-[0.4em] uppercase mb-4">
        Erreur
      </p>
      <h1 className="font-serif text-8xl sm:text-9xl font-bold text-gold leading-none mb-6">
        404
      </h1>
      <p className="font-serif text-2xl sm:text-3xl text-brown font-medium mb-4">
        Cette page s&apos;est envolée comme une miette de croissant 🥐
      </p>
      <p className="font-sans text-brown/60 text-base max-w-sm mb-10">
        Pas de panique, le fournil est toujours là. Revenez à l&apos;accueil pour retrouver nos créations.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-brown font-sans font-semibold text-sm tracking-wider uppercase px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
