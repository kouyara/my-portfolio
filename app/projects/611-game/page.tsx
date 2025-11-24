import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function Game611Page() {
  const project = projects.find((p) => p.id === '611-game');

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
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter space-y-6">
            <div>
              <DetailHeading>開発背景</DetailHeading>
              <DetailParagraph>
                メンバー全員がUnityやC#未経験だったこと、そして研究室にVRゲームが存在したことが刺激となり、Unityを用いたVRゲーム開発に挑戦しました。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>こだわり・工夫点</DetailHeading>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  LumaAIで人物・物体を360度撮影し、高品質な3Dオブジェクトを生成。
                </li>
                <li>
                  生成した3DオブジェクトへBlenderでボーンを付与し、Unityでアニメーション化。
                </li>
                <li>Unityライブラリ「ProBuilder」でゲームステージを構築。</li>
                <li>
                  C#で当たり判定やログ出力を実装し、アイテムの取得・受け渡しを実現。
                </li>
              </ul>
            </div>

            <div>
              <DetailHeading>自分の担当</DetailHeading>
              <DetailParagraph>
                ProBuilderを使ったゲームステージ制作と、C#による当たり判定・ログ出力の実装を担当。さらにLumaAIで撮影した素材から3Dオブジェクトを作り、ゲーム内に組み込みました。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>問題と解決策</DetailHeading>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Mesh
                  Colliderの当たり判定がずれる問題に対し、制作コストを考慮してBox
                  Colliderへ切り替え、安定した挙動を確保。
                </li>
                <li>
                  LumaAI生成モデルのポリゴン数過多による処理落ちを、ポリゴン削減で軽量化し、VR酔いも抑制。
                </li>
              </ul>
            </div>

            <div>
              <DetailHeading>使用ツール・言語</DetailHeading>
              <DetailParagraph>
                Unity / C# / Oculus Quest / Blender / LumaAI
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>人数</DetailHeading>
              <DetailParagraph>3人</DetailParagraph>
            </div>
            <div>
              <DetailHeading>制作期間</DetailHeading>
              <DetailParagraph>2023年10月〜2024年02月（6ヶ月）</DetailParagraph>
            </div>
          </div>
        </div>
      }
    />
  );
}
