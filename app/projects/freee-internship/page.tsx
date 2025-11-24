import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function FreeeShortTermInternshipPage() {
  const project = projects.find((p) => p.id === 'freee-internship');

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
            <DetailHeading>参加したインターンシップ概要</DetailHeading>
            <DetailList>
              <li>企業名：フリー株式会社（freee K.K.）</li>
              <li>期間：9/1〜9/12 の 2 週間</li>
              <li>
                形式：8 日間オンライン、残り 2
                日のみ対面出社（出社日数は選択可能）
              </li>
              <li>参加人数：30 名ほど</li>
            </DetailList>
            <DetailParagraph className="mt-2">
              「freeeの技術や文化を学んでみたい」「実際のエンジニアの働き方を見てみたい」という思いで応募しました。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>インターンシップの流れ</DetailHeading>
            <DetailParagraph>
              自分はスモール創業チームに配属されました。個人事業主や起業前後の会社向けプロダクトの開発・運用を担うチームです。
            </DetailParagraph>
            <DetailParagraph>
              想像以上に環境構築に時間がかかり、前半 2〜3
              日は社内独自の開発環境や Docker
              コンテナ群、認証設定などに向き合いました。依存関係を理解するためにドキュメントやメンターさんのサポートを活用しつつ、少しずつ動く状態へ持っていきました。
            </DetailParagraph>
            <DetailParagraph>
              構築が完了してからは、ユーザー体験や管理画面の改善につながるチケットを担当。作業ごとに
              GitHub
              でプルリクエストを作成し、メンターの方にレビューしていただきました。
            </DetailParagraph>
            <DetailParagraph>
              担当した主なチケットは以下の通りです。
            </DetailParagraph>
            <DetailList>
              <li>管理者画面の UI 修正（レイアウト・ボタン配置の調整）</li>
              <li>読みづらい改行の修正と表示崩れの解消</li>
              <li>
                テーブルのソート機能を意図した順序で並び替えられるように改善
              </li>
              <li>ページ見出しの統一（タイトル表記のリデザイン）</li>
              <li>E2E テストを現行プロダクトに導入するための調査・実装</li>
              <li>ユーザーの書類作成に AI を活用する方法の検討</li>
            </DetailList>
            <DetailParagraph>
              最終日には全体成果発表会が開かれ、チーム毎に学びを共有。その後の懇親会ではインターン生同士の交流を深めました。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>学んだこと</DetailHeading>
            <div className="space-y-4">
              <DetailParagraph>
                <span className="font-inter-bold">マジ価値を届ける感覚：</span>
                管理者画面の UI
                改善でオペレーターの操作性を向上させ、アクセシビリティも見直しました。さらに
                E2E
                テストの導入検討を通じて、バグを早期発見できる体制づくりの重要性を学びました。
              </DetailParagraph>
              <DetailParagraph>
                <span className="font-inter-bold">チーム開発の流れ：</span>
                チケット単位で作業を進め、レビューで品質を高めるプロセスを実践。Daily
                Meeting やレトロスペクティブを 1 日 2
                回行うことで、アジャイルな振り返りと次のアクション決定がスムーズに進むことを実感しました。
              </DetailParagraph>
              <DetailParagraph>
                <span className="font-inter-bold">freee の開発文化：</span>
                「マジ価値」「あえて、共有する」「世話を焼くスタイル」といった文化が根付いており、Slack
                スレッドやハドルで積極的に助け合う様子を体験しました。メンターさんがチケット対応スレッドを立て、困っていればすぐに相談できる体制に支えられました。
              </DetailParagraph>
            </div>
          </div>

          <div>
            <DetailHeading>苦労したこと</DetailHeading>
            <DetailParagraph>
              一番苦労したのは初期の環境構築です。複数のコンテナ設定や認証周りでエラーが出続けましたが、うまくいった手順を共有してくれるメンバーや、ハドルで助けてくれるメンターのおかげで乗り越えられました。freee
              の「世話を焼くスタイル」を体感した瞬間でもあります。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>まとめ</DetailHeading>
            <DetailParagraph>
              環境構築からチケット解消、レビュー、発表まで一連の流れを通じて、ユーザーに「マジ価値」を届けるための仕組みと文化を肌で感じました。Daily
              Meeting
              やレトロスペクティブなど、実践的なアジャイル開発の大切さも学べました。
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
