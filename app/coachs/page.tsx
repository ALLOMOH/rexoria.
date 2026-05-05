"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const coachs = [
  {
    name: "Marc Emmanuel",
    role: "Expert Études à l'étranger",
    specialty: "international",
    bio: "Ancien responsable d'admissions internationales, Marc a accompagné plus de 500 étudiants vers le Canada et la France.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    name: "Awa Touré",
    role: "Coach en Orientation",
    specialty: "orientation",
    bio: "Psychologue du travail de formation, Awa aide les lycéens à découvrir leurs talents cachés grâce à des méthodes innovantes.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    name: "Jean-Philippe K.",
    role: "Coach Méthodologie Bac",
    specialty: "bac",
    bio: "Professeur agrégé passionné par la réussite des élèves. Spécialiste de la gestion du stress en période d'examens.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    name: "Sarah M.",
    role: "Conseillère Post-Bac",
    specialty: "orientation",
    bio: "Sarah maîtrise parfaitement les arcanes de Parcoursup et des universités locales pour assurer vos affectations.",
    icon: <Briefcase className="w-5 h-5" />,
  }
];

export default function CoachsPage() {
  const [filter, setFilter] = useState("all");

  const filteredCoachs = filter === "all" ? coachs : coachs.filter(c => c.specialty === filter);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50"
          >
            Nos <span className="text-blue-600 dark:text-blue-500">Coachs</span> Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Une équipe de professionnels certifiés dédiés à votre réussite éducative et professionnelle.
          </motion.p>
        </div>

        {/* Filtres */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: "all", label: "Tous" },
            { id: "orientation", label: "Orientation" },
            { id: "international", label: "International" },
            { id: "bac", label: "Prépa Bac" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === btn.id 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Grille des Coachs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCoachs.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mb-6 mx-auto text-blue-600 dark:text-blue-400 shadow-inner">
                {coach.icon}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-zinc-900 dark:text-zinc-50">{coach.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-500 font-medium mb-4">{coach.role}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {coach.bio}
                </p>
                <Link href="/rendez-vous">
                  <Button variant="outline" size="sm" className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Réserver
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
