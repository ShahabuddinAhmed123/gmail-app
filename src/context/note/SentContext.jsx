import React, { createContext, useState } from 'react';

export const SentContext = createContext();

export const SentProvider = ({ children }) => {
  const [sentEmails, setSentEmails] = useState([]);

  const sendEmail = (emailContent) => {
    setSentEmails((prevEmails) => [...prevEmails, emailContent]);
  };
  const deleteSent = () => {
    setSentEmails([])
  }

  return (
    <SentContext.Provider  value={{ sentEmails, sendEmail, deleteSent }}>
      {children}
    </SentContext.Provider>
  );
};
