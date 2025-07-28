import React, { useState, useRef, useCallback } from 'react';
import { speechToText } from '../../Services/apiService'; // Placeholder for your backend service

const InputArea = ({ inputType, inputText, onInputChange, onLiveSpeechUpdate }) => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);
    const [tempTranscription, setTempTranscription] = useState('');

    // Start voice recording
    const startRecording = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.current.push(event.data);
                    setTempTranscription('Recording...');
                }
            };

            mediaRecorder.current.onstop = async () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
                audioChunks.current = [];
                setTempTranscription('');

                const transcribedData = await speechToText(audioBlob, 'auto');
                onInputChange(transcribedData.transcribedText);
                onLiveSpeechUpdate(transcribedData.transcribedText);
                setIsRecording(false);
            };

            mediaRecorder.current.start();
            setIsRecording(true);
            setTempTranscription('Recording...');
        } catch (error) {
            console.error('Microphone Error:', error);
            setTempTranscription('Microphone error');
        }
    }, [onInputChange, onLiveSpeechUpdate]);

    // Stop recording
    const stopRecording = useCallback(() => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setTempTranscription('Processing...');
        }
    }, []);

    const handleVoiceButtonClick = () => {
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    };

    return (
        <div className="space-y-4">
            {inputType === 'text' && (
                <>
                    <label htmlFor="input-text" className="text-sm font-medium text-gray-700">Enter Text</label>
                    <textarea
                        id="input-text"
                        rows="4"
                        className="w-full p-2 border rounded-md"
                        placeholder="Type text here"
                        value={inputText}
                        onChange={(e) => onInputChange(e.target.value)}
                    />
                </>
            )}
            {inputType === 'voice' && (
                <div className="bg-gray-100 p-4 rounded-md">
                    <p>{tempTranscription || "Voice input mode. Start/stop recording."}</p>
                </div>
            )}
            <button
                onClick={handleVoiceButtonClick}
                className={`mt-2 w-full px-4 py-2 ${isRecording ? 'bg-red-600' : 'bg-indigo-600'} text-white`}
            >
                {isRecording ? 'Stop Recording' : 'Start Voice Input'}
            </button>
        </div>
    );
};

export default InputArea;
