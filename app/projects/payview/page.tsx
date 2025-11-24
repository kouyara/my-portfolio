import ProjectDetail, {
  DetailHeading,
  DetailParagraph,
  DetailList,
} from '@/app/projects/projectDetail';
import { projects } from '@/app/projects/projectsData';

export default function PayViewPage() {
  const project = projects.find((p) => p.id === 'payview');
  const links = [
    {
      label: 'Web Site',
      url: 'https://payview.st.ie.u-ryukyu.ac.jp',
      icon: 'globe' as const,
    },
    {
      label: 'Movie',
      url: 'https://www.youtube.com/shorts/7X9wwnY90nE',
      icon: 'video' as const,
    },
    {
      label: 'GitHub',
      url: 'https://github.com/kosuke215135/PayView',
      icon: 'github' as const,
    },
  ];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetail
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tags}
      links={links}
      additionalInfo={
        <>
          <div>
            <DetailHeading>開発目的</DetailHeading>
            <DetailParagraph>
              学校の授業の一環で、enPiT-BizSysDに参加し、webアプリを開発をした。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>開発背景</DetailHeading>
            <DetailParagraph>
              従来の地図アプリでは、行きたい店舗の決済情報が把握できないという課題があった。この問題を解決するため、現在地から店舗を検索し、各店舗で利用可能な決済サービスを確認できるwebアプリを開発した。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>こだわり・工夫点</DetailHeading>
            <DetailList>
              <li>
                メンバー全員が習熟している言語がPythonであったため、PythonのフレームワークであるFlaskを用いてアプリ開発を進めた
              </li>
              <li>
                マップ機能は、JavaScriptを利用してGoogle Maps
                APIから取得したデータを基に、お店の地図情報と決済情報を連携させる形で実装した
              </li>
              <li>
                キーワード検索機能では、複数のキーワードを組み合わせたAND検索が可能となっており、お店の名前や決済情報を用いて検索することができる
              </li>
              <li>
                ログイン機能では、ログイン後にユーザーがお店の決済情報を登録できるようになっている
              </li>
            </DetailList>
          </div>

          <div>
            <DetailHeading>自分の担当した内容</DetailHeading>
            <DetailParagraph>
              主にフロントエンドの実装を担当し、UIの考案やCSS・JavaScriptを用いた開発を行った。また、アプリに地図機能を組み込むことを提案し、JavaScriptを用いてGoogle
              Maps
              APIを取得する部分も実装した。さらに、バックエンドの一部処理にも携わり、データベースの処理を実装した。
            </DetailParagraph>
          </div>

          <div>
            <DetailHeading>問題と解決策</DetailHeading>
            <DetailParagraph>
              アプリ制作を前提とした授業方針のもと、アジャイル開発を行い、毎週友人や先輩、先生方からフィードバックを受けた。そのフィードバックをもとにグループ内でアプリの機能について話し合い、毎回UI/UXの改良を行った。
            </DetailParagraph>
          </div>
        </>
      }
    />
  );
}
