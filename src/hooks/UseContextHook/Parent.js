import { useState, createContext } from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null);

const Parent = () => {
    const [user, setUser] = useState("");

    return (
        <AppContext.Provider value={{ user, setUser }}>
            <Login />
            <User />
        </AppContext.Provider>
    );
};

export default Parent;
