import './//styles.module.css';
import Link from "next/link";


const StudyMethod = ({ title, path, description}:{title: string, path: string, description: string}) => (
    <div className="bg-white rounded-lg shadow-sm mb-4 p-6 hover:shadow-md transition-shadow duration-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-pink-100 duration-300">
        <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{title}</h2>
        <Link href={path} className="text-decoration-none">
            <p className="text-grey-600 text-dark mb-0 hover:text-pink-500 ">{description}</p>
        </Link>
    </div>
);

export default function About() {
    const methods = [
        {
            title: "The Promodoro Method",
            path: "../promodoro",
            description: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student."
        },
        {
            title: "The Elaborate Interrogation Method",
            path: "../elaborate_interrogation",
            description: "Elaborative Interrogation is a cognitive learning strategy that enhances comprehension and retention by prompting learners to generate explanations for why certain facts or concepts are true. This method encourages deeper processing of information by connecting new material to existing knowledge, thus creating a more integrated understanding."
        },
        {
            title: "The Interleaving Method",
            path: "../interleaving",
            description: "Interleaving is a process where students mix, or interleave, multiple subjects or topics while they study in order to improve their learning"
        },
        {
            title: "The Mind Mapping Method",
            path: "../mind_mapping",
            description: "A mind map is a diagram used to visually organize information into a hierarchy, showing relationships among pieces of the whole. It is often based on a single concept, drawn as an image in the center of a blank page, to which associated representations of ideas such as images, words and parts of words are added. Major ideas are connected directly to the central concept, and other ideas branch out from those major ideas."
        },
        {
            title: "The Practice Testing Method",
            path: "../practice_testing",
            description: "Practice testing, also known as retrieval practice, involves studying a topic and then trying to recall the newly studied material. For example, students read a passage or watch a lecture and then try to recall as much as they can. Or, students read an article followed by a practice quiz."
        },
        {
            title: "The Review / Revise Method",
            path: "../review_revise",
            description: "The Recall and Revise study method is a highly effective learning strategy that emphasizes active engagement with material and periodic review to reinforce memory. It is rooted in the principles of active recall and spaced repetition, which are backed by cognitive science as being essential for deep learning and long-term retention."
        }
    ];

    return (
        <div className="container mx-auto py-5 bg-gradient-to-r from-gray-50 to-white">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="text-xl font-bold mb-4 text-center header animate-bounce">Method Details</h1>

                    {/* Study Methods */}
                    {methods.map((method, index) => (
                        <StudyMethod key={index} {...method} />
                    ))}

                    {/* About Section */}
                    <div className="bg-white rounded-lg shadow-sm mb-4 py-6 px-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-pink-100 duration-300">
                        <h2 className="text-xl font-bold mb-2 mb-4 hover:text-blue-600">About HeadSpace</h2>
                        <div className="text-gray-700 mb-4">
                            <p className="mb-4 hover:text-pink-500 transition-colors duration-300">
                                The main goal of HeadSpace is to create a space where the most famous and most well
                                working study methods / techniques can coexist. The methods can be tried and implemented
                                on their own or in combination with each other to produce the desired results.
                            </p>
                            <p className="text-muted hover:text-pink-500 transition-colors duration-300">
                                This website is created as a project for an introductory course in Web Development, so
                                note that mistakes may occur and the support may not be satisfactory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}