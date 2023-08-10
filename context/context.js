import { createContext, useContext, useState } from "react";

const Context = createContext();

export function DataProvider({ children }) {
    const [popup, setpopup] = useState(false)

    return (
        <Context.Provider value={{popup,setpopup}}>{children}</Context.Provider>
    );
}

export function useDataContext() {
    return useContext(Context);
}