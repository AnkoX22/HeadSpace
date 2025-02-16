import './//styles.module.css';
import Link from "next/link";
import ClockIcon from "../../public/clock-about.svg";
import ShuffleIcon from "../../public/shuffle-about.svg";
import GraphIcon from "../../public/graph-about.svg";
import QuestionIcon from "../../public/question-about.svg";
import CheckIcon from "../../public/check-about.svg";
import ReviewIcon from "../../public/review-about.svg";
import React from 'react';



export default function About() {
    const methods = [
        {
            title: "The Promodoro Method",
            path: "../promodoro",
            description: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.",
            icon: ClockIcon
        },
        {
            title: "The Elaborate Interrogation Method",
            path: "../elaborate_interrogation",
            description: "Elaborative Interrogation is a cognitive learning strategy that enhances comprehension and retention by prompting learners to generate explanations for why certain facts or concepts are true. This method encourages deeper processing of information by connecting new material to existing knowledge, thus creating a more integrated understanding.",
            icon: QuestionIcon
        },
        {
            title: "The Interleaving Method",
            path: "../interleaving",
            description: "Interleaving is a process where students mix, or interleave, multiple subjects or topics while they study in order to improve their learning",
            icon: ShuffleIcon
        },
        {
            title: "The Mind Mapping Method",
            path: "../mind_mapping",
            description: "A mind map is a diagram used to visually organize information into a hierarchy, showing relationships among pieces of the whole. It is often based on a single concept, drawn as an image in the center of a blank page, to which associated representations of ideas such as images, words and parts of words are added. Major ideas are connected directly to the central concept, and other ideas branch out from those major ideas.",
            icon: GraphIcon
        },
        {
            title: "The Practice Testing Method",
            path: "../practice_testing",
            description: "Practice testing, also known as retrieval practice, involves studying a topic and then trying to recall the newly studied material. For example, students read a passage or watch a lecture and then try to recall as much as they can. Or, students read an article followed by a practice quiz.",
            icon: CheckIcon
        },
        {
            title: "The Review / Revise Method",
            path: "../review_revise",
            description: "The Recall and Revise study method is a highly effective learning strategy that emphasizes active engagement with material and periodic review to reinforce memory. It is rooted in the principles of active recall and spaced repetition, which are backed by cognitive science as being essential for deep learning and long-term retention.",
            icon: ReviewIcon
        }
    ];

    return (
        <main className="container mx-auto px-8 py-12 max-w-7xl bg-gradient-to-r from-gray-50 to-white">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="text-2xl text-gray-800 font-bold mb-4 mt-16 text-center header">Method
                        Details</h1>

                    {/* Study Methods */}
                    {methods.map((method, index) => (
                        //<StudyMethod key={index} {...method} />
                        <div
                        key ={index}
                        className="rounded-xl p-8 border mb-8  shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:bg-white hover:border-gray-300 hover:scale-110">
                        <div className="flex items-center mb-4">
                        <method.icon className="text-teal-500 mr-4 h-10 w-10"/>
                        <h2 className=" font-montserrat text-2xl text-gray-800 font-semibold mb-2font-bold mb-4">{method.title}
                </h2>
            </div>
            <Link href={method.path} className="text-decoration-none ">
                <p className="text-grey-700 leading-relaxed text-dark mb-0 hover:text-teal-500 ">{method.description}</p>
            </Link>
        </div>
    )
)}

{/* About Section */
}
    <div
        className="bg-white rounded-xl p-8 border border-gray-200 mb-8  shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:bg-white hover:border-gray-300 hover:scale-110">
        <h2 className="font-montserrat font-bold text-2xl text-gray-800 mb-4">About HeadSpace</h2>
        <div className="text-gray-700 mb-4">
            <p className="mb-4 leading-relaxed hover:text-teal-500 transition-colors duration-300">
                The main goal of HeadSpace is to create a space where the most famous and most well
                                working study methods / techniques can coexist. The methods can be tried and implemented
                                on their own or in combination with each other to produce the desired results.
                            </p>
                            <p className="text-muted leading-relaxed hover:text-teal-500 transition-colors duration-300">
                                This website is created as a project for an introductory course in Web Development, so
                                note that mistakes may occur and the support may not be satisfactory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}