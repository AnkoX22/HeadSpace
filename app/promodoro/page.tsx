'use client'

import "./promodoro.modules.css";
import Clock from "@/app/components/clock/page";
import React, {useState} from "react";
import PlusIcon from "../../public/plus-icon2.svg";
import ClockIcon from "../../public/clock.svg";
import UpIcon from "../../public/up-icon.svg";
import DownIcon from "../../public/down-icon.svg";

export default function Promodoro() {

    const [task, setTask] = useState([]);
    const [currentNotes, setNotes] = useState([]);

    let counter = 1;

    const handleAddTask = () => {

        setTask((prevTasks) => [...prevTasks, prevTasks.length + counter]);
        counter++;
    }

    return (
    <main className="container mx-auto py-5 px-4">
        {/* Header */}
        <header className="mb-6">
            <h2 className="font-montserrat font-bold text-3xl text-gray-800 mt-20 mb-8 border-b-2 border-gray-200 pb-2">Technique:
                Promodoro</h2>
        </header>

        <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Left Section */}
            <div className="w-full md:w-6/12">
                <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex flex-col gap-4 mb-4">

                        <div id="add-task"></div>
                    </div>
                    <h3 className="text-xl text-gray-800  border-b-2 border-gray-200 font-semibold mb-2">Tasks</h3>
                    {
                        task.map( (counter) => (
                            <textarea key = {counter}
                                      className="w-full mb-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                      placeholder={`What are you working on ?`}
                            ></textarea>
                        ))
                    }
                    <button
                        className="border border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:bg-blue-50 flex items-center gap-2"
                        onClick={handleAddTask}
                    >
                        <PlusIcon width="25" height="25" className="text-teal-500 fill-teal-500"/>
                        Add Tasks
                    </button>
                </div>
            </div>

            {/* Right Section - Clock */}
            <div className="w-full md:w-4/12">
                <div className="bg-white shadow-sm rounded-lg p-6 h-fit">
                    <div className="text-center">
                        <Clock/>
                    </div>
                </div>
            </div>
        </div>
    </main>
)
    ;
}