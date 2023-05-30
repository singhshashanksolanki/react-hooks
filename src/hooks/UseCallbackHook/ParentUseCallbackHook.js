import { useCallback, useState } from "react";
import ChildUseCallbackHook from "./ChildUseCallbackHook";

const ParentUseCallbackHook = () => {
    const [data, setData] = useState("This is data");
    const [toggle, setToggle] = useState(false);

    const getData = useCallback(() => {
        return data;
    }, [data]);

    return (
        <>
            <ChildUseCallbackHook getData={getData} />
            <button onClick={() => setToggle(!toggle)}>toggle</button>
            {toggle && <div>Text</div>}
        </>
    );
};

export default ParentUseCallbackHook;
