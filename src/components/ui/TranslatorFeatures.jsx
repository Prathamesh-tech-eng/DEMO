import React from 'react';
import {
    MicrophoneIcon,
    ChatBubbleLeftRightIcon,
    UsersIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        icon: <MicrophoneIcon className="w-6 h-6 text-white" />,
        title: "Live Multilingual Conversations",
        description: "Speech-to-Text (S2S) enables real-time conversations across languages."
    },
    {
        icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />,
        title: "Support in Meetings and Helplines",
        description: "Facilitates communication in support centers, offices, and online sessions."
    },
    {
        icon: <UsersIcon className="w-6 h-6 text-white" />,
        title: "Promotes Equality & Inclusion",
        description: "Ensures access to services and information for all citizens."
    },
    {
        icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />,
        title: "Accessibility for the Deaf Community",
        description: "Provides live subtitles and captions to enhance understanding."
    }
];

const TranslatorFeatures = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Why Use This Translator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-orange-100 p-5 rounded-xl shadow-sm flex items-start space-x-4">
                        <div className="bg-orange-500 p-3 rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-orange-700">{feature.title}</h3>
                            <p className="text-gray-700 text-sm mt-1">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TranslatorFeatures;
