"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "Comment bien préparer son dossier d'admission au Canada en 2026",
    excerpt: "Les étapes cruciales et les pièges à éviter pour maximiser vos chances d'être accepté dans les universités canadiennes.",
    category: "Études à l'étranger",
    date: "12 Mai 2026",
    author: "Marc Emmanuel",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Les 5 métiers d'avenir en Côte d'Ivoire",
    excerpt: "Découvrez les secteurs qui recrutent le plus et comment adapter votre orientation pour saisir ces opportunités.",
    category: "Orientation",
    date: "05 Mai 2026",
    author: "Awa Touré",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Gérer le stress du Baccalauréat : nos conseils pratiques",
    excerpt: "La dernière ligne droite approche. Voici comment rester concentré et serein pendant les épreuves du Bac.",
    category: "Coaching",
    date: "28 Avril 2026",
    author: "Jean-Philippe K.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50"
          >
            Le <span className="text-blue-600 dark:text-blue-500">Blog</span> de Nexoria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Conseils d'experts, actualités de l'éducation et guides pratiques pour réussir votre parcours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
