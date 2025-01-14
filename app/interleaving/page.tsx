'use client';

import Clock from "@/app/components/clock/page";
import React from "react";

export default function Interleaving() {
    let counter: number = 3;

    const createTextArea = () => {
        const addTextAreaElement = document.getElementById("add-text-area");
        if (addTextAreaElement) {
            addTextAreaElement.innerHTML = `<textarea class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" cols="20" rows="3" placeholder="Topic ${counter}"></textarea>`;
            counter++;
        } else {
            console.error("Element by that id not found!");
        }
    };

    return (
        <div className="container mx-auto py-5 px-4">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Session Name</h1>
                <h2 className="text-lg text-gray-600">Technique: Interleaving</h2>
            </header>

            <div className="flex flex-col md:flex-row justify-center gap-6">
                {/* Left Section */}
                <div className="w-full md:w-6/12">
                    <div className="bg-white shadow-sm rounded-lg p-6">
                        <div className="flex flex-col gap-4 mb-4">
              <textarea
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Topic 1"
              ></textarea>
                            <textarea
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Topic 2"
                            ></textarea>
                            <textarea
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Topic 3"
                            ></textarea>
                            <div id="add-text-area"></div>
                        </div>
                        <button
                            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 flex items-center gap-2"
                            onClick={createTextArea}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                                />
                            </svg>
                            Add Topic
                        </button>
                    </div>
                </div>

                {/* Right Section - Clock */}
                <div className="w-full md:w-4/12">
                    <div className="bg-white shadow-sm rounded-lg p-6 h-fit">
                        <div className="text-center">
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}