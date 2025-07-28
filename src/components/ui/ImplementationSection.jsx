import React from 'react';
import KeyFeatureCard from './KeyFeatureCard';
import { DocumentMagnifyingGlassIcon, GlobeAltIcon, SpeakerWaveIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function ImplementationSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-12">Core Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <KeyFeatureCard
                        icon={<SpeakerWaveIcon className="w-6 h-6 text-orange-500" />}
                        title="Live Speech Translation"
                        description="Enables seamless speech translation in real time across multiple Indian languages."
                    />
                    <KeyFeatureCard
                        icon={<DocumentMagnifyingGlassIcon className="w-6 h-6 text-orange-500" />}
                        title="Instant Document Translation"
                        description="Simplifies complex legal and policy documents instantly for better understanding."
                    />
                    <KeyFeatureCard
                        icon={<GlobeAltIcon className="w-6 h-6 text-orange-500" />}
                        title="Multilingual Accessibility"
                        description="Makes services accessible to everyone, regardless of language barriers."
                    />
                    <KeyFeatureCard
                        icon={<AcademicCapIcon className="w-6 h-6 text-orange-500" />}
                        title="Educational Material Support"
                        description="Translate study materials instantly to support diverse learners and educators."
                    />
                </div>
            </div>
        </section>
    );
}

export default ImplementationSection;