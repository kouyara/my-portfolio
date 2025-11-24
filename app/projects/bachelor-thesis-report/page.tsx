import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function BachelorThesisReportPage() {
  const project = projects.find((p) => p.id === 'bachelor-thesis-report');

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
          label: '論文',
          url: 'https://drive.google.com/file/d/1KsQYyypj0MyuTgF7AdBRPadO14afLBCD/view?usp=sharing',
          icon: 'globe',
        },
      ]}
      additionalInfo={
        <>
          <div>
            <DetailHeading>要旨(Abstract)</DetailHeading>
            <DetailParagraph>
              近年のVRおよびAR技術の進展に伴い,
              筋変位センサを用いたインターフェースへの関心が高まっている.
              筋変位センサは, 表層筋肉の微細な変位を測定することで,
              従来の物理コントローラーでは困難だった力加減を使った操作を可能にする.
              このセンサは, ゲームやトレーニングシミュレーションだけでなく,
              医療リハビリや遠隔操作ロボットの分野でも応用されている.
              ユーザの身体動作と力加減を推定することで,
              これまでにない複合的な操作を実現するポテンシャルを秘めている.
              しかし, 筋変位センサには力加減の推定精度に課題がある． そのため,
              VRやARの没入感や長時間の利用に影響を与えている． 本研究では,
              筋変位センサの握力推定の精度向上を目的として, 従来のSVRに加え,
              LSTM, RNN,
              GRUといった時系列データに強い機械学習モデルを比較分析した.
              評価指標としてMSE, RMSE, MAE, 決定係数（$R^2$）を用い,
              統計的有意差検定を実施した結果,
              LSTMおよびGRUが最も優れた性能を示し,
              SVRおよびRNNと比較して有意に高い精度を達成した. 具体的には,
              LSTMはMAEが0.019, MSEが0.001, $R^2$が0.990, GRUはMAEが0.026,
              MSEが0.002, $R^2$が0.983であった. 一方, SVRはMAEが0.496,
              MSEが0.418, $R^2$が0.665と,
              他モデルに比べ誤差が大きく評価値も低かった. 特に,
              RNNは勾配消失の影響を受けやすく,
              SVRは時系列データの長期依存関係を捉えにくいことが明らかとなった.
              今後は,筋変位センサと高精度な力加減推定（LSTM, GRU）を用いた,
              VR/ARコントローラの開発が期待される.
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
