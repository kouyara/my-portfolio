import { basePath } from '@/app/lib/assetPath';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white-custom dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={basePath('/Profile.jpg')}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-inter-bold">
              新垣 江耶（Kouya Arakaki）
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
              🚹 2002年、沖縄生まれ。 琉球大学大学院 理工学研究科
              知能情報プログラム在籍 (2025年4月 - 2027年3月)。
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-inter">
              株式会社タップでインターンシップとして現在も従事(2024年8月 - )。
              大学では情報工学を専攻しており、特に授業ではコンピュータ技術、ネットワーク技術、人工知能技術について学んでいる。
              研究室は、玉城絵美先生のBodySharingLabに所属しており、BodySharingやXR、HCIの研究を行っている。
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/kouyara"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                <img
                  src={basePath('/github.svg')}
                  alt="GitHub"
                  className="h-8"
                />
              </a>
              <a
                href="https://kouya624694.hatenablog.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                <img
                  src={basePath('/hatenablog.svg')}
                  alt="Hatena Blog"
                  className="h-9"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
