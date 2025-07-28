import React, { useState } from 'react';
import InputArea from '../components/ui/InputArea';
import OutputArea from '../components/ui/OutputArea';
import LanguageSelector from '../components/ui/LanguageSelector';
import InputTypeSelector from '../components/ui/InputTypeSelector';

const backend_url = import.meta.env.VITE_TRANSLATOR_BACKEND_URL;  // replace with actual URL

// Ensure languages is an array
const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Chinese'];

const AITranslatorPage = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('auto');
    const [targetLanguage, setTargetLanguage] = useState('english');
    const [inputType, setInputType] = useState<'text' | 'voice'>('text');

    // Handles translation logic
    const handleTranslate = async () => {
        try {
            const response = await fetch(`${backend_url}/translate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: inputText,
                    sourceLang: sourceLanguage || 'auto',
                    targetLang: targetLanguage
                })
            });
            const data = await response.json();
            setOutputText(data?.translation || '');
        } catch (err) {
            console.error('Translation Error:', err);
            setOutputText('Translation failed.');
        }
    };

    // Play the translated text as audio
    const handlePlayAudio = () => {
        const utterance = new SpeechSynthesisUtterance(outputText);
        utterance.lang = targetLanguage || 'en';
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="min-h-screen bg-yellow-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
                <h1 className="text-3xl font-bold text-orange-600 text-center">AI Translator</h1>
                <InputTypeSelector inputType={inputType} onInputTypeChange={setInputType} />
                <LanguageSelector
                    sourceLanguage={sourceLanguage}
                    targetLanguage={targetLanguage}
                    onSourceLanguageChange={setSourceLanguage}
                    onTargetLanguageChange={setTargetLanguage}
                    languages={languages}
                />
                <InputArea
                    inputType={inputType}
                    inputText={inputText}
                    onInputChange={setInputText}
                    onLiveSpeechUpdate={setInputText}
                />
                <button
                    onClick={handleTranslate}
                    disabled={!inputText.trim()}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md"
                >
                    Translate
                </button>
                <OutputArea outputText={outputText} onPlayAudio={handlePlayAudio} />
            </div>
        </div>
    );
};

export default AITranslatorPage;
