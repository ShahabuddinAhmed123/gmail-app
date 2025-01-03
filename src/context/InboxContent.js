import React, { createContext, useState } from 'react';

export const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
    const [selectedEmail, setSelectedEmail] = useState(null);

    return (
        <InboxContext.Provider value={{ selectedEmail, setSelectedEmail }}>
            {children}
        </InboxContext.Provider>
    );
};