import Link from 'next/link';

export default function Game611Page() {
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
              611 game
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-inter">
              ゲームエンジンソフト「Unity」を使って作成したVRアクションゲーム。舞台は河野研。ゲームの主人公は猫で、敵に捕まる前にカップラーメンを3つ集めて、先生の元へ渡さなければならない、、、
            </p>
          </div>

          {/* メイン画像 */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src="/Game611.png" alt="611 game" className="w-full h-auto" />
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
              Blender
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              Oculus Quest
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              LumaAI
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
                Unityで開発したVRアクションゲームです。河野研究室を舞台に、プレイヤーは猫となり、敵から逃げながらカップラーメンを集めるミッションに挑戦します。
              </p>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  ゲームの特徴
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Oculus Questに対応したVR体験</li>
                  <li>研究室を忠実に再現した3D空間</li>
                  <li>猫の視点からのユニークなゲームプレイ</li>
                  <li>収集要素とアクション要素の融合</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  開発ツール
                </h2>
                <p>
                  UnityをゲームエンジンとしてC#でプログラミング。Blenderで3Dモデルを作成し、LumaAIを活用して環境をリアルに再現しました。
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
