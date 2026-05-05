"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, BookOpen, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-zinc-950">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
            >
              Révélez votre <span className="text-blue-600 dark:text-blue-500">potentiel</span>. Construisez votre avenir.
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto"
            >
              Le site qui continue à convaincre vos prospects pendant que vos commerciaux roulent vers le suivant.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/diagnostic">
                <Button size="lg" className="w-full sm:w-auto text-lg">
                  Réserver un diagnostic gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/offres">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg bg-white/50 backdrop-blur-sm dark:bg-black/50">
                  Découvrir nos offres
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-24 bg-white dark:bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                L'orientation n'est pas un hasard, c'est une stratégie.
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Chez Nexoria, nous croyons que chaque élève possède un talent unique qui ne demande qu'à être découvert. Notre méthode éprouvée combine coaching personnalisé, bilans de compétences et conseils pratiques pour vous guider vers les meilleures opportunités.
              </p>
              <ul className="space-y-4">
                {["Accompagnement 100% sur-mesure", "Experts de l'éducation en Côte d'Ivoire", "Suivi post-bac et études à l'étranger"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium">
                    <CheckCircle2 className="text-blue-500 w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative shadow-2xl">
                {/* Replace with actual image later */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                   <Users className="w-32 h-32 text-blue-500/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offres Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
              Nos programmes phares
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Des solutions adaptées à chaque étape de votre parcours éducatif.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <BookOpen className="w-10 h-10 text-blue-500 mb-4" />,
                title: "Coaching Bac",
                desc: "Préparation intensive, méthodologie de travail et gestion du stress pour exceller le jour J."
              },
              {
                icon: <Target className="w-10 h-10 text-purple-500 mb-4" />,
                title: "Bilan d'Orientation",
                desc: "Découvrez vos forces et identifiez les filières qui correspondent vraiment à votre profil."
              },
              {
                icon: <Users className="w-10 h-10 text-emerald-500 mb-4" />,
                title: "Études à l'étranger",
                desc: "Accompagnement complet : choix des universités, dossiers d'admission et démarches."
              }
            ].map((offre, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-zinc-100 dark:border-zinc-800"
              >
                {offre.icon}
                <h3 className="text-2xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50">{offre.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{offre.desc}</p>
                <Link href="/offres" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Témoignages Section (Simplified slider) */}
      <section className="py-24 bg-blue-600 dark:bg-blue-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-blue-100 text-lg">Découvrez les parcours de réussite de nos élèves.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20"
          >
            <div className="flex text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "Grâce à Nexoria, j'ai pu identifier clairement ma voie et intégrer l'université de mes rêves au Canada. Le coaching m'a donné confiance en mes capacités."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center font-bold text-xl">
                A
              </div>
              <div>
                <h4 className="font-bold text-lg">Awa K.</h4>
                <p className="text-blue-200">Étudiante post-bac, Abidjan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white dark:bg-black text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
              Prêt à prendre votre avenir en main ?
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
              Ne laissez plus votre orientation au hasard. Prenez rendez-vous avec l'un de nos experts dès aujourd'hui.
            </p>
            <Link href="/rendez-vous">
              <Button size="lg" className="text-lg px-12 py-6 rounded-full">
                Prendre Rendez-vous
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
