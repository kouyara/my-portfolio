import React from 'react';

// ヘッダー（ナビゲーション）コンポーネント
const Header = () => {
  const headerStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 500
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>ポートフォリオ</h1>
      <nav style={navStyle}>
        <a href="#profile" style={linkStyle}>自己紹介</a>
        <a href="#skills" style={linkStyle}>技術スキル</a>
        <a href="#projects" style={linkStyle}>プロジェクト実績</a>
        <a href="#experience" style={linkStyle}>実務経験・資格</a>
        <a href="#articles" style={linkStyle}>アウトプット</a>
        <a href="#selfpr" style={linkStyle}>自己PR</a>
      </nav>
    </header>
  );
};

// 共通セクションコンポーネント
const Section = ({ id, title, children, background = '#fff' }) => {
  return (
    <section id={id} style={{ padding: '3rem 1rem', backgroundColor: background }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

// 基本情報と自己紹介
const Profile = () => {
  return (
    <Section id="profile" title="基本情報と自己紹介">
      <p><strong>氏名:</strong> 山田 太郎</p>
      <p><strong>大学:</strong> ○○大学</p>
      <p><strong>学部・学科:</strong> 情報工学科</p>
      <p><strong>連絡先:</strong> example@example.com</p>
      <p><strong>自己紹介:</strong> 情報工学に情熱を持ち、常に最新技術に興味を持っています。問題解決に対する柔軟なアプローチと継続的な学習姿勢が私の強みです。</p>
    </Section>
  );
};

// 技術スキル
const Skills = () => {
  return (
    <Section id="skills" title="技術スキル" background="#f7f7f7">
      <ul>
        <li>プログラミング言語: Java, Python, C++</li>
        <li>ツール・フレームワーク: React, Node.js, Git, Docker</li>
      </ul>
    </Section>
  );
};

// プロジェクト実績
const Projects = () => {
  return (
    <Section id="projects" title="プロジェクト実績">
      <div style={{ marginBottom: '1.5rem' }}>
        <h3>サンプルプロジェクト</h3>
        <p><strong>概要:</strong> 学内プロジェクトで、Webアプリケーションを開発しました。</p>
        <p><strong>担当:</strong> フロントエンドの実装、API連携</p>
        <p><strong>成果:</strong> ユーザーインターフェイスの改善により、利用者から高評価を得ました。</p>
        <p>
          <strong>コードサンプル:</strong> 
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer"> GitHub リポジトリ</a>
        </p>
      </div>
    </Section>
  );
};

// 実務経験・資格・受賞歴
const Experience = () => {
  return (
    <Section id="experience" title="実務経験・資格・受賞歴" background="#f7f7f7">
      <ul>
        <li>インターンシップ: ○○社でのソフトウェア開発実務経験</li>
        <li>資格: 情報処理技術者試験、AWS認定</li>
        <li>受賞歴: プログラミングコンテストでの入賞</li>
      </ul>
    </Section>
  );
};

// 技術記事・ブログなどアウトプット
const Articles = () => {
  return (
    <Section id="articles" title="技術記事・ブログ">
      <ul>
        <li>
          <a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer">
            Reactを用いたWebアプリ開発の手法
          </a>
        </li>
        <li>
          <a href="https://example.com/blog2" target="_blank" rel="noopener noreferrer">
            最新技術の動向とその応用
          </a>
        </li>
      </ul>
    </Section>
  );
};

// 自己PR
const SelfPR = () => {
  return (
    <Section id="selfpr" title="自己PR" background="#f7f7f7">
      <p>
        私は新しい技術を積極的に取り入れ、柔軟な発想で課題に取り組むことができます。これまでのプロジェクト経験を通して、チームでの協力やコミュニケーションの大切さを学びました。今後はさらなる技術の向上と、企業への貢献を目指します。
      </p>
    </Section>
  );
};

// フッター
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#fff',
    borderTop: '1px solid #eee',
    padding: '1rem 2rem',
    textAlign: 'center',
    color: '#777'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 山田 太郎</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Profile />
        <Skills />
        <Projects />
        <Experience />
        <Articles />
        <SelfPR />
      </main>
      <Footer />
    </div>
  );
};

export default App;
