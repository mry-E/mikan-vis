

const Wood = () => {
  return (
    <section className="section">
      <h1 className="title">ウッド</h1>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">1番　ドライバー</p>
              <div className="content">
                飛距離：180~250ヤード<br></br>
                基本的にティーショットの時に用いる。一番距離が出るクラブ。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">2番　ブラッシー</p>
              <div className="content">
                飛距離：不明<br></br>
                基本的にフェアウェイの時に用いる。現在はほとんど使われない。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">3番　スプーン</p>
              <div className="content">
                飛距離：160~220ヤード<br></br>
                基本的にフェアウェイの時に用いる。ドライバーより小さく当てやすいため、ティーショットで用いる人もいる。
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">4番　バッフィ</p>
              <div className="content">
                飛距離：150~190<br></br>
                基本的にフェアウェイの時に用いる。スプーンより扱いやすいが、ユーティリティの登場により現在使用いる人は少ない。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">5番　クリーク</p>
              <div className="content">
                飛距離：140~180<br></br>
                基本的にフェアウェイの時に用いる。ロングアイアンと同じような距離となる。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">ユーティリティ</p>
              <div className="content">
                飛距離：130~220ヤード<br></br>
                基本的にフェアウェイの時に用いる。ウッドより短く、アイアンより打ちやすいいいところを得たクラブ。<br></br>
                ユーティリティにも複数の番手が存在する。
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wood;
