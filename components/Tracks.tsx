import { Zap, Droplet, Recycle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const tracks = [
    {
        icon: Zap,
        title: "Green Energy Tech",
        description: "Develop algorithms and hardware integration for optimizing renewable energy sources and grid management.",
    },
    {
        icon: Droplet,
        title: "Water Purification",
        description: "Create affordable and accessible solutions for water testing, filtration, and distribution networks.",
    },
    {
        icon: Recycle,
        title: "Waste Management",
        description: "Design smart systems for recycling, composting, and reducing landfill impact through technology.",
    },
];

export default function Tracks() {
    return (
        <motion.div
            id="tracks"
            className="py-20 bg-background relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Competition <span className="text-primary">Tracks</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose your battlefield. Each track offers unique rewards and the chance to make a tangible impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tracks.map((track, index) => (
                        <div key={index} className="group relative bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors text-primary">
                                <track.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {track.title}
                            </h3>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {track.description}
                            </p>

                            <motion.button
                                className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform"
                                whileHover={{ x: 5 }}
                            >
                                Learn more <ArrowRight size={16} className="ml-2" />
                            </motion.button>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
