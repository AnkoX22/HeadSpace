'use client'

import "./main.modules.css";
import ClockIcon from "../public/clock.svg";
import ShuffleIcon from "../public/shuffle.svg";
import DiagramIcon from "../public/diagram-3.svg";
import QuestionIcon from "../public/patch-question.svg";

export default function Home() {

    const handlePromodoroButton = () => {
        window.location.href = 'promodoro';
    }

    const handleElaborateButton = () => {
        window.location.href = 'elaborate_interrogation';
    }

    const handleInterleavingButton = () => {
        window.location.href = 'interleaving';
    }

    const handleMappingButton = () => {
        window.location.href = 'mind_mapping';
    }

    const handleExploreButton = () => {
        window.location.href = 'about';
    }

  return (
      <main className="w-full p-6 px-6 max-w-screen-2xl py-12 bg-gray-50 container mx-auto">
          {/* Hero Section */}
          <section
              className="text-center py-12 rounded-lg shadow-lg text-white hero">
              <h1 className="text-4xl font-bold  mb-4 hero-text">Master Your Study Techniques</h1>
              <p className="text-lg mb-8 font-medium hero-text leading-relaxed">
                  Discover proven study methods to boost your productivity, retention, and success.
              </p>
              <button
                  onClick={handleExploreButton}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-300 focus:border-teal-400">
                  Explore Methods
              </button>
          </section>

          {/* Featured Study Methods */}
          <div className="my-12 ">
              <h2 className="font-montserrat font-bold text-3xl text-gray-800 mt-20 mb-8 border-b-2 border-gray-200 pb-2">Featured
                  Study Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Method Card 1 */}
                  <div
                      className="bg-white rounded-lg p-8 border border-gray-200  shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:bg-white hover:border-gray-300 hover:scale-110">
                      <div className="flex items-center mb-4">
                          <ClockIcon width="32" height="32" className="text-teal-500"/>
                          <h3 className="text-xl text-gray-800 font-semibold mb-2">Pomodoro Technique</h3>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">
                          Break your study sessions into focused intervals with short breaks in between.
                      </p>
                      <button
                          onClick={handlePromodoroButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try it out now!
                      </button>
                  </div>

                  {/* Method Card 2 */}
                  <div
                      className="bg-white border border-gray-200  rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <div className="flex items-center mb-4">
                          <ShuffleIcon width="32" height="32" className="text-teal-500"/>
                          <h3 className="text-xl text-gray-800 font-semibold mb-2">Interleaving</h3>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">
                          Optimize your memory retention by reviewing material at increasing intervals.
                      </p>
                      <button
                          onClick={handleInterleavingButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try in out now!
                      </button>
                  </div>

                  {/* Method Card 3 */}
                  <div
                      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <div className="flex items-center mb-4">
                          <QuestionIcon width="32" height="32" className="text-teal-500"/>
                          <h3 className="text-xl text-gray-800 font-semibold mb-2">Elaborate Interrogation</h3>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">
                          Visualize complex topics and ideas using interconnected diagrams.
                      </p>
                      <button
                          onClick={handleElaborateButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try it out now!
                      </button>
                  </div>

                  {/* Method Card 4 */}
                  <div
                      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <div className="flex items-center mb-4">
                          <DiagramIcon width="32" height="32" className="text-teal-500"/>
                          <h3 className="text-xl text-gray-800 font-semibold mb-2">Mind Mapping</h3>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">
                          Visualize complex topics and ideas using interconnected diagrams.
                      </p>
                      <button
                          onClick={handleMappingButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try in out now!
                      </button>
                  </div>
              </div>
          </div>

          {/* Study Method Categories */}
          <section className="my-12">
              <h2 className="font-montserrat font-bold text-3xl text-gray-800 mt-20 mb-8 border-b-2 border-gray-200 pb-2">Explore by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Category 1 */}
                  <div
                      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <h3 className="text-xl text-gray-800 font-semibold mb-2">Time Management</h3>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">Techniques to organize your study
                          schedule.</p>
                      <button
                          onClick={handleMappingButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try in out now!
                      </button>
                  </div>

                  {/* Category 2 */}
                  <div
                      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <h3 className="text-lg text-gray-800 font-semibold mb-2">Memory Techniques</h3>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">Boost your retention and recall.</p>
                      <button
                          onClick={handleMappingButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try in out now!
                      </button>
                  </div>

                  {/* Category 3 */}
                  <div
                      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <h3 className="text-lg text-gray-800 font-semibold mb-2">Visual Learning</h3>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">Use diagrams and visuals to
                          understand concepts.</p>
                      <button
                          onClick={handleMappingButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try in out now!
                      </button>
                  </div>

                  {/* Category 4 */}
                  <div
                      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-200 hover:translate-y-[-3px] mt-8 flex flex-col ease-in-out delay-150 hover:scale-110">
                      <h3 className="text-lg text-gray-800 font-semibold mb-2">Active Recall</h3>
                      <p className="text-gray-600 font-medium leading-relaxed mb-4">Test yourself to reinforce
                          learning.</p>
                      <button
                          onClick={handleMappingButton}
                          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-auto transition duration-300 focus:border-teal-400">
                          Try in out now!
                      </button>
                  </div>
              </div>
          </section>

      </main>
  );
}
