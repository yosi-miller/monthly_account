import { createContext, useState } from "react";

export const CurrentDateContext = createContext({
    currentDate: new Date().toISOString().slice(0, 7),
    setCurrentDate: () => {},
});

export default function CurrentDateProvider({ children }) {
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 7));
    return (
        <CurrentDateContext.Provider value={{ currentDate, setCurrentDate }}>
            {children}
        </CurrentDateContext.Provider>
    );
}