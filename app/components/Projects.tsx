export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: '🛒',
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Real-time analytics dashboard for social media metrics with interactive charts and data visualization.',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      image: '📊',
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with drag-and-drop functionality and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
      link: '#',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Beautiful weather application with detailed forecasts, location-based weather data, and interactive maps.',
      tags: ['Next.js', 'API Integration', 'Mapbox'],
      image: '🌤️',
      link: '#',
    },
    {
      title: 'Blog Platform',
      description:
        'Modern blogging platform with markdown support, SEO optimization, and content management system.',
      tags: ['Next.js', 'MDX', 'Vercel'],
      image: '📝',
      link: '#',
    },
    {
      title: 'Portfolio Generator',
      description:
        'Automated portfolio website generator with customizable templates and deployment options.',
      tags: ['React', 'Gatsby', 'GraphQL'],
      image: '🎨',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter-bold">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
