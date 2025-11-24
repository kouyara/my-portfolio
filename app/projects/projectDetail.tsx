import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectDetailProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  additionalInfo?: ReactNode;
}

interface DetailHeadingProps {
  children: ReactNode;
  className?: string;
}

interface DetailParagraphProps {
  children: ReactNode;
  className?: string;
}

const tagIconMap: Record<string, string> = {
  python: '/python.svg',
  javascript: '/javascript.svg',
  typescript: '/typescript.svg',
  dart: '/dart.svg',
  react: '/react.svg',
  'next.js': '/nextjs.svg',
  nextjs: '/nextjs.svg',
  flutter: '/flutter.svg',
  'tailwind css': '/tailwindcss.svg',
  tailwindcss: '/tailwindcss.svg',
  flask: '/flask.svg',
  fastapi: '/fastapi.svg',
  ruby: '/ruby.png',
  'ruby on rails': '/rails.svg',
  php: '/php.svg',
  jinja2: '/jinja2.svg',
  postgresql: '/postgresql.png',
  mysql: '/mysql.png',
  docker: '/docker.svg',
  nginx: '/nginx.png',
  unity: '/unity.png',
  blender: '/blender.svg',
  'c#': '/csharp.svg',
  git: '/github.svg',
  rust: '/rust.svg',
  webassembly: '/webassembly.svg',
  wasm: '/webassembly.svg',
  yew: '/yew.svg',
  canvas: '/canvas.svg',
};

const getTagIcon = (tag: string) => {
  const normalized = tag.trim().toLowerCase();
  return tagIconMap[normalized];
};

const getTagFallbackLabel = (tag: string) => {
  return tag.trim().slice(0, 4).toUpperCase();
};

export function DetailHeading({
  children,
  className = '',
}: DetailHeadingProps) {
  return (
    <h2
      className={`text-xl font-inter-bold text-gray-900 dark:text-white mb-3 ${className}`.trim()}
    >
      {children}
    </h2>
  );
}

export function DetailParagraph({
  children,
  className = '',
}: DetailParagraphProps) {
  return (
    <p
      className={`text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-inter ${className}`.trim()}
    >
      {children}
    </p>
  );
}

export default function ProjectDetail({
  title,
  description,
  image,
  tags,
  additionalInfo,
}: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-white-custom dark:bg-black pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-primary hover-text-primary font-medium mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        <article className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-inter-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h1>
            <DetailParagraph className="text-gray-600 dark:text-gray-400">
              {description}
            </DetailParagraph>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>

          <div className="flex flex-wrap gap-6">
            {tags.map((tag, index) => {
              const iconSrc = getTagIcon(tag);
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 min-w-[90px]"
                >
                  {iconSrc ? (
                    <div className="h-12 px-4 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg shadow-md">
                      <img
                        src={iconSrc}
                        alt={tag}
                        className="h-8 w-auto max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-12 px-4 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg shadow-md">
                      <span className="text-sm font-inter text-gray-600 dark:text-gray-300">
                        {getTagFallbackLabel(tag)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-inter text-center">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>

          {additionalInfo && <div>{additionalInfo}</div>}
        </article>
      </div>
    </main>
  );
}
