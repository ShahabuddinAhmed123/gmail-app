import React, { createContext, useState } from "react";

export const ReadEmailsContext = createContext();

export const ReadEmailsProvider = ({ children }) => {
  const [readEmails, setReadEmails] = useState(new Set());

  return (
    <ReadEmailsContext.Provider value={{ readEmails, setReadEmails }}>
      {children}
    </ReadEmailsContext.Provider>
  );
};
