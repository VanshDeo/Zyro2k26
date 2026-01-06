export default function Partners() {
    const partners = [
        "TERRA", "NEXUS", "ORBITAL", "Vertex",
        "Flux", "Sync", "Nova", "Echo"
    ];

    return (
        <section id="partners" className="py-20 bg-surface/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Our <span className="text-primary">Partners</span>
                </h2>
                <p className="text-gray-400 mb-12">
                    Supported by industry leaders and visionaries.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="px-8 py-4 bg-surface rounded-lg border border-white/5 hover:border-primary/50 text-gray-300 hover:text-white font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-primary/10"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
