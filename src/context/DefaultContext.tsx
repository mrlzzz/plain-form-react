import { createContext, useState } from "react";

type DefaultContextProps = {
    children: React.ReactNode;
};

type Context = {
    state: string;
    setState?: React.Dispatch<React.SetStateAction<string>>;
};

export const DefaultContext = createContext<Context | null>(null);

const DefaultContextProvider = ({ children }: DefaultContextProps) => {
    const [state, setState] = useState("lol");

    const contextValue = {
        state,
        setState,
    };
    return (
        <DefaultContext.Provider value={contextValue}>
            {children}
        </DefaultContext.Provider>
    );
};

export default DefaultContextProvider;
