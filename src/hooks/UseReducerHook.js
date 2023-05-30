import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                showText: state.showText,
            };
        case "TOGGLETEXT":
            return {
                count: state.count,
                showText: !state.showText,
            };
        default:
            return state;
    }
};

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: false,
    });

    return (
        <>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "TOGGLETEXT" });
                }}
            >
                Click Here
            </button>
            {state.showText && <div>This is text</div>}
        </>
    );
};

export default UseReducerHook;
