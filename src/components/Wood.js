
const Wood = () => {
  return (
    <section className="section">
      <h1 className="title">ウッド</h1>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Wood/driver.jpg`}  />
              </figure>
              <br></br>
              <h2 className="title" style={{fontSize: "140%"}}>ドライバー</h2>
              <div className="content">
                飛距離：180~280ヤード<br></br>
                1番ウッドのこと。基本的にティーショットの時に使用し、一番距離が出るクラブ。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Wood/FU.jpg`}/>
              </figure>
              <br></br>
              <h2 className="title" style={{fontSize: "140%"}}>フェアウェイウッド</h2>
              <div className="content">
                飛距離：130~220<br></br>
                2~5,7,9,11番のウッドのこと。基本的にフェアウェイで使用する。現在3,5,7番が活躍しているが、ユーティリティの登場により使用者が少なくなっている。
              </div>
            </article>
          </div>
              
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src={`${process.env.PUBLIC_URL}/data/Wood/utility.jpg`} />
              </figure>
              <br></br>
              <h2 className="title" style={{fontSize: "140%"}}>ユーティリティ</h2>
              <div className="content">
                飛距離：100~200ヤード<br></br>
                基本的にフェアウェイの時に使用する。クラブがウッドより小さく、アイアンより当たる面積が広くなっており、ウッドとアイアンのよい点を集めたクラブ。<br></br>
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
