import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
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
      links={[
        {
          label: 'Movie 1',
          url: 'https://drive.google.com/file/d/1rpOJIrGp4koV5oVHROn6BYYZk8SJih3C/view?usp=drive_link',
          icon: 'video',
        },
        {
          label: 'Movie 2',
          url: 'https://drive.google.com/file/d/1WJxZV99T2bfEnyYrRdx1V4HPYX-uV1Ql/view?usp=drive_link',
          icon: 'video',
        },
      ]}
      additionalInfo={
        <>
          <div>
            <DetailHeading>担当業務</DetailHeading>
            <DetailList>
              <li>
                PythonとBeautifulSoupによるホテル口コミサイトのスクレイピングシステム開発
              </li>
              <li>Flutter製社内アプリのリファクタリングとUI改善</li>
              <li>YOLOを用いた客室点検アプリの自動化 PoC をリード</li>
            </DetailList>
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
        </>
      }
    />
  );
}
