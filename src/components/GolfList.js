import Api from "./Api";

function Loading() {
    return <h1 className="title">Loading</h1>;
}

const GolfList = ({ code }) => {
    const areaCode = code;
    const golfList = Api({ areaCode });


    if (golfList.length == 0) {
        return (
            <div>
                <Loading />
            </div>
        );
    }
    return (
            <div className="container">
            <br></br>
            <h1 className="title">おすすめのゴルフ場</h1>
                {golfList.Items.map((item) => {
                    return (
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <figure className="image">
                                        <img src={item.golfCourseImageUrl} />
                                    </figure>
                                    <br></br>
                                    <a className="title"
                                        href={item.golfCourseDetailUrl}
                                        target="_blank"
                                    >
                                        {item.golfCourseName}
                                    </a>
                                    <div clasName="content">
                                    <br></br>
                                        住所：{item.address}
                                    </div>
                                </article>
                            </div>
                        </div>
                    )
                })
                }

            </div>
    );
}

export default GolfList;