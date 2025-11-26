export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 'payview',
    title: 'PayView',
    description:
      '現在地から利用可能な店舗を検索し、その店舗で使用できる決済サービスを事前に確認できる機能を備えたwebアプリ',
    tags: ['Flask', 'Python', 'jinja2', 'JavaScript', 'git'],
    image: '/payView.png',
  },
  {
    id: '611-game',
    title: '611 game',
    description:
      'ゲームエンジンソフト「Unity」を使って作成したVRアクションゲーム。舞台は河野研。ゲームの主人公は猫で、敵に捕まる前にカップラーメンを3つ集めて、先生の元へ渡さなければならない、、、',
    tags: ['C#', 'Unity', 'Blender'],
    image: '/game611.png',
  },
  {
    id: 'torisan-game',
    title: 'Torisan_game',
    description:
      '学生向けハッカソン「KOZAHACKS」で開発したプロダクト。 スイカゲームをUnityで再現しようと思い、模倣して作成した。 UnityのWebGL機能を使用し、Webアプリとしてビルドしている。',
    tags: ['C#', 'Unity'],
    image: '/torisan_game.png',
  },
  {
    id: 'tap-internship',
    title: '株式会社タップ 長期インターンシップ',
    description:
      'ホテル口コミサイトのスクレイピングシステム開発（Python, BeautifulSoup）や、Flutterによる社内アプリのリファクタリング、YOLOを用いた客室点検アプリの自動化など、多様な案件に携わった。',
    tags: ['Python', 'Dart', 'FastAPI', 'Flutter', 'Docker'],
    image: '/no_image.png',
  },
  {
    id: 'freee-internship',
    title: 'フリー株式会社 短期インターンシップ',
    description:
      'プロダクトのadmin UIの修正やE2Eテストの調査、AI活用の企画などに携わった',
    tags: ['Ruby', 'Ruby on Rails', 'Docker'],
    image: '/freee.jpg',
  },
  {
    id: 'tanqle-project',
    title: '株式会社タンクル Web制作案件',
    description:
      '個人委託でwebサイトの制作を担当。クライアントの要望に基づき、レスポンシブデザインを心がけた。',
    tags: ['React', 'Next.js', 'tailwindcss'],
    image: '/no_image.png',
  },
  {
    id: 'bachelor-thesis-report',
    title: '卒業論文',
    description:
      '研究テーマ：「筋変位センサを用いた握力推定モデルの精度向上に関する研究」',
    tags: ['Python', 'C#'],
    image: '/bachelor_sThesis_Report.png',
  },
  {
    id: 'master-thesis-report',
    title: '学会査読中の論文（INTARACTION 2026）',
    description: '研究テーマ：「筋変位センサによる持久走時の3相疲労推定」',
    tags: ['Python'],
    image: '/no_image.png',
  },
  {
    id: 'wasm-rust-suika-game',
    title: 'Rust × WebAssembly スイカゲーム',
    description:
      'Rustで実装した物理演算をWebAssemblyにビルドし、ブラウザ上で動くスイカゲームを開発中。Yew + CanvasでUIとゲームロジックを構築中。',
    tags: ['Rust', 'WebAssembly', 'Yew', 'Canvas'],
    image: '/suika_rust.png',
  },
];
