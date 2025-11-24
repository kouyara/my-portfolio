import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function MasterThesisReportPage() {
  const project = projects.find((p) => p.id === 'master-thesis-report');

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
            <DetailHeading>要旨(Abstract)</DetailHeading>
            <DetailParagraph>
              本研究では、ランナーの行動変容を支援する新しい疲労フィードバック体験の設計を目的として、光学式筋変位センサ
              FirstVR
              を実現手段として活用した。従来の疲労モニタリングは「計測の正確性」に焦点を当ててきたが、本研究では「疲労情報がランナーの意思決定と行動をどのように変容させるか」という
              HCI
              的課題を設定し、その設計仮説と評価枠組みを提示した。筋変位センサ
              FirstVR
              は光学式センシングにより発汗の影響を受けず、テープ貼付のみで数分で装着可能であり、リアルタイム疲労フィードバックの実装に適する。大学生
              9
              名を対象に、トレッドミル漸増走における筋変位・RPE・心拍データの同時計測と機械学習による
              3 相疲労推定を実施し、個人適応 vs
              群間汎化の二軸評価を行った。個人内交差検証では筋変位により AUC
              0.999 を達成し、群間汎化では外部負荷ベースライン(AUC
              0.862)が優位であった。この知見から、初回使用時は外部負荷による即座の疲労推定を提供し、継続使用で筋変位モデルを個人化する段階的アプローチを提案する。なお、本稿では行動変容の直接的な実験検証は実施しておらず、ユーザインタラクションの効果検証は今後の課題とする。本研究は、疲労情報の可視化とフィードバックがランナーのペース調整や栄養補給タイミングの最適化を促す可能性を示し、パフォーマンス向上と怪我予防への貢献が期待される新しいインタラクション体験の方向性を示す。
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
