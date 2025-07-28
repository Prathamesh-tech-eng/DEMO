import React from 'react';

const LanguageSelector = ({ sourceLanguage, targetLanguage, onSourceLanguageChange, onTargetLanguageChange, languages }) => {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="source-language" className="text-sm font-medium text-gray-700">Source Language</label>
                <select
                    id="source-language"
                    className="w-full p-2 border rounded-md"
                    value={sourceLanguage}
                    onChange={(e) => onSourceLanguageChange(e.target.value)}
                >
                    <option value="auto">Auto Detect</option>
                    {languages.map((lang) => (
                        <option key={lang} value={lang.toLowerCase()}>{lang}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="target-language" className="text-sm font-medium text-gray-700">Target Language</label>
                <select
                    id="target-language"
                    className="w-full p-2 border rounded-md"
                    value={targetLanguage}
                    onChange={(e) => onTargetLanguageChange(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option key={lang} value={lang.toLowerCase()}>{lang}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default LanguageSelector;
