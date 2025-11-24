import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function WebProductionProjectPage() {
  const project = projects.find((p) => p.id === 'tanqle-project');

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
              <DetailHeading>要件</DetailHeading>
              <DetailParagraph>
                コーポレートサイトの新規制作を一人で担当。ヒアリング内容をもとに情報設計・ワイヤー作成・実装・納品までをワンストップで行いました。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>実装ポイント</DetailHeading>
              <ul className="text-sm list-disc list-inside space-y-2">
                <li>Next.js + Tailwind CSS でレスポンシブデザインを構築</li>
                <li>Lighthouse 指標を踏まえたパフォーマンス最適化とSEO施策</li>
                <li>
                  顧客が更新しやすいようにヘッダー/フッターをコンポーネント化
                </li>
              </ul>
            </div>

            <div>
              <DetailHeading>成果</DetailHeading>
              <DetailParagraph>
                デプロイ後にアクセス解析とABテストを行い、離脱率を改善。改善内容をドキュメント化して納品し、運用チームへの引き継ぎもスムーズに進めました。
              </DetailParagraph>
            </div>
          </div>
        </div>
      }
    />
  );
}
