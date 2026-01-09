"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // for smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              ZYRO <span className="text-primary">2K26</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                "Home",
                "About",
                "Tracks",
                "Rewards",
                "Timeline",
                "Partners",
                "FAQ",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-gray-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <motion.button
              className="bg-primary text-black font-bold py-2 px-6 rounded-none hover:bg-accent transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
            >
              REGISTER NOW
            </motion.button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              "Home",
              "About",
              "Tracks",
              "Rewards",
              "Timeline",
              "Partners",
              "FAQ",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => handleScroll(e, item.toLowerCase())}
              >
                {item}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <motion.button
                className="w-full bg-primary text-black font-bold py-3 rounded-none hover:bg-accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)}
              >
                REGISTER NOW
              </motion.button>
            </div>
          </div>
        </div>
      )}
      <RegisterForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </motion.nav>
  );
}
