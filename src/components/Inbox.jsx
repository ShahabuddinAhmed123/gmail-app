import React, { useState, useContext } from "react";
import { InboxContext } from "../context/InboxContent";
import MailDetail from "./Mails_details";

export default function Inbox({handleEmailClick, readEmails}) {
  const { selectedEmail, deleteEmail, jsonData } = useContext(InboxContext);
  const [inboxData, setInboxData] = useState(jsonData);
  const [activeButton, setActiveButton] = useState(false);


  const handleActiveButton = (buttonType) => {
    setActiveButton(buttonType === "unread");
  };

  const handleDelete = () => {
    if (!selectedEmail) return;
    deleteEmail(selectedEmail); 
    setInboxData((prev) => prev.filter((email) => email !== selectedEmail)); 
  };

  const filteredEmails = activeButton
    ? inboxData.filter((email) => !readEmails.has(email))
    : inboxData;
  return (
    <>
    <div className="w-[432px] max-[1200px]:w-full flex flex-col items-center gap-4 h-[100vh] border-r border-[#adadad]">

      <div className="flex items-center border-b border-[#adadad] py-2 w-[432px] max-[1200px]:w-full px-4 min-h-[54px] justify-between">
        <h1 className="text-[20px] font-semibold">Inbox</h1>
        <div className="bg-[#dadada] rounded-md gap-1 w-[170px] flex items-center px-1 h-full">
          <button
            onClick={() => handleActiveButton("all")}
            className={
              !activeButton
                ? "h-[30px] w-[80px] bg-white text-[15px] pt-1 text-black rounded-md"
                : "h-[30px] w-[80px] hover:bg-white text-stone-600 pt-1 hover:text-black text-[15px] rounded-md"
            }
          >
            All mails
          </button>
          <button
            onClick={() => handleActiveButton("unread")}
            className={
              activeButton
                ? "h-[30px] w-[80px] bg-white text-[15px] pt-1 text-black rounded-md"
                : "h-[30px] w-[80px] hover:bg-white text-stone-600 pt-1 hover:text-black text-[15px] rounded-md"
            }
          >
            Unread
          </button>
        </div>
      </div>

      <div className="w-[94%] border border-[#adadad] min-h-[40px] gap-2 rounded-lg flex items-center px-2 text-[18px] text-stone-700">
        <ion-icon name="search-outline"></ion-icon>
        <input
          className="w-full placeholder:text-[16px] placeholder:text-stone-600 outline-none text-[16px]"
          placeholder="Search"
          type="text"
        />
      </div>

      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {filteredEmails.map((item, index) => (
          <div
            key={index}
            className={`w-full h-[148px] cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1 ${
              selectedEmail === item ? "bg-[#c9c9c9]" : "hover:bg-[#f1f1f1]"
            }`}
            onClick={() => handleEmailClick(item)}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">{item.Name}</h1>
              <p className="text-[#969595] text-[14px]">{item.Time}</p>
            </div>
            <h3 className="text-[14px]">{item.Topic}</h3>
            <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">
              {item.MailContent}..
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <button className="w-72px text-[14px] rounded-lg bg-black text-white px-2">
                  Project
                </button>
                <button className="w-72px text-[14px] p-1">Work</button>
              </div>
              <div
                className={`text-[19px] mt-1 ${
                  readEmails.has(item) ? "text-blue-500" : ""
                }`}
              >
                <ion-icon name="checkmark-done-outline"></ion-icon>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <MailDetail
    handleDelete={handleDelete}
    />
    </>
  );
}
