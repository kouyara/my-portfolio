'use client';

import { projects } from '@/app/projects/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white-gray dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
            開発スキル・経験に関する成果物
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`/projects/${project.id}`}
              className="bg-white-custom dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group block cursor-pointer"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white font-inter-bold">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-primary rounded-full"
                      style={{ backgroundColor: 'var(--primary-blue-light)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center text-primary hover-text-primary font-medium transition-colors">
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
