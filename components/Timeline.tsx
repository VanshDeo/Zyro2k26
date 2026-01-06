export default function Timeline() {
    const events = [
        { date: "August 15, 2026", title: "Registration Opens", description: "Sign up and form your teams." },
        { date: "September 20, 2026", title: "Hackathon Kick-off", description: "Problem statements release and coding begins." },
        { date: "September 25, 2026", title: "Submission Deadline", description: "Final projects must be submitted by 11:59 PM." },
        { date: "September 28, 2026", title: "Winners Announced", description: "Closing ceremony and prize distribution." },
    ];

    return (
        <section id="timeline" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Event <span className="text-primary">Timeline</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-ml-0.5" />

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1.5 md:-translate-x-2 mt-1.5 md:mt-0 z-10 box-content" />

                                {/* Content */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                    <div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                                            {event.date}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                        <p className="text-gray-400 text-sm">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
