import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function TapLongTermInternshipPage() {
  const project = projects.find((p) => p.id === 'tap-internship');

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
              <DetailHeading>担当業務</DetailHeading>
              <ul className="text-sm list-disc list-inside space-y-2">
                <li>
                  PythonとBeautifulSoupによるホテル口コミサイトのスクレイピングシステム開発
                </li>
                <li>Flutter製社内アプリのリファクタリングとUI改善</li>
                <li>YOLOを用いた客室点検アプリの自動化 PoC をリード</li>
              </ul>
            </div>

            <div>
              <DetailHeading>成果・工夫</DetailHeading>
              <DetailParagraph>
                スクレイピングシステムでは非同期処理と例外ハンドリングを整備し、日次バッチで安定的にデータを収集できる仕組みを構築。Flutter
                改修ではビルドパイプラインと状態管理を整理し、保守性を向上させました。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>学び</DetailHeading>
              <DetailParagraph>
                小規模チームで複数案件を持つ環境だったため、仕様調整から実装・レビューまで一貫して担当。要件ヒアリングと優先度付けの重要性を実感しました。
              </DetailParagraph>
            </div>
          </div>
        </div>
      }
    />
  );
}
