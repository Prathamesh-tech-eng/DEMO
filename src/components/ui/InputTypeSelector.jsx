import React from 'react';

const InputTypeSelector = ({ inputType, onInputTypeChange }) => {
    return (
        <div className="flex justify-center space-x-4">
            <button
                onClick={() => onInputTypeChange('text')}
                className={`px-4 py-2 ${inputType === 'text' ? 'bg-orange-500' : 'bg-gray-300'} text-white rounded-md`}
            >
                Text Input
            </button>
            <button
                onClick={() => onInputTypeChange('voice')}
                className={`px-4 py-2 ${inputType === 'voice' ? 'bg-orange-500' : 'bg-gray-300'} text-white rounded-md`}
            >
                Voice Input
            </button>
        </div>
    );
};

export default InputTypeSelector;
