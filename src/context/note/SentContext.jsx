import React, { createContext, useState } from 'react';

export const SentContext = createContext();

export const SentProvider = ({ children }) => {
  const [sentEmails, setSentEmails] = useState([]);

  const sendEmail = (emailContent) => {
    setSentEmails((prevEmails) => [...prevEmails, emailContent]);
  };

  return (
    <SentContext.Provider value={{ sentEmails, sendEmail, }}>
      {children}
    </SentContext.Provider>
  );
};
