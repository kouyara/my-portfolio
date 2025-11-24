import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function TorisanGamePage() {
  const project = projects.find((p) => p.id === 'torisan-game');

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
              <DetailHeading>プロジェクトの概要</DetailHeading>
              <ul className="list-disc list-inside space-y-2">
                <li>スイカゲームのゲームメカニクスを忠実に再現</li>
                <li>Unity WebGLで手軽に遊べるブラウザゲームとして構築</li>
                <li>ハッカソン期間内でプレイ可能なプロトタイプを完成</li>
              </ul>
            </div>

            <div>
              <DetailHeading>自分の担当</DetailHeading>
              <DetailParagraph>
                C#でオブジェクトの当たり判定処理を実装し、重力の影響を受ける挙動やスコア表示の仕組みを担当しました。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>使用ツール・言語</DetailHeading>
              <DetailParagraph>Unity / C# / WebGL</DetailParagraph>
            </div>

            <div>
              <DetailHeading>人数</DetailHeading>
              <DetailParagraph>2人</DetailParagraph>
            </div>
            <div>
              <DetailHeading>制作期間</DetailHeading>
              <DetailParagraph>2024年08月〜2024年09月（1ヶ月）</DetailParagraph>
            </div>
          </div>
        </div>
      }
    />
  );
}
