import React from 'react';
import '../App.css';
import OtherWorks from './OtherWorks';

function PayViewPage() {
    return (
    <section className="pagesSection">
        <div className="titleContainer">
            <h2 className="FontLibreBodoniText pagesTitle">
            PayView
            </h2>
            <p className="subtitle">Web App</p>
        </div>

        <p className="pagesText">
            <strong>Web Site:</strong>{' '}
            <a
            href="https://payview.st.ie.u-ryukyu.ac.jp"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://payview.st.ie.u-ryukyu.ac.jp
            </a>
            <br />
        </p>

        <p className="pagesText">
            <strong>Movie:</strong>{' '}
            <a
            href="https://www.youtube.com/shorts/7X9wwnY90nE"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://www.youtube.com/shorts/7X9wwnY90nE
            </a>
            <br />
        </p>

        <p className="pagesText">
            <strong>GitHub:</strong>{' '}
            <a
            href="https://github.com/kosuke215135/PayView"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://github.com/kosuke215135/PayView
            </a>
        </p>
        
        <div className="pagesImageWrapper">
            <img
            src="../PayView.png"
            className="pagesImage"
            alt="PayView"
            />
        </div>
        <div className="pagesImageWrapper">
            <img
            src="../PayView2.png"
            className="pagesImage"
            alt="PayView 2"
            />
        </div>

        <p className="pagesOutlineText FontZenKakuGothicNewText">
        消費者向けのWebアプリで、現在地から利用可能な店舗を検索し、その店舗で使用できる決済サービスを事前に確認できる機能を備えている。
        ユーザーは検索機能を利用して登録されているお店を調べることができ、さらに「食べログ」とは異なり、利用可能な決済サービスのボタンを押すことで、対応する決済アプリへ直接移動することが可能。
        また、ユーザー自身が新たな店舗情報や決済サービスの対応状況を追加できる仕組みも備えている。
        </p>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">開発目的</p>
            <p className="pagesOverviewText">
            学校の授業の一環で、enPiT-BizSysDに参加し、webアプリを開発をした。
            </p>
        </div>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">開発背景</p>
            <p className="pagesOverviewText">
            従来の地図アプリでは、行きたい店舗の決済情報が把握できないという課題があった。
            この問題を解決するため、現在地から店舗を検索し、各店舗で利用可能な決済サービスを確認できるwebアプリを開発した。
            </p>
        </div>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">こだわり・工夫点</p>
            <p className="pagesOverviewText">
            ・メンバー全員が習熟している言語がPythonであったため、PythonのフレームワークであるFlaskを用いてアプリ開発を進めた。<br />
            ・マップ機能は、JavaScriptを利用してGoogle Maps APIから取得したデータを基に、お店の地図情報と決済情報を連携させる形で実装した。<br />
            ・キーワード検索機能では、複数のキーワードを組み合わせたAND検索が可能となっており、お店の名前や決済情報を用いて検索することができる。<br />
            ・ログイン機能では、ログイン後にユーザーがお店の決済情報を登録できるようになっている。
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">自分の担当した内容</p>
            <p className="pagesOverviewText">
            主にフロントエンドの実装を担当し、UIの考案やCSS・JavaScriptを用いた開発を行った。
            また、アプリに地図機能を組み込むことを提案し、JavaScriptを用いてGoogle Maps APIを取得する部分も実装した。
            さらに、バックエンドの一部処理にも携わり、データベースの処理を実装した。
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">問題と解決策</p>
            <p className="pagesOverviewText">
            アプリ制作を前提とした授業方針のもと、アジャイル開発を行い、毎週友人や先輩、先生方からフィードバックを受けた。
            そのフィードバックをもとにグループ内でアプリの機能について話し合い、毎回UI/UXの改良を行った。
            </p>
        </div>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">使用ツール・言語</p>
            <p className="pagesOverviewText">
            Flask / Python / HTML / CSS / JavaScript / git
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">人数</p>
            <p className="pagesOverviewText">
            4人
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">制作期間</p>
            <p className="pagesOverviewText">
            2023年10月〜2024年02月（6ヶ月）
            </p>
        </div>

        <OtherWorks />
    </section>
    );
}

export default PayViewPage;
