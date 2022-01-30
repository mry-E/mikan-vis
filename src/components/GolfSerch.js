import { useEffect,useState } from "react";
import GolfList from "./GolfList";

const GolfSerch = () => {
    const [searchCode, setSearchCode] = useState(13);
    const [prefectures,setPrefectures] = useState();
    useEffect(() => {
        (async () => {
            const response = await fetch("./data/prefectures.json");
            const data = await response.json();
            setPrefectures(data);
        })();
      }, []);

    const handleChange = e => {
        if(e.key == "Enter"){
            e.preventDefault();
            prefectures.map((item) => {
                if(item.name == e.target.value){
                    setSearchCode(item.code);
                }
            })
        } 
    };

    return(
        <div>
            <input type="text" placeholder="都道府県を入力" onKeyPress={handleChange}/>
            <GolfList code={searchCode}/>
        </div>
    );
}

export default GolfSerch;