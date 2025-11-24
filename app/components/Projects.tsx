'use client';

export default function Projects() {
  const projects = [
    {
      id: 'payview',
      title: 'PayView',
      description:
        '現在地から利用可能な店舗を検索し、その店舗で使用できる決済サービスを事前に確認できる機能を備えたwebアプリ',
      tags: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript', 'git'],
      image: '/payView.png',
    },
    {
      id: '611-game',
      title: '611 game',
      description:
        'ゲームエンジンソフト「Unity」を使って作成したVRアクションゲーム。舞台は河野研。ゲームの主人公は猫で、敵に捕まる前にカップラーメンを3つ集めて、先生の元へ渡さなければならない、、、',
      tags: ['C#', 'Unity', 'Blender', 'Oculus Quest', 'LumaAI'],
      image: '/game611.png',
    },
    {
      id: 'torisan-game',
      title: 'Torisan_game',
      description:
        '学生向けハッカソン「KOZAHACKS」で開発したプロダクト。 スイカゲームをUnityで再現しようと思い、模倣して作成した。 UnityのWebGL機能を使用し、Webアプリとしてビルドしている。',
      tags: ['C#', 'Unity', 'WebGL'],
      image: '/torisan_game.png',
    },
    {
      id: 'tap-long-term-internship',
      title: '株式会社タップ 長期インターンシップ',
      description:
        'ホテル口コミサイトのスクレイピングシステム開発（Python, BeautifulSoup）や、Flutterによる社内アプリのリファクタリング、YOLOを用いた客室点検アプリの自動化など、多様な案件に携わった。',
      tags: ['Python', 'Dart', 'FastAPI', 'Flutter', 'Docker'],
      image: '/no_image.png',
    },
    {
      id: 'freee-short-term-internship',
      title: 'フリー株式会社 短期インターンシップ',
      description:
        'プロダクトのadmin UIの修正やE2Eテストの調査、AI活用の企画などに携わった',
      tags: ['Ruby', 'Ruby on Rails', 'Docker'],
      image: '/no_image.png',
    },
    {
      id: 'web-production-project',
      title: '株式会社タンクル Web制作案件',
      description:
        '個人委託でwebサイトの制作を担当。クライアントの要望に基づき、レスポンシブデザイン（スマホ対応）とSEO最適化を実施。',
      tags: ['React', 'Next.js', 'tailwindcss'],
      image: '/no_image.png',
    },
  ];

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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter-bold">
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
