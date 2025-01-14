'use client'

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const handleAnswerChange = (question: string, value:string) => {
        setAnswers(prev => ({
            ...prev,
            [question]: value
        }));

        // Update history log
        const timestamp = new Date().toLocaleTimeString();
        const newEntry = `[${timestamp}] ${question.toUpperCase()}: ${value}\n`;
        setHistoryLog(prev => prev + newEntry);
    };

    const handleAddCustomQuestion = (): void => {
        // Prompt the user for a custom question
        const question = prompt('Enter your custom question:');

        if (question && question.trim() !== '') { // Ensure the question is non-empty
            setCustomQuestions((prev: string[]) => [...prev, question.trim()]); // Add question to the list

            setAnswers((prev: Record<string, string>) => ({
                ...prev,
                [question.trim()]: '' // Initialize the answer for the new question
            }));
        } else {
            alert('Question cannot be empty.'); // Inform the user about invalid input
        }
    };


    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    {/* Header */}
                    <header className="row mb-3 method-label">
                        <h1 className="col method-label session-name">Session Name</h1>
                        <h2 className="technique-name">Technique: Elaborate Interrogation</h2>
                    </header>

                    <div className="row">
                        {/* Left Section */}
                        <div className="col-md-8 mb-4 mb-md-0">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    {/* File Buttons */}
                                    <div className="d-flex gap-2 mb-4">
                                        <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown">
                                                {currentFile}
                                            </button>
                                            <ul className="dropdown-menu">
                                                {files.map((file, index) => (
                                                    <li key={index}>
                                                        <button
                                                            className="dropdown-item"
                                                            onClick={() => setCurrentFile(file)}
                                                        >
                                                            {file}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <button
                                            className="btn btn-outline-primary"
                                            onClick={handleAddFile}
                                        >
                                            + Add File
                                        </button>
                                    </div>

                                    {/* Questions Section */}
                                    <div className="mb-4">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Why?</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Enter answer here"
                                                value={answers.why}
                                                onChange={(e) => handleAnswerChange('why', e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">How?</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Enter answer here"
                                                value={answers.how}
                                                onChange={(e) => handleAnswerChange('how', e.target.value)}
                                            />
                                        </div>

                                        {/* Custom Questions */}
                                        {customQuestions.map((question, index) => (
                                            <div key={index} className="mb-3">
                                                <label className="form-label fw-bold">{question}</label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Enter answer here"
                                                    value={answers[question] || ''}
                                                    onChange={(e) => handleAnswerChange(question, e.target.value)}
                                                />
                                            </div>
                                        ))}

                                        <button
                                            className="btn btn-secondary mt-3"
                                            onClick={handleAddCustomQuestion}
                                        >
                                            Create Custom Question
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">History Log</h5>
                                    <textarea
                                        className="form-control h-100"
                                        style={{minHeight: '400px'}}
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
        </div>
    );
};

export default ElaborateInterrogation;