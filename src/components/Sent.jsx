import React, { useState, useContext } from "react";
import { SentContext } from "../context/note/SentContext";
import { InboxContext } from "../context/InboxContent";

const Sent = () => {
  const [activeButton, setActiveButton] = useState(false);
  function handleActiveButton() {
    setActiveButton(!activeButton);
  }
    const { selectedEmail } = useContext(InboxContext);

  const { sentEmails } = useContext(SentContext);

  return (
    <div className="w-[432px] flex flex-col items-center gap-4 h-[100vh]  border-r border-[#adadad] max-[720px]:w-[60vw]">
      <div className="flex items-center border-b border-[#adadad] py-2 w-[432px]  px-4 min-h-[54px] justify-between max-[720px]:w-full">
        <h1 className="text-[20px] font-semibold">Sent</h1>
        <div className="bg-[#dadada] rounded-md gap-1 w-[170px] flex items-center px-1 h-full">
          <button
            onClick={() => handleActiveButton()}
            className={
              !activeButton
                ? " h-[30px] w-[80px] bg-white text-[15px] pt-1 text-black rounded-md"
                : "h-[30px] w-[80px] hover:bg-white text-stone-600 pt-1 hover:text-black text-[15px] rounded-md"
            }
          >
            All mail
          </button>
          <button
            onClick={() => handleActiveButton()}
            className={
              activeButton
                ? " h-[30px] w-[80px] bg-white text-[15px] pt-1 text-black rounded-md"
                : "h-[30px] w-[80px] hover:bg-white text-stone-600 pt-1 hover:text-black text-[15px] rounded-md"
            }
          >
            Unread
          </button>
        </div>
      </div>
      <div className=" w-[94%] border border-[#adadad] min-h-[40px] gap-2 rounded-lg flex items-center px-2 text-[18px] text-stone-700">
        <ion-icon name="search-outline"></ion-icon>
        <input
          className="w-full placeholder:text-[16px] placeholder:text-stone-600 outline-none text-[16px]"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        <div className="w-full h-[148px] cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1">
            {sentEmails.length > 0 ? (
          <div className="flex justify-between items-center">
              <ul>
                {sentEmails.map((email, index) => (
                  <div>
                  <li
                  className="text-[15px] mb-1" 
                  key={index}>{email}</li>
                  <h2 className="text-[14px]">{selectedEmail.Name}</h2>
                  <p className="text-[14px]">{selectedEmail.Email}</p>
                  <p className="text-[14px]">{selectedEmail.Topic}</p>
                  <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">{selectedEmail.MailContent}</p>
                  </div>
                ))}
              </ul>
          </div>
            ) : (
              <p>No emails sent.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Sent;


