export default function Rewards() {
    return (
        <section id="rewards" className="py-20 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">
                    Win Big <span className="text-primary">Rewards</span>
                </h2>

                <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
                    {/* Silver - 2nd Place */}
                    <div className="order-2 md:order-1 flex-1 bg-surface p-6 rounded-t-xl md:rounded-xl border border-white/5 relative top-0 md:top-8 w-full">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto -mt-12 mb-4 border-4 border-surface">
                            2
                        </div>
                        <div className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-2">Silver Tier</div>
                        <div className="text-3xl font-black text-white mb-4">$10,000</div>
                        <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left pl-4 list-disc marker:text-gray-300">
                            <li>Mentorship credits</li>
                            <li>Cloud credits</li>
                            <li>Swag pack</li>
                        </ul>
                    </div>

                    {/* Gold - 1st Place */}
                    <div className="order-1 md:order-2 flex-1 bg-surface bg-gradient-to-b from-primary/10 to-surface p-8 rounded-xl border border-primary/30 relative w-full transform md:-translate-y-4 shadow-2xl shadow-primary/20">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto -mt-16 mb-6 border-4 border-surface shadow-lg shadow-yellow-400/50">
                            1
                        </div>
                        <div className="text-primary font-bold uppercase tracking-wider text-sm mb-2 animate-pulse">Gold Tier</div>
                        <div className="text-5xl font-black text-white mb-6">$25,000</div>
                        <ul className="text-sm text-gray-300 space-y-3 mb-8 text-left pl-4 list-disc marker:text-yellow-400">
                            <li>Direct entry to Accelerator</li>
                            <li>Investor meetings</li>
                            <li>Full Cloud suite</li>
                            <li>Premium Swag</li>
                        </ul>
                        <button className="w-full bg-primary text-black font-bold py-3 rounded hover:bg-accent transition-colors">
                            View Details
                        </button>
                    </div>

                    {/* Bronze - 3rd Place */}
                    <div className="order-3 md:order-3 flex-1 bg-surface p-6 rounded-b-xl md:rounded-xl border border-white/5 relative top-0 md:top-16 w-full">
                        <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto -mt-12 mb-4 border-4 border-surface">
                            3
                        </div>
                        <div className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-2">Bronze Tier</div>
                        <div className="text-2xl font-black text-white mb-4">$5,000</div>
                        <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left pl-4 list-disc marker:text-amber-700">
                            <li>Certificate of Excellence</li>
                            <li>Tech accessories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
