import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            {count}&nbsp;
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default UseState;
