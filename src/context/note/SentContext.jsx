import React, { createContext, useState } from 'react';

export const SentContext = createContext();

export const SentProvider = ({ children }) => {
  const [sentEmails, setSentEmails] = useState([]);
  const [selectedSent, setSelectedSent] = useState(null);

  const sendEmail = (emailContent) => {
    setSentEmails((prevEmails) => [...prevEmails, emailContent]);
  };
  const deleteSent = () => {
    setSentEmails([])
  }
  const handleDeleteSent = (email) => {
    setSentEmails((prev) => prev.filter((item) => item !== email));
    if (selectedSent === email) {
      setSelectedSent(null);
    }
  };

  return (
    <SentContext.Provider  value={{
      sentEmails,
      sendEmail, 
      deleteSent, 
      selectedSent, 
      setSelectedSent,
      handleDeleteSent
      }}>
      {children}
    </SentContext.Provider>
  );
};
