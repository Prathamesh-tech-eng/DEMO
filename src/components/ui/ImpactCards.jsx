import React from 'react';

const impacts = [
    {
        name: "Digital Inclusion",
        title: "Language Unity",
        feedback: "Bridges the digital divide, allowing marginalized communities to access government services online."
    },
    {
        name: "Rural Students",
        title: "Education Access",
        feedback: "Multilingual interfaces let rural students learn in their native tongue, improving education outcomes."
    },
    {
        name: "Local Businesses",
        title: "Market Reach",
        feedback: "Empowers entrepreneurs to expand through regional language support and accessibility."
    }
];

function ImpactCards() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-12">Real-World Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {impacts.map((impact, index) => (
                        <div key={index} className="bg-orange-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            <h4 className="text-xl font-semibold text-gray-800 mb-1">{impact.name}</h4>
                            <p className="text-gray-500 mb-3">{impact.title}</p>
                            <p className="text-gray-600 italic">"{impact.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ImpactCards;
