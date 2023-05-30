import { useState, forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
    const [showText, setShowText] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setShowText(!showText);
        },
    }));

    return (
        <>
            <button onClick={() => setShowText(!showText)}>
                Button From Child
            </button>
            {showText && <div>Hello</div>}
        </>
    );
});

export default Child;
