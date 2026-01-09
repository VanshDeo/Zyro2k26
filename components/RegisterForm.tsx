"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface RegisterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterForm({ isOpen, onClose }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    track: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    // Here you can add API call or further processing
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-surface p-8 rounded-xl border border-white/10 max-w-md w-full mx-4 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Register for <span className="text-primary">ZYRO 2K26</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="eg. John Doe"
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg. example@example.com"
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="eg. +91 xxxxxxxxxx"
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="eg. Team Alpha"
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Track</label>
                <select
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg text-white focus:border-primary focus:outline-none"
                  required
                >
                  <option value="">Select a track</option>
                  <option value="green-energy">Green Energy Tech</option>
                  <option value="water-purification">Water Purification</option>
                  <option value="waste-management">Waste Management</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-accent transition-colors"
              >
                Register
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
