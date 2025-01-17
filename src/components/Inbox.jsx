import React, { useState, useContext } from "react";
import { InboxContext } from "../context/InboxContent";
import MailDetail from "./Mails_details";
import MailModal from "../elements/MailModal";

export default function Inbox({handleEmailClick, readEmails, closeEmailModal, handleCloseEmailModal, setCloseEmailModal}) {
  const { selectedEmail, deleteEmail, jsonData, handleArchiveEmail, setSelectedEmail } = useContext(InboxContext);
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

  const handleDeleteArchive = () => {
    if (!selectedEmail) return;
    handleArchiveEmail(selectedEmail); 
    setInboxData((prev) => prev.filter((email) => email !== selectedEmail)); 
    setSelectedEmail(!selectedEmail)
  };

  const filteredEmails = activeButton
    ? inboxData.filter((email) => !readEmails.has(email))
    : inboxData;
  return (
    <>
    <div className="w-[432px] bg-[#f1f8fd] max-[1200px]:w-full flex flex-col items-center gap-4 h-[100vh] border-r border-[#adadad]" id="mainDiv">

      <div className="flex items-center border-b border-[#adadad] py-2 w-[432px] max-[1200px]:w-full px-4 min-h-[54px] justify-between" id="borders">
        <h1 className="text-[20px] font-semibold max-sm:text-[17px] text-[#111]" id="text">Inbox</h1>
        <div className="rounded-md gap-1 w-[170px] max-sm:w-[140px] flex items-center px-1 h-full max-[1200px]:mr-6">
          <button
          id="text"
            onClick={() => handleActiveButton("all")}
            className={
              !activeButton
              ? "h-[30px] w-[80px] max-sm:w-[65px] max-sm:text-[14px] text-[15px] pt-1 border-2 border-[#dadada] pb-1 text-[#111] rounded-md"
              : "h-[30px] w-[80px] max-sm:w-[65px] max-sm:text-[14px]  text-[#111] pt-1 text-[15px] rounded-md"
            }
          >
            All mails
          </button>
          <button
          id="text"
            onClick={() => handleActiveButton("unread")}
            className={
              activeButton
                ? "h-[30px] w-[80px] max-sm:w-[65px] max-sm:text-[14px] text-[15px] pt-1 border-2 border-[#dadada] pb-1 text-black rounded-md"
                : "h-[30px] w-[80px] max-sm:w-[65px] max-sm:text-[14px]  text-[#111] pt-1  text-[15px] rounded-md"
            }
          >
            Unread
          </button>
        </div>
      </div>
      
      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {filteredEmails.map((item, index) => (
          <div
          id="text"
            key={index}
            className="w-full h-[148px] cursor-pointer transition-all duration-300 border text-[#111] border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1"
            onClick={() => handleEmailClick(item)}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold ">{item.Name}</h1>
              <p className=" text-[14px]">{item.Time}</p>
            </div>
            <h3 className="text-[14px]">{item.Topic}</h3>
            <p className="text-[14px] max-h-[40px] overflow-hidden">
              {item.MailContent}..
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <button className="w-72px text-[14px] rounded-lg text-white bg-black px-2" id="button">
                  Project
                </button>
                <button className="w-72px text-[14px] p-1">Work</button>
              </div>
              <div id="text"
                className={`text-[19px]  mt-1 ${
                  readEmails.has(item) ? "text-blue-700" : "text-stone-800"
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
    handleDeleteArchive={handleDeleteArchive}
    />
 {closeEmailModal && <MailModal
    handleCloseEmailModal={handleCloseEmailModal}
    setCloseEmailModal={setCloseEmailModal}
    closeEmailModal={closeEmailModal}
    />}
    </>
  );
}
