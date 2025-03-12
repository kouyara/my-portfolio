import React from 'react';
import '../App.css';
import OtherWorks from './OtherWorks';

function Game611() {
    return (
    <section className="pagesSection">
        <div className="titleContainer">
            <h2 className="FontLibreBodoniText pagesTitle">
            611 game
            </h2>
            <p className="subtitle">VR Game</p>
        </div>

        <p className="pagesText">
            <strong>GitHub:</strong>{' '}
            <a
            href="https://github.com/kouyara/611"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://github.com/kouyara/611
            </a>
        </p>
        
        <p className="pagesText">
            <strong>Movie:</strong>{' '}
            <a
            href="https://drive.google.com/file/d/1eMm5BS8tkSAS8aLUA38qyKNIvZzt-I9-/view?usp=sharing"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://drive.google.com/file/d/1eMm5BS8tkSAS8aLUA38qyKNIvZzt-I9-/view?usp=sharing
            </a>
        </p>
        
        <div className="pagesImageWrapper">
            <img
            src="../Game611.png"
            className="pagesImage"
            alt="611 Game Screen"
            />
        </div>
        <div className="pagesImageWrapper">
            <img
            src="../Game611_2.png"
            className="pagesImage"
            alt="611 Game Screen"
            />
        </div>

        <p className="pagesOutlineText">
            ゲームエンジンソフト「Unity」を使って作成したVRアクションゲーム。舞台は河野研。<br />
            ゲームの主人公は猫で、敵に捕まる前にカップラーメンを3つ集めて、先生の元へ渡さなければならない、、、
        </p>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">自分の担当した内容</p>
            <p className="pagesOverviewText">
            Unityのライブラリ「ProBuilder」を使用してゲームステージの作成を担当した。
            C#の当たり判定機能を利用し、キャラクターがアイテムを取得・受け渡しできる機能を実装した。
            また、LumaAIを用いて、登場キャラクターやアイテムの3Dオブジェクトを作成した。
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">問題と解決策</p>
            <p className="pagesOverviewText">
            ・3DオブジェクトにMesh Colliderを適用しても当たり判定がずれることがあった。
                → BlenderでMesh Colliderを作成することを試みたが、制作時間が不足していたため実装できず、代わりにBox Colliderを使用した。結果としてゲームに支障はなく、Box Colliderで十分に代替できた。<br />
            ・ゲーム全体が重くなり、動作がカクついて3D酔いを感じることがあった。
                → LumaAIで作成した3Dオブジェクトのポリゴン数が多かったためゲームが重くなっていたので、ポリゴン数を削減することで動作を軽くした。それにより、ゲーム酔いも抑制できた。
            </p>
        </div>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">使用ツール・言語</p>
            <p className="pagesOverviewText">
            Unity / C# / Oculus Quest / Blender / LumaAI<br />
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">人数</p>
            <p className="pagesOverviewText">
            3人
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

export default Game611;
