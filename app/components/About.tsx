export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Illustration */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <svg
                  className="w-2/3 h-2/3 text-gray-400 dark:text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-inter-bold">
              Hi, I&apos;m a Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
              I&apos;m a passionate developer with expertise in building modern
              web applications. I love turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
              With experience in both frontend and backend development, I create
              seamless user experiences while ensuring robust and scalable
              server-side functionality.
            </p>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 font-inter-bold">
                  3+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  Years Experience
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 font-inter-bold">
                  20+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  Projects Completed
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 font-inter-bold">
                  10+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  Happy Clients
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 font-inter-bold">
                  5+
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
