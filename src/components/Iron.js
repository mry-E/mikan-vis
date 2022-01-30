const Iron = () => {
  return (
    <section className="section">
      <h1 className="title">アイアン</h1>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/1Iron.jpg`} />
              </figure>
              <br></br>
              <p className="title">1番アイアン</p>
              <div className="content">
                飛距離：不明<br></br>
                1番長いアイアンだが、現在は使用者もおらず、開発もされていない。いわゆる絶版となっている。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/longIron.jpg`} />
              </figure>
              <br></br>
              <p className="title">ロングアイアン</p>
              <div className="content">
                飛距離：130~200ヤード<br></br>
                2番、3番、4番アイアンのこと。長さが長く、クラブヘッドが小さいことから難易度が高い。<br></br>
                ユーティリティの登場により使用者が少ない。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/middleIron.jpg`} />
              </figure>
              <br></br>
              <p className="title">ミドルアイアン</p>
              <div className="content">
                飛距離：90~160ヤード<br></br>
                5番、6番、7番アイアンのこと。長さや飛距離的に使いやすく、便利なクラブ。また、7番は全体の中間の長さとなり最初に練習するべきクラブでもある。
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/shortIron.jpg`} />
              </figure>
              <br></br>
              <p className="title">ショートアイアン</p>
              <div className="content">
                飛距離：70~130ヤード<br></br>
                8番~9番アイアンのこと。クラブの角度が大きくなっており、草が長いラフから抜け出しやすいクラブ。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/PW.jpg`} />
              </figure>
              <br></br>
              <p className="title">ピッチングウェッジ</p>
              <div className="content">
                飛距離：60~120ヤード<br></br>
                近距離からピンに近づけるためのクラブ。ボールが転がりやすい。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/SW.jpg`} />
              </figure>
              <br></br>
              <p className="title">サンドウェッジ</p>
              <div className="content">
                飛距離：50~80ヤード<br></br>
                主に砂場であるバンカーからボールを出すために使用するクラブ。くぼんでいるところからボールを出す設計のため、上に上がりやすくなっている。
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/AW.jpg`} />
              </figure>
              <br></br>
              <p className="title">アプローチウェッジ</p>
              <div className="content">
                飛距離：60~100ヤード<br></br>
                ピッチングウェッジとサンドウェッジの中間に位置するクラブ。ピッチングウェッジより上に上がりやすく、サンドウェッジより距離が出やすい。
              </div>
            </article>
          </div>
        <div className="tile is-parent is-4">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Iron/LW.jpg`} />
              </figure>
              <br></br>
              <p className="title">ロブウェッジ</p>
              <div className="content">
                飛距離：40~70ヤード<br></br>
                ボールを上に上げやすく、落下地点で止まりやすいクラブ。難易度が高い。
              </div>
            </article>
          </div>
          </div>
    </section>
  );
}

export default Iron;