"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 6, minutes: 30 });
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Dummy timer logic for display
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
                return prev; // Just static for now or minimal decrement
            });
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-background z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-primary mb-6">
                        Innovate • create • impact
                    </span>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
                        ZYRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">2K26</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Where innovation meets <span className="text-primary">sustainability</span> for a better world.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <motion.button
                            className="w-full sm:w-auto bg-primary text-black font-bold py-4 px-8 rounded-none hover:bg-accent transition-all transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsFormOpen(true)}
                        >
                            Register Now
                        </motion.button>
                        <motion.button
                            className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-none hover:bg-white/5 transition-all"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Brochure
                        </motion.button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto bg-surface/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours.toString().padStart(2, '0'), label: "Hours" },
                            { value: timeLeft.minutes.toString().padStart(2, '0'), label: "Mins" },
                        ].map((item, index) => (
                            <div key={index} className="text-center px-4 border-r last:border-r-0 border-white/10">
                                <div className="text-3xl md:text-4xl font-bold font-mono text-white">
                                    {item.value}
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            {isFormOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsFormOpen(false)} />
          <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsFormOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <RegisterForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
          </div>
        </motion.div>
      )}
        </motion.div>
    );
}
