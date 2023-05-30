import { useRef } from "react";

const UseRefHook = () => {
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input type="text" placeholder="Name" ref={inputRef} /> &nbsp;
            <button onClick={focus}>Focus Text Area</button>
        </>
    );
};

export default UseRefHook;
