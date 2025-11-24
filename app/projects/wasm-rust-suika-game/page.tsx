import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function WasmRustSuikaGamePage() {
  const project = projects.find((p) => p.id === 'wasm-rust-suika-game');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tags}
      additionalInfo={
        <>
          <div>
            <DetailHeading>コンセプト</DetailHeading>
            <DetailParagraph>
              WebAssembly の高速性と Rust
              の安全性を活かし、ブラウザ上で動くスイカゲームを 60fps
              で実装することを目標に開発しています。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>技術スタック</DetailHeading>
            <DetailList>
              <li>Rust + wasm-bindgen でゲームロジックと物理演算を実装</li>
              <li>Yew + WebCanvas API で UI / 描画レイヤーを構築</li>
              <li>wasm-pack を使って npm 互換のパッケージとしてビルド・配信</li>
            </DetailList>
          </div>

          <div>
            <DetailHeading>現在の進捗</DetailHeading>
            <DetailParagraph>
              物理エンジンの基本挙動とフルーツ合体ロジックは Rust
              側で完成。ブラウザとのブリッジやサウンド再生について最適化中です。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>今後の予定</DetailHeading>
            <DetailParagraph>
              PWA 対応やランキング機能の実装、スマホ向けの操作最適化を進め、Web
              上で手軽に遊べるスイカゲームとして公開予定です。
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
