"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "50.000",
    currency: "FCFA",
    period: "/mois",
    description: "L'essentiel pour bien démarrer votre préparation au Bac.",
    features: [
      { name: "1 séance de coaching par semaine", included: true },
      { name: "Accès aux fiches de révision", included: true },
      { name: "Support email 7j/7", included: true },
      { name: "Bilan d'orientation initial", included: false },
      { name: "Accompagnement post-bac (Parcoursup)", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "120.000",
    currency: "FCFA",
    period: "/mois",
    description: "Notre formule la plus populaire pour un succès garanti.",
    features: [
      { name: "3 séances de coaching par semaine", included: true },
      { name: "Accès illimité aux fiches de révision", included: true },
      { name: "Support email et WhatsApp 7j/7", included: true },
      { name: "Bilan d'orientation complet", included: true },
      { name: "Accompagnement post-bac (Parcoursup)", included: true },
    ],
    highlighted: true,
  },
  {
    name: "Elite (International)",
    price: "Sur devis",
    currency: "",
    period: "",
    description: "Pour les projets d'études à l'étranger (Canada, France...).",
    features: [
      { name: "Coaching intensif et sur-mesure", included: true },
      { name: "Préparation aux tests (TOEFL, IELTS)", included: true },
      { name: "Montage du dossier d'admission", included: true },
      { name: "Assistance visa et logement", included: true },
      { name: "Suivi post-installation", included: true },
    ],
    highlighted: false,
  }
];

export default function TarifsPage() {
  return (
    <div className="pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50"
          >
            Investissez dans votre <span className="text-blue-600 dark:text-blue-500">Avenir</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Des tarifs transparents pour un accompagnement d'excellence. Sans engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 border flex flex-col ${
                plan.highlighted 
                  ? "bg-blue-600 text-white border-blue-600 shadow-2xl scale-105 z-10 hidden lg:flex" 
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 lg:scale-100"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.highlighted ? "text-blue-100" : "text-zinc-600 dark:text-zinc-400"} h-12`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                  {plan.price}
                </span>
                <span className={`text-lg font-medium ml-1 ${plan.highlighted ? "text-blue-200" : "text-zinc-500"}`}>
                  {plan.currency}{plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-blue-200" : "text-blue-500"}`} />
                    ) : (
                      <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-blue-400/50" : "text-zinc-300 dark:text-zinc-700"}`} />
                    )}
                    <span className={feature.included ? "" : plan.highlighted ? "text-blue-200/70" : "text-zinc-400 dark:text-zinc-600"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/rendez-vous">
                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "secondary" : "primary"}
                >
                  Choisir ce plan
                </Button>
              </Link>
            </motion.div>
          ))}
          
          {/* Mobile highlighted version workaround */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-8 border flex flex-col bg-blue-600 text-white border-blue-600 shadow-2xl lg:hidden order-first"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Le plus populaire
                </span>
              </div>
              <div className="mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
                <p className="text-blue-100 h-12">Notre formule la plus populaire pour un succès garanti.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">120.000</span>
                <span className="text-lg font-medium ml-1 text-blue-200">FCFA/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plans[1].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-200" />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
              <Link href="/rendez-vous">
                <Button className="w-full" variant="secondary">Choisir ce plan</Button>
              </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
