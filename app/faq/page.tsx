"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "À qui s'adresse Nexoria ?",
    answer: "Nexoria s'adresse principalement aux élèves de lycée (de la Seconde à la Terminale) ainsi qu'aux étudiants post-bac cherchant à se réorienter ou à poursuivre leurs études à l'étranger."
  },
  {
    question: "Comment se déroule le diagnostic gratuit ?",
    answer: "Il s'agit d'un premier entretien téléphonique ou visio de 30 minutes. Nous échangeons sur votre situation actuelle, vos difficultés et vos objectifs pour déterminer si et comment nous pouvons vous accompagner."
  },
  {
    question: "Garantissez-vous l'admission dans les universités étrangères ?",
    answer: "Bien que nous ne puissions pas garantir à 100% une admission (celle-ci dépendant des décisions souveraines des universités), notre accompagnement maximise considérablement vos chances grâce à des dossiers optimisés et une préparation rigoureuse aux entretiens."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les virements bancaires, les paiements par carte bancaire ainsi que le Mobile Money (Orange Money, MTN, Moov) pour faciliter les transactions locales."
  },
  {
    question: "Où se déroulent les séances de coaching ?",
    answer: "Nos séances peuvent se dérouler en présentiel dans nos locaux à Abidjan (Cocody), ou entièrement en ligne via visioconférence pour plus de flexibilité."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50"
          >
            Questions <span className="text-blue-600 dark:text-blue-500">Fréquentes</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Trouvez rapidement les réponses à vos questions concernant notre accompagnement.
          </motion.p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-8 md:p-12 text-center border border-blue-100 dark:border-blue-900/50"
        >
          <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
            Notre équipe est à votre disposition pour vous répondre et vous orienter vers la meilleure solution.
          </p>
          <Link href="/contact">
            <Button>Nous contacter</Button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
