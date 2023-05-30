import { useEffect } from "react";

const ChildUseCallbackHook = ({ getData }) => {
    useEffect(() => {
        console.log("Function was called");
    }, [getData]);

    return (
        <>
            <div>Data: {getData()}</div>
        </>
    );
};

export default ChildUseCallbackHook;
