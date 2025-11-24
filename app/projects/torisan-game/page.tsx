import Link from 'next/link';

export default function TorisanGamePage() {
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
          {/* ヘッダー */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-inter-bold">
              Torisan_game
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-inter">
              学生向けハッカソン「KOZAHACKS」で開発したプロダクト。スイカゲームをUnityで再現しようと思い、模倣して作成した。UnityのWebGL機能を使用し、Webアプリとしてビルドしている。
            </p>
          </div>

          {/* メイン画像 */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/Torisan_game.png"
              alt="Torisan_game"
              className="w-full h-auto"
            />
          </div>

          {/* タグ */}
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              C#
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              Unity
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              WebGL
            </span>
          </div>

          {/* プロジェクト情報 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white-gray dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 font-inter">
                制作期間
              </h3>
              <p className="text-gray-900 dark:text-white font-inter">2024</p>
            </div>
          </div>

          {/* 詳細説明 */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter space-y-6">
              <p>
                学生向けハッカソン「KOZAHACKS」で開発したプロダクトです。人気のスイカゲームをUnityで再現し、WebGLでブラウザ上で遊べるようにしました。
              </p>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  プロジェクトの概要
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>スイカゲームのゲームメカニクスを忠実に再現</li>
                  <li>Unity WebGLを使用してブラウザゲームとして実装</li>
                  <li>ハッカソンの限られた時間内で完成</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  技術的なポイント
                </h2>
                <p>
                  UnityのC#スクリプティングで物理演算とゲームロジックを実装。WebGLビルド機能を活用することで、プラグイン不要でブラウザ上で動作するゲームを実現しました。
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
