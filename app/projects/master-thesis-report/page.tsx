import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
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
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter space-y-6">
            <div>
              <DetailHeading>研究概要</DetailHeading>
              <DetailParagraph>
                3
                相の疲労状態（ウォームアップ期・持久フェーズ・限界フェーズ）に着目し、筋変位センサの波形から疲労度を推定するモデルを研究中です。長距離走競技者のパフォーマンス維持に貢献することを目指します。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>実験方法</DetailHeading>
              <ul className="text-sm list-disc list-inside space-y-2">
                <li>
                  トレッドミル走行中の前腕・下腿にセンサを装着し、心拍やSpO₂と同時計測
                </li>
                <li>Python で前処理を行い、疲労フェーズごとの特徴量を抽出</li>
                <li>PyTorch の時系列モデルで疲労フェーズ分類器を構築</li>
              </ul>
            </div>

            <div>
              <DetailHeading>得られた知見</DetailHeading>
              <DetailParagraph>
                疲労の進行に伴いセンサ振幅と周波数帯が段階的に変化することを確認。特に第
                2 フェーズから第 3
                フェーズへの遷移では特徴量の変動が顕著で、分類に有効な指標となる見込みです。
              </DetailParagraph>
            </div>

            <div>
              <DetailHeading>今後の課題</DetailHeading>
              <DetailParagraph>
                学会査読に向け、被験者層の拡大とモデルの汎化性能向上に取り組んでいます。リアルタイム推定に耐えうる推論パイプラインの構築も次のステップです。
              </DetailParagraph>
            </div>
          </div>
        </div>
      }
    />
  );
}
