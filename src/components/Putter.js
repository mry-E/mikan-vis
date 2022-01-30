

const Putter = () => {
  return (
    <section className="section">
      <h1 className="title">パター</h1>
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">ピンタイプ</p>
              <div className="content">
                面積が小さく重心が浅いため、手に感覚が伝わりやすい。見た目がスマートでゴルフバックに収まりやすい。<br></br>
                しかし、芯が小さいためミスショットが目立ちやすい。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">マレットタイプ</p>
              <div className="content">
                面積がピンタイプより大きいため、重量が均等で芯が大きい。そのため、ミスショットに寛容である。<br></br>
                しかし、手に感覚が伝わりにくいため、腕に振幅でパットを行う。
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <figure className="image">
                <img src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" alt="cute dog!" />
              </figure>
              <br></br>
              <p className="title">ネオマレットタイプ</p>
              <div className="content">
                マレットタイプと同様に芯が広いため、ミスショットに肝要である。また、見た目が大きいことからクラブの動きがわかりやすい。<br></br>
                しかし見た目が大きいため、ゴルフバックにおさまりが悪い。
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Putter;
