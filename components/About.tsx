import Image from "next/image";
import { Waves, Zap } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-primary text-sm uppercase tracking-widest font-semibold">About the Hackathon</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Engineering a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sustainable Future</span>
                        </h2>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Join the brightest minds in tech and sustainability as we come together to solve
                            Earth's most pressing challenges. From removing plastics from our oceans to
                            optimizing renewable energy networks, your code can change the world.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-lg bg-surface hover:bg-surface-hover transition-colors border border-white/5">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Waves size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Ocean Cleanup</h3>
                                    <p className="text-xs text-gray-400">Innovative solutions for marine preservation.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 rounded-lg bg-surface hover:bg-surface-hover transition-colors border border-white/5">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Zap size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Clean Energy</h3>
                                    <p className="text-xs text-gray-400">Optimizing grids for a greener planet.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 group">
                            <Image
                                src="/about-image.png"
                                alt="Robotic Hand holding a plant"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
