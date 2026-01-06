import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 bg-surface border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold tracking-wider mb-2">
                            ZYRO <span className="text-primary">2K26</span>
                        </h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Innovating for a sustainable future. Join us in shaping tomorrow's technology.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
                        <div>
                            <h4 className="font-bold text-white mb-4">Quick Links</h4>
                            <div className="flex flex-col space-y-2 text-sm text-gray-400">
                                <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
                                <Link href="#tracks" className="hover:text-primary transition-colors">Tracks</Link>
                                <Link href="#timeline" className="hover:text-primary transition-colors">Timeline</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Contact Us</h4>
                            <div className="flex flex-col space-y-2 text-sm text-gray-400">
                                <a href="mailto:info@zyro2k26.com" className="hover:text-primary transition-colors">info@zyro2k26.com</a>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[Twitter, Linkedin, Instagram, Facebook].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} ZYRO 2K26. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
