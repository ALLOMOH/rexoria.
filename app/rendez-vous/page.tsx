"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function RendezVousPage() {
  const [step, setStep] = useState(1);
  const [selectedCoach, setSelectedCoach] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirm = () => {
    setStep(4);
    // In a real app, this would submit the booking to an API/Calendly
  };

  return (
    <div className="pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50"
          >
            Prendre <span className="text-blue-600 dark:text-blue-500">Rendez-vous</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Sélectionnez un expert et choisissez le créneau qui vous convient.
          </motion.p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden">
          {/* Progress Bar */}
          <div className="flex border-b border-zinc-100 dark:border-zinc-800">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`flex-1 text-center py-4 text-sm font-medium transition-colors ${
                  step >= s ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600" : "text-zinc-400"
                } ${s === step ? "border-b-2 border-blue-600" : ""}`}
              >
                Étape {s}
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12 min-h-[400px]">
            {/* Step 1: Coach */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white flex items-center gap-2">
                  <User className="text-blue-500" /> Choisissez votre coach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Marc Emmanuel (International)", "Awa Touré (Orientation)", "Jean-Philippe K. (Bac)"].map((coach) => (
                    <button
                      key={coach}
                      onClick={() => { setSelectedCoach(coach); setStep(2); }}
                      className={`p-6 rounded-2xl border-2 text-left transition-all ${
                        selectedCoach === coach 
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                          : "border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700"
                      }`}
                    >
                      <h3 className="font-bold text-zinc-900 dark:text-white">{coach.split(" (")[0]}</h3>
                      <p className="text-sm text-zinc-500">{coach.split("(")[1]?.replace(")", "")}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white flex items-center gap-2">
                  <Calendar className="text-blue-500" /> Choisissez la date
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Fake Calendar */}
                  <div>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {["Demain", "Mercredi", "Jeudi", "Vendredi"].map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            selectedDate === date
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-blue-300"
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times */}
                  {selectedDate && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h3 className="font-semibold mb-4 text-zinc-900 dark:text-white flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zinc-400" /> Heure
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {["09:00", "10:30", "14:00", "15:30", "17:00"].map((time) => (
                          <button
                            key={time}
                            onClick={() => { setSelectedTime(time); setStep(3); }}
                            className={`p-2 rounded-lg border text-center transition-all ${
                              selectedTime === time
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 hover:border-blue-300"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                <button onClick={() => setStep(1)} className="mt-8 text-sm text-zinc-500 hover:text-blue-600">
                  ← Retour au choix du coach
                </button>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
                  Confirmez votre rendez-vous
                </h2>
                <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-700 pb-4">
                      <span className="text-zinc-500">Coach</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">{selectedCoach}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-700 pb-4">
                      <span className="text-zinc-500">Date</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Heure</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <input type="text" placeholder="Votre nom" className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="email" placeholder="Votre email" className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" placeholder="Votre numéro de téléphone" className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" onClick={() => setStep(2)}>Retour</Button>
                  <Button onClick={handleConfirm} className="flex-1">Confirmer le rendez-vous</Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
                  Rendez-vous confirmé !
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                  Un email de confirmation contenant le lien Google Meet vous a été envoyé. Un rappel SMS vous sera envoyé 24h avant.
                </p>
                <Button onClick={() => window.location.href = "/"}>
                  Retour à l'accueil
                </Button>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
