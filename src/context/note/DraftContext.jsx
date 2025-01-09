import React, { createContext, useState } from "react";

export const DraftContext = createContext();

export const DraftProvider = ({ children }) => {
  const [draftEmails, setDraftEmails] = useState([]);
    const [selectedDraft, setSelectedDraft] = useState(null);


  const draftMail = (emailContent) => {
    setDraftEmails((prevEmails) => [...prevEmails, emailContent]);
  };
  const clearDrafts = () => {
    setDraftEmails([]);
  };

  const handleDeleteDraft = (email) => {
    setDraftEmails((prev) => prev.filter((item) => item !== email));
    if (selectedDraft === email) {
      setSelectedDraft(null);
    }
  };

  return (
    <DraftContext.Provider value={{ draftEmails, draftMail, clearDrafts, handleDeleteDraft, selectedDraft, setSelectedDraft }}>
      {children}
    </DraftContext.Provider>
  );
};
