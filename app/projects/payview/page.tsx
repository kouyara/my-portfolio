import Link from 'next/link';

export default function PayViewPage() {
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
              PayView
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-inter">
              現在地から利用可能な店舗を検索し、その店舗で使用できる決済サービスを事前に確認できる機能を備えたwebアプリ
            </p>
          </div>

          {/* メイン画像 */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src="/PayView.png" alt="PayView" className="w-full h-auto" />
          </div>

          {/* タグ */}
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              Flask
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              Python
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              HTML
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              CSS
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium font-inter">
              git
            </span>
          </div>

          {/* プロジェクト情報 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white-gray dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 font-inter">
                制作期間
              </h3>
              <p className="text-gray-900 dark:text-white font-inter">
                2023年10月〜2024年02月
              </p>
            </div>
            <div className="bg-white-gray dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 font-inter">
                人数
              </h3>
              <p className="text-gray-900 dark:text-white font-inter">4人</p>
            </div>
          </div>

          {/* リンク */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/kosuke215135/PayView"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-inter"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://payview.st.ie.u-ryukyu.ac.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors font-inter"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit Website
            </a>
            <a
              href="https://www.youtube.com/shorts/7X9wwnY90nE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors font-inter"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch Movie
            </a>
          </div>

          {/* 詳細説明 */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter space-y-6">
              <p>
                消費者向けのWebアプリで、現在地から利用可能な店舗を検索し、その店舗で使用できる決済サービスを事前に確認できる機能を備えている。ユーザーは検索機能を利用して登録されているお店を調べることができ、さらに「食べログ」とは異なり、利用可能な決済サービスのボタンを押すことで、対応する決済アプリへ直接移動することが可能。また、ユーザー自身が新たな店舗情報や決済サービスの対応状況を追加できる仕組みも備えている。
              </p>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  開発目的
                </h2>
                <p>
                  学校の授業の一環で、enPiT-BizSysDに参加し、webアプリを開発をした。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  開発背景
                </h2>
                <p>
                  従来の地図アプリでは、行きたい店舗の決済情報が把握できないという課題があった。この問題を解決するため、現在地から店舗を検索し、各店舗で利用可能な決済サービスを確認できるwebアプリを開発した。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  こだわり・工夫点
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    メンバー全員が習熟している言語がPythonであったため、PythonのフレームワークであるFlaskを用いてアプリ開発を進めた
                  </li>
                  <li>
                    マップ機能は、JavaScriptを利用してGoogle Maps
                    APIから取得したデータを基に、お店の地図情報と決済情報を連携させる形で実装した
                  </li>
                  <li>
                    キーワード検索機能では、複数のキーワードを組み合わせたAND検索が可能となっており、お店の名前や決済情報を用いて検索することができる
                  </li>
                  <li>
                    ログイン機能では、ログイン後にユーザーがお店の決済情報を登録できるようになっている
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  自分の担当した内容
                </h2>
                <p>
                  主にフロントエンドの実装を担当し、UIの考案やCSS・JavaScriptを用いた開発を行った。また、アプリに地図機能を組み込むことを提案し、JavaScriptを用いてGoogle
                  Maps
                  APIを取得する部分も実装した。さらに、バックエンドの一部処理にも携わり、データベースの処理を実装した。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-inter-bold">
                  問題と解決策
                </h2>
                <p>
                  アプリ制作を前提とした授業方針のもと、アジャイル開発を行い、毎週友人や先輩、先生方からフィードバックを受けた。そのフィードバックをもとにグループ内でアプリの機能について話し合い、毎回UI/UXの改良を行った。
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
