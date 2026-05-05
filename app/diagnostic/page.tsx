"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const QUESTIONS = [
  {
    id: "profil",
    question: "Quel est votre profil actuel ?",
    options: ["Lycéen (Seconde à Terminale)", "Étudiant Post-Bac", "Parent d'élève", "Autre"],
  },
  {
    id: "objectif",
    question: "Quel est votre objectif principal ?",
    options: ["Réussir mon Bac avec mention", "Trouver ma voie / Bilan d'orientation", "Étudier à l'étranger (Canada, France, etc.)", "Améliorer mes méthodes de travail"],
  },
  {
    id: "urgence",
    question: "Quelle est l'urgence de votre projet ?",
    options: ["Très urgent (dans les 3 mois)", "Moyen (cette année scolaire)", "J'anticipe pour l'année prochaine"],
  }
];

export default function DiagnosticPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    setTimeout(() => {
      if (step < QUESTIONS.length) {
        setStep(step + 1);
      }
    }, 400); // Small delay for UX
  };

  const generateWhatsAppLink = () => {
    const phone = "2250123456789"; // Replace with actual business number
    const text = `Bonjour Nexoria ! 👋\n\nJe viens de terminer mon diagnostic gratuit sur votre site. Voici mon profil :\n\n- *Profil* : ${answers["profil"]}\n- *Objectif* : ${answers["objectif"]}\n- *Urgence* : ${answers["urgence"]}\n\nJ'aimerais être recontacté pour en discuter.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-24 pb-16 bg-blue-50 dark:bg-zinc-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
            Diagnostic <span className="text-blue-600 dark:text-blue-500">Gratuit</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Répondez à ces 3 questions rapides pour que nous puissions vous orienter vers le meilleur accompagnement.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-8 md:p-12 border border-zinc-100 dark:border-zinc-800 min-h-[400px] flex flex-col">
          
          {step < QUESTIONS.length && (
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-zinc-500 mb-2">
                <span>Question {step + 1} sur {QUESTIONS.length}</span>
                <span>{Math.round((step / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step < QUESTIONS.length ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">
                    {QUESTIONS[step].question}
                  </h2>
                  <div className="space-y-4">
                    {QUESTIONS[step].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(QUESTIONS[step].id, option)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center group ${
                          answers[QUESTIONS[step].id] === option
                            ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                            : "border-zinc-200 dark:border-zinc-700 hover:border-blue-400"
                        }`}
                      >
                        <span className="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                          {option}
                        </span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          answers[QUESTIONS[step].id] === option ? "border-blue-600" : "border-zinc-300 dark:border-zinc-600"
                        }`}>
                          {answers[QUESTIONS[step].id] === option && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                    Merci pour vos réponses !
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    Votre profil a été analysé. Pour recevoir votre bilan gratuit et échanger avec un conseiller, envoyez-nous vos résultats via WhatsApp.
                  </p>
                  <a 
                    href={generateWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto"
                  >
                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                      Recevoir mon bilan sur WhatsApp
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                  <button 
                    onClick={() => { setStep(0); setAnswers({}); }}
                    className="block mt-6 mx-auto text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                  >
                    Recommencer le diagnostic
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
