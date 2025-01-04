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

// export const CheckProvider = ({ children }) => {
//   const [read, setRead] = useState(false);
//   const [unread, setUnread] = useState(false);


//   return (
//     <SentContext.Provider value={{ value: [read, setRead], value2: [unread, setUnread] }}>
//       {children}
//     </SentContext.Provider>

//   );
// };
