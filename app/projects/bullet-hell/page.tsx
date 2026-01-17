import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function BulletHellPage() {
  const project = projects.find((p) => p.id === 'bullet-hell');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tags}
      links={[
        {
          label: 'Play',
          url: 'https://kouyara.com/bullet-hell/',
          icon: 'globe',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/kouyara/bullet-hell',
          icon: 'github',
        },
      ]}
      additionalInfo={
        <>
          <div>
            <DetailHeading>プロジェクト概要</DetailHeading>
            <DetailParagraph>
              Rust、WebAssembly、Axumで実装した弾幕を回避するブラウザゲーム。大量の弾の物理判定・衝突判定などの計算量が多い処理をRust、WebAssemblyで実装し、安定した60
              FPSを実現することを目指した。フロントエンド、バックエンド、インフラ構築をすべて個人でフルスタック開発した。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>技術スタック</DetailHeading>
            <div className="space-y-4">
              <DetailParagraph>
                <span className="font-inter-bold">Rust：</span>
                所有権と型システムで実行時エラーを削減し、メモリ安全性を保証した。WebAssemblyでコンパイルし、ブラウザ上でネイティブに近い実行速度を実現した。tokioを使用した非同期ランタイムで、少ないCPUスレッド数で複数の同時接続を効率的に処理できる。
              </DetailParagraph>
              <DetailParagraph>
                <span className="font-inter-bold">WebAssembly：</span>
                大量の弾の移動・衝突判定といった計算量が多い処理をWasmで実行。フレーム時間のばらつきを抑えて安定した60
                FPSを実現した。
              </DetailParagraph>
              <DetailParagraph>
                <span className="font-inter-bold">Axum：</span>
                Rustの軽量非同期Webフレームワーク。PostgreSQL接続を共有状態で複数のリクエストがあっても、データベースに再接続することなく効率よく処理できる。
              </DetailParagraph>
              <DetailParagraph>
                <span className="font-inter-bold">Tokio：</span>
                Rust用の非同期ランタイム。すべてのDB操作を非同期で実装し、I/O待ち中に複数ユーザーのリクエストが並行に進むため、効率的にリソースを利用することができる。
              </DetailParagraph>
              <DetailParagraph>
                <span className="font-inter-bold">PostgreSQL, Redis：</span>
                PostgreSQLでプレイヤー情報とスコア履歴を永続化。Redisでスコアランキングボードをメモリ上で高速管理・実行することを実現した。
              </DetailParagraph>
            </div>
          </div>

          <div>
            <DetailHeading>苦労した点・学び</DetailHeading>
            <DetailList>
              <li>
                Rust特有の所有権の仕組みが複雑で難しいと感じたので、AIに生成してもらったコード例を1行ずつ詳しく解説してもらって所有権の動作を理解できた。
              </li>
              <li>
                非同期ランタイム（Tokio）を使って、少ないスレッド数で多数の同時接続を処理できる仕組みを初めて理解した。
              </li>
            </DetailList>
          </div>

          <div>
            <DetailHeading>工夫した点・発展案</DetailHeading>
            <DetailList>
              <li>
                ユーザーのデバイス（PCかMobileか）を自動判別し、それぞれ独立したスコアランキングを表示させた。PCとモバイルで公平性を保った。
              </li>
              <li>
                個人開発で、Docker Compose
                を使用して完全なサーバーの本番環境構築を行なった。
              </li>
              <li>
                今後の改善案：WebAssembly と Axum
                の負荷試験を実施し、同時接続数や処理速度を評価する。また、ユーザー認証機能を追加し、より安全なランキング管理を実装することを目指している。
              </li>
            </DetailList>
          </div>
        </>
      }
    />
  );
}
