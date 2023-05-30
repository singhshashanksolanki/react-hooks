import { useContext } from "react";
import { AppContext } from "./Parent";

const Login = () => {
    const { setUser } = useContext(AppContext);

    return (
        <>
            <input
                type="text"
                onChange={(e) => setUser(e.target.value)}
            ></input>
        </>
    );
};

export default Login;
