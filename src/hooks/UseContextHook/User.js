import { useContext } from "react";
import { AppContext } from "./Parent";

const User = () => {
    const { user } = useContext(AppContext);

    return (
        <>
            <h2>User: {user}</h2>
        </>
    );
};

export default User;
