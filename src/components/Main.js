import Wood from "./Wood";
import Iron from "./Iron";
import Putter from "./Putter";
import GolfSerch from "./GolfSerch";

const Main = () => {
  return (
    <div className="tile is-ancester">

      <div className="tile is-parent is-9">
        <article className="tile is-child box">
          <Wood />
          <Iron />
          <Putter />
        </article>
      </div>
      <div className="tile is-parent ">
        <article className="tile is-child box">
          <GolfSerch />
        </article>
      </div>
    </div>
  );
};
export default Main;
