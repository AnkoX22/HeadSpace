'use client';

import React, { useState } from 'react';

const ElaborateInterrogation = () => {
    const [sessionName, setSessionName] = useState('');
    const [currentFile, setCurrentFile] = useState('Current Topic');
    const [files, setFiles] = useState(['Current Topic']);
    const [answers, setAnswers] = useState({ why: '', how: '' });
    const [customQuestions, setCustomQuestions] = useState([]);
    const [historyLog, setHistoryLog] = useState('');

    const handleAddFile = () => {
        const fileName = `Topic ${files.length + 1}`;
        setFiles([...files, fileName]);
    };

    const handleAnswerChange = (question: string, value: string) => {
        setAnswers((prev) => ({
            ...prev,
            [question]: value,
        }));

        // Update history log
        const timestamp = new Date().toLocaleTimeString();
        const newEntry = `[${timestamp}] ${question.toUpperCase()}: ${value}\n`;
        setHistoryLog((prev) => prev + newEntry);
    };

    const handleAddCustomQuestion = (): void => {
        // Prompt the user for a custom question
        const question = prompt('Enter your custom question:');

        if (question && question.trim() !== '') {
            // Ensure the question is non-empty
            setCustomQuestions((prev: string[]) => [...prev, question.trim()]); // Add question to the list

            setAnswers((prev: Record<string, string>) => ({
                ...prev,
                [question.trim()]: '', // Initialize the answer for the new question
            }));
        } else {
            alert('Question cannot be empty.'); // Inform the user about invalid input
        }
    };

    return (
        <div className="container mx-auto py-5 px-4">
            <div className="flex justify-center">
                <div className="w-full lg:w-10/12">
                    {/* Header */}
                    <header className="mb-6">
                        <h1 className="text-2xl font-bold mb-2">Session Name</h1>
                        <h2 className="text-lg text-gray-600">Technique: Elaborate Interrogation</h2>
                    </header>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Section */}
                        <div className="w-full md:w-8/12">
                            <div className="bg-white shadow-sm rounded-lg p-6">
                                {/* File Buttons */}
                                <div className="flex gap-2 mb-6">
                                    <div className="relative">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                                            {currentFile}
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                        <ul className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
                                            {files.map((file, index) => (
                                                <li key={index}>
                                                    <button
                                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                                        onClick={() => setCurrentFile(file)}
                                                    >
                                                        {file}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50"
                                        onClick={handleAddFile}
                                    >
                                        + Add File
                                    </button>
                                </div>

                                {/* Questions Section */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block font-bold mb-2">Why?</label>
                                        <textarea
                                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter answer here"
                                            value={answers.why}
                                            onChange={(e) => handleAnswerChange('why', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold mb-2">How?</label>
                                        <textarea
                                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter answer here"
                                            value={answers.how}
                                            onChange={(e) => handleAnswerChange('how', e.target.value)}
                                        />
                                    </div>

                                    {/* Custom Questions */}
                                    {customQuestions.map((question, index) => (
                                        <div key={index}>
                                            <label className="block font-bold mb-2">{question}</label>
                                            <textarea
                                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter answer here"
                                                value={answers[question] || ''}
                                                onChange={(e) => handleAnswerChange(question, e.target.value)}
                                            />
                                        </div>
                                    ))}

                                    <button
                                        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                                        onClick={handleAddCustomQuestion}
                                    >
                                        Create Custom Question
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="w-full md:w-4/12">
                            <div className="bg-white shadow-sm rounded-lg h-full p-6">
                                <h5 className="font-bold mb-4">History Log</h5>
                                <textarea
                                    className="w-full p-2 border h-5/6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={historyLog}
                                    readOnly
                                    placeholder="History log will appear here..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElaborateInterrogation;