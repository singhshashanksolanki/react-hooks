import { useMemo, useEffect, useState } from "react";
import axios from "axios";

const UseMemoHook = () => {
    const [data, setData] = useState([]);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (data) => {
        if (!data) return;

        const name = data.reduce((longName, ele) => {
            if (ele.name.length > longName.length) {
                longName = ele.name;
                return longName;
            } else {
                return longName;
            }
        }, "");
        console.log("Computed");
        return name;
    };

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <>
            <div>Name: {getLongestName}</div>
            <div>
                <button onClick={() => setShowText(!showText)}>
                    Toggle State
                </button>
                <br />
                {showText && <div>Text</div>}
            </div>
        </>
    );
};

export default UseMemoHook;
