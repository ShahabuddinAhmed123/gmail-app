import React, { useContext } from "react";
import { InboxContext } from "../context/InboxContent";
import { DraftContext } from "../context/note/DraftContext";

export default function Draft() {
  const { setSelectedEmail } = useContext(InboxContext);
  const { draftEmails, clearDrafts } = useContext(DraftContext);

  return (
    <>
      <div className="w-[432px] max-[1200px]:w-full flex flex-col items-center gap-4 h-[100vh]  border-r border-[#adadad]">
        <div className="flex items-center border-b border-[#adadad] max-[1200px]:w-full py-2 w-[432px]  px-4 min-h-[54px] justify-between">
          <h1 className="text-[20px] font-semibold">Drafts</h1>
          <button
        onClick={clearDrafts} 
        className="p-2 hover:bg-stone-300 rounded-lg active:scale-95"
        >Clear Draft
        </button>
        </div>
       
        <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
          {draftEmails.length > 0 ? (
            draftEmails.map((email, index) => (
              <div
                key={index}
                className="w-full cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1"
                onClick={() => setSelectedEmail(email)}
              >
                <h2 className="text-[15px] font-semibold">Subject: {email.title}</h2>
                <p className="text-[14px]">Recipient: {email.email}</p>
                <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">
                  Content: {email.content}
                </p>
              </div>
            ))
          ) : (
            <p>No emails in draft.</p>
          )}
        </div>
      </div>
      {/* <DraftDetails /> */}
    </>
  );
}
