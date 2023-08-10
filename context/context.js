import { createContext, useContext, useState } from "react";

const Context = createContext();

export function DataProvider({ children }) {
    const [popup, setpopup] = useState(false)
    const [edit,setedit] = useState(false)

    return (
        <Context.Provider value={{popup,edit,setpopup,setedit}}>{children}</Context.Provider>
    );
}

export function useDataContext() {
    return useContext(Context);
}