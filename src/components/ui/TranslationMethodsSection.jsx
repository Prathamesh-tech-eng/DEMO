import React from 'react';
import FeatureCard from './FeatureCard';
import {
    MicrophoneIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    UsersIcon
} from '@heroicons/react/24/outline';

function TranslationMethodsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-12">
                    Versatile Translation Methods
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-orange-50 rounded-lg shadow-sm p-6">
                        <FeatureCard
                            icon={
                                <div className="bg-yellow-400 rounded-full p-3 inline-flex items-center justify-center">
                                    <MicrophoneIcon className="w-6 h-6 text-white" />
                                </div>
                            }
                            title="Real-Time Conversation"
                            description="Facilitates live multilingual conversations using speech-to-speech (S2S) technology in helplines, meetings, and more."
                        />
                    </div>

                    <div className="bg-orange-50 rounded-lg shadow-sm p-6">
                        <FeatureCard
                            icon={
                                <div className="bg-yellow-400 rounded-full p-3 inline-flex items-center justify-center">
                                    <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-white" />
                                </div>
                            }
                            title="Accessibility Solutions"
                            description="Supports deaf and hearing-impaired users by providing captions and text versions of conversations."
                        />
                    </div>

                    <div className="bg-orange-50 rounded-lg shadow-sm p-6">
                        <FeatureCard
                            icon={
                                <div className="bg-yellow-400 rounded-full p-3 inline-flex items-center justify-center">
                                    <UsersIcon className="w-6 h-6 text-white" />
                                </div>
                            }
                            title="Empowerment through Inclusion"
                            description="Promotes digital equality, ensuring everyone can access services and information in their language."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TranslationMethodsSection;
