import { useEffect, useState } from "react";

const Api = ({areaCode}) => {
    const APIKEY = process.env.React_APP_OPENGOLFMAP_API_KEY;
    const [golfList, setGolfList] = useState([]);
    useEffect(() => {
        const data = async () => {
            const response = await fetch(`https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&applicationId=${APIKEY}&formatVersion=2&areaCode=${areaCode}&hits=6&page=1&sort=beginner`);
            const data = await response.json();
            setGolfList(data);
        }
        data()
    }, [areaCode]);
    return golfList;
}

export default Api;