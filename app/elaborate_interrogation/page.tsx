'use client';

import React, { useState } from 'react';
import "./interrogation.modules.css";

const ElaborateInterrogation = () => {
    const [sessionName, setSessionName] = useState('Session Name');
    const [currentTopic, setCurrentTopic] = useState('Current Topic');
    const [answers, setAnswers] = useState({ why: '', how: '' });
    const [customQuestions, setCustomQuestions] = useState([]);
    const [historyLog, setHistoryLog] = useState('');



    const handleAnswerChange = () => {


        const questionLabels = document.getElementsByClassName("question-label");
        const textareas = document.querySelectorAll<HTMLTextAreaElement>('.question-text');
        const questionAnswer = Array.from(textareas).map(textarea => textarea.value);
        const currentTopic = document.querySelector<HTMLTextAreaElement>('#topic');


        // Update history log
        const timestamp = new Date().toLocaleTimeString();

        let newEntry = timestamp + '\n';

        if(currentTopic){

            if(currentTopic.value != null){
                newEntry += currentTopic.value + "\n";
            }
        }

        const questionNumber = questionLabels.length;

        for(let i = 0; i < questionNumber; i++ ){
            newEntry += "\n" + questionLabels[i].textContent +":"+ '\n';
            newEntry += questionAnswer[i] + "\n";
        }

        setHistoryLog((prev) => prev + "\n" + newEntry);
    };

    const handleDeleteHistoryLog = () => {

        const historyLog = document.getElementById("history-log");

        if(historyLog){
            setHistoryLog("");
        }
        else{
            console.error("No history log was found!");
        }

    }

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

    const handleSessionNameChange = () => {

        const session_name = prompt("Enter Seession Name: ");

        if(session_name != null &&  session_name.trim() != ''){
            setSessionName(session_name);
        }
        else{
            alert("Session name cannot be absent!");
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const sessionHeading = document.querySelector<HTMLHeadingElement>('#session-name');

        if(sessionHeading != null){
            handleSessionNameChange();
            console.log("H1 found??");
        }
        else{
            console.log('No h1 found!!!11');
        }
    });




    return (
        <main className="container mx-auto py-5 px-4">
            <div className="flex justify-center">
                <div className="w-full lg:w-10/12">
                    {/* Header */}
                    <header className="mb-6">

                        <h2 className="font-montserrat font-bold text-3xl text-gray-800 mt-20 mb-8 border-b-2 border-gray-200 pb-2">Technique: Elaborate Interrogation</h2>
                    </header>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Section */}
                        <div className="w-full md:w-8/12">
                            <div className="bg-white shadow-sm rounded-lg p-6">
                                {/* File Buttons */}
                                <div className="flex gap-2 mb-6">
                                    <div className="relative">
                                        <textarea
                                            id={'topic'}
                                            placeholder={"Add topic"}
                                            className="bg-blue-500 text-white text-center font-bold placeholder-white px-4 py-2 rounded-lg flex items-center">
                                        </textarea>

                                    </div>
                                    <button
                                        className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50"
                                        onClick={handleAnswerChange}
                                    >
                                         Add to History Log
                                    </button>
                                </div>

                                {/* Questions Section */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block font-bold mb-2 question-label">Why?</label>
                                        <textarea
                                            className="question-text w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter answer here"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold mb-2 question-label">How?</label>
                                        <textarea
                                            className="question-text w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter answer here"
                                        />
                                    </div>

                                    {/* Custom Questions */}
                                    {customQuestions.map((question, index) => (
                                        <div key={index}>
                                            <label className="question-label block font-bold mb-2">{question}</label>
                                            <textarea
                                                className="question-text w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Enter answer here"

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
                            <div className="bg-white shadow-sm rounded-lg h-full  p-6">
                                <h5 className="font-bold mb-4">History Log</h5>
                                <textarea
                                    id = "history-log"
                                    className="w-full p-2 border h-2/3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={historyLog}
                                    readOnly
                                    placeholder="History log will appear here..."
                                />
                                <button
                                    onClick={handleDeleteHistoryLog}
                                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ElaborateInterrogation;