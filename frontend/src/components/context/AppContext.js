import React, { createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [collectedData, setCollectedData] = useState(null);

    return (
        <AppContext.Provider value={{ collectedData, setCollectedData }}>
            {children}
        </AppContext.Provider>
    )
}
