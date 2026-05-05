"use client";

import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Target, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const offres = [
  {
    title: "Coaching Bac & Post-Bac",
    description: "Un accompagnement intensif pour maximiser vos chances de réussite au Bac et préparer sereinement votre entrée dans l'enseignement supérieur.",
    icon: <BookOpen className="w-12 h-12 text-blue-500 mb-6" />,
    features: [
      "Méthodologie de travail personnalisée",
      "Gestion du stress et confiance en soi",
      "Préparation aux oraux et entretiens",
      "Aide au choix des filières (Parcoursup local)",
    ]
  },
  {
    title: "Bilan d'Orientation",
    description: "Découvrez vos réels talents et identifiez les métiers et les filières qui correspondent vraiment à votre personnalité et vos ambitions.",
    icon: <Target className="w-12 h-12 text-purple-500 mb-6" />,
    features: [
      "Tests de personnalité approfondis",
      "Entretien avec un conseiller expert",
      "Analyse des bulletins et du parcours",
      "Remise d'un rapport complet d'orientation",
    ]
  },
  {
    title: "Études à l'étranger",
    description: "De l'idée au départ : nous vous accompagnons dans toutes les démarches pour étudier en France, au Canada, aux États-Unis ou ailleurs.",
    icon: <Plane className="w-12 h-12 text-emerald-500 mb-6" />,
    features: [
      "Choix des universités et des programmes",
      "Constitution des dossiers d'admission",
      "Préparation aux tests de langues (TOEFL, IELTS)",
      "Assistance pour le visa étudiant et le logement",
    ]
  }
];

export default function OffresPage() {
  return (
    <div className="pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50"
          >
            Nos <span className="text-blue-600 dark:text-blue-500">Offres</span> d'Accompagnement
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Choisissez le programme qui correspond à vos besoins actuels. Nos experts sont là pour vous guider à chaque étape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offres.map((offre, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-100 dark:border-zinc-800 flex flex-col hover:shadow-xl transition-all"
            >
              {offre.icon}
              <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">{offre.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow">
                {offre.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {offre.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/rendez-vous" className="mt-auto">
                <Button className="w-full" variant={index === 1 ? "primary" : "outline"}>
                  Prendre RDV
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
