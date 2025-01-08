import React, { createContext, useState } from "react";

export const DraftContext = createContext();

export const DraftProvider = ({ children }) => {
  const [draftEmails, setDraftEmails] = useState([]);

  const draftMail = (emailContent) => {
    setDraftEmails((prevEmails) => [...prevEmails, emailContent]);
  };
  const clearDrafts = () => {
    setDraftEmails([]);
  };

  return (
    <DraftContext.Provider value={{ draftEmails, draftMail, clearDrafts }}>
      {children}
    </DraftContext.Provider>
  );
};
