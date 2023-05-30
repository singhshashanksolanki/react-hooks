import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(response.data[0].email);
                console.log("api");
            });
    }, []);

    return (
        <>
            <div>Name: {data}</div>
        </>
    );
};

export default UseEffectHook;
