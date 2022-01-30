import { useEffect, useState } from "react";
import Api from "./Api";

function Loading() {
    return <p>Loading</p>;
}

const GolfList = ({ code }) => {
    const areaCode = code;
    const golfList = Api({areaCode});

    
    if(golfList.length == 0){
        return(
            <div>
                <Loading />
            </div>
        );        
    }
    return (
        <div>
            <section className="section">
                <h1 className="title">おすすめのゴルフ場</h1>
                <div className="container">
                    <div className="tile is-ancestor">
                        {golfList.Items.map((item) => {
                            return (
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <figure className="image">
                                            <img src={item.golfCourseImageUrl}/>
                                        </figure>
                                        <br></br>
                                        <a className="title" 
                                        href={item.golfCourseDetailUrl} 
                                        target="_blank">
                                            {item.golfCourseName}
                                        </a>
                                        <br></br>
                                        <p clasName="subtitle">住所：{item.address}</p>
                                    </article>
                                    
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GolfList;