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
          label: 'GitHub',
          url: 'https://github.com/kouyara/bullet-hell',
          icon: 'github',
        },
      ]}
      additionalInfo={
        <>
          <div>
            <DetailHeading>コンセプト</DetailHeading>
            <DetailParagraph>
              システム言語としてのRustの高速性と安全性を活かし、ブラウザで動作するシューティングゲームを開発。複数の敵からの弾幕を避けながらスコアを競う、チャレンジングなゲーム体験を実現しています。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>技術スタック</DetailHeading>
            <DetailList>
              <li>Rust - ゲームロジック全般の実装</li>
              <li>ggez - Rustゲームフレームワーク（2D グラフィックス処理）</li>
              <li>WebAssembly対応 - ブラウザでの実行をサポート</li>
            </DetailList>
          </div>

          <div>
            <DetailHeading>こだわり・工夫点</DetailHeading>
            <DetailList>
              <li>敵AIの多様な弾幕パターンを実装し、難易度を段階的に上昇</li>
              <li>Rustのメモリ安全性を活かしたバグの少ないゲーム実装</li>
              <li>
                効率的なゲームループと衝突判定で60fps以上の滑らかな動作を実現
              </li>
            </DetailList>
          </div>

          <div>
            <DetailHeading>学習ポイント</DetailHeading>
            <DetailParagraph>
              このプロジェクトを通じて、Rustの所有権システムとライフタイムの理解を深め、ゲーム開発における状態管理とパフォーマンス最適化について学びました。
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
