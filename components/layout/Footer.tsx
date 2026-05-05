import Link from "next/link";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 pt-16 pb-8 border-t border-zinc-200 dark:border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-500 mb-4 inline-block">
              Nexoria.
            </span>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-6">
              Le premier cabinet de coaching et d'orientation scolaire en Côte
              d'Ivoire. Nous accompagnons les élèves vers l'excellence.
            </p>
            <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
              <a href="#" className="hover:text-blue-600 transition-colors">
                {/* <Facebook size={20} /> */}
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {/* <Instagram size={20} /> */}
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {/* <Linkedin size={20} /> */}
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {/* <Twitter size={20} /> */}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/offres"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Nos offres
                </Link>
              </li>
              <li>
                <Link
                  href="/coachs"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Nos coachs
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>Abidjan, Côte d'Ivoire</li>
              <li>contact@nexoria.ci</li>
              <li>+225 01 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Nexoria. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
