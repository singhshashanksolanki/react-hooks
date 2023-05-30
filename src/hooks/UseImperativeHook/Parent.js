import Child from "./Child";
import { useRef } from "react";

const Parent = () => {
    const buttonRef = useRef(null);

    return (
        <>
            <button onClick={() => buttonRef.current.alterToggle()}>
                Button From Parent
            </button>
            <br></br>
            <Child ref={buttonRef} />
        </>
    );
};

export default Parent;
