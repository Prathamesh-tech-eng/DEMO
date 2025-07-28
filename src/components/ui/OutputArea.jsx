import React from 'react';

const OutputArea = ({ outputText, onPlayAudio }) => {
    return (
        <div className="space-y-4 mt-6">
            <label htmlFor="output-text" className="text-sm font-medium text-gray-700">Translated Text</label>
            <textarea
                id="output-text"
                rows="4"
                className="w-full p-2 border rounded-md bg-gray-100"
                value={outputText}
                readOnly
                placeholder="Translated text will appear here"
            />
            <div className="flex justify-end">
                <button
                    onClick={onPlayAudio}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                    Play Audio
                </button>
            </div>
        </div>
    );
};

export default OutputArea;
