'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'TypeScript', icon: 'typescript.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'Dart', icon: 'dart.svg' },
        { name: 'React', icon: 'react.svg' },
        { name: 'Next.js', icon: 'nextjs.svg' },
        { name: 'Flutter', icon: 'flutter.svg' },
        { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: 'python.svg' },
        { name: 'Ruby', icon: 'ruby.png' },
        { name: 'PHP', icon: 'php.svg' },
        { name: 'Flask', icon: 'flask.svg' },
        { name: 'FastAPI', icon: 'fastapi.svg' },
        { name: 'Ruby on Rails', icon: 'rails.svg' },
        { name: 'PostgreSQL', icon: 'postgresql.png' },
        { name: 'MySQL', icon: 'mysql.png' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'C#', icon: 'csharp.svg' },
        { name: 'Unity', icon: 'unity.png' },
        { name: 'Git/GitHub', icon: 'github.svg' },
        { name: 'Docker', icon: 'docker.svg' },
        { name: 'nginx', icon: 'nginx.png' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white-custom dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white-gray dark:bg-gray-900 rounded-xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center font-inter-bold">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow px-3 py-3">
                      <img
                        src={`/${skill.icon}`}
                        alt={skill.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium font-inter text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
