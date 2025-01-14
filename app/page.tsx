import "./main.modules.css";

export default function Home() {
  return (
      <>
          <main className="w-full p-6 bg-gray-50">
              {/* Hero Section */}
              <section
                  className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white">
                  <h1 className="text-4xl font-bold mb-4">Master Your Study Techniques</h1>
                  <p className="text-lg mb-8">
                      Discover proven study methods to boost your productivity, retention, and success.
                  </p>
                  <button
                      className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                      Explore Methods
                  </button>
              </section>

              {/* Featured Study Methods */}
              <section className="my-12">
                  <h2 className="text-2xl font-bold mb-6">Featured Study Methods</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Method Card 1 */}
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl font-semibold mb-2">Pomodoro Technique</h3>
                          <p className="text-gray-600 mb-4">
                              Break your study sessions into focused intervals with short breaks in between.
                          </p>
                          <button className="text-blue-500 hover:underline">Learn More</button>
                      </div>

                      {/* Method Card 2 */}
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl font-semibold mb-2">Spaced Repetition</h3>
                          <p className="text-gray-600 mb-4">
                              Optimize your memory retention by reviewing material at increasing intervals.
                          </p>
                          <button className="text-blue-500 hover:underline">Learn More</button>
                      </div>

                      {/* Method Card 3 */}
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-xl font-semibold mb-2">Mind Mapping</h3>
                          <p className="text-gray-600 mb-4">
                              Visualize complex topics and ideas using interconnected diagrams.
                          </p>
                          <button className="text-blue-500 hover:underline">Learn More</button>
                      </div>
                  </div>
              </section>

              {/* Study Method Categories */}
              <section className="my-12">
                  <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {/* Category 1 */}
                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-lg font-semibold mb-2">Time Management</h3>
                          <p className="text-gray-600">Techniques to organize your study schedule.</p>
                      </div>

                      {/* Category 2 */}
                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-lg font-semibold mb-2">Memory Techniques</h3>
                          <p className="text-gray-600">Boost your retention and recall.</p>
                      </div>

                      {/* Category 3 */}
                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-lg font-semibold mb-2">Visual Learning</h3>
                          <p className="text-gray-600">Use diagrams and visuals to understand concepts.</p>
                      </div>

                      {/* Category 4 */}
                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                          <h3 className="text-lg font-semibold mb-2">Active Recall</h3>
                          <p className="text-gray-600">Test yourself to reinforce learning.</p>
                      </div>
                  </div>
              </section>
              
              {/* Call-to-Action */}
              <section
                  className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white">
                  <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Study Habits?</h2>
                  <p className="text-lg mb-8">
                      Join thousands of students who are already achieving their academic goals.
                  </p>
                  <button
                      className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                      Get Started Now
                  </button>
              </section>
          </main>
      </>
  );
}
