import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
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
        <>
          <div>
            <DetailHeading>要件</DetailHeading>
            <DetailParagraph>
              コーポレートサイトの新規制作を一人で担当。ヒアリング内容をもとに情報設計・ワイヤー作成・実装・納品までをワンストップで行いました。
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
