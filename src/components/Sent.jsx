import React, { useContext } from "react";
import { SentContext } from "../context/note/SentContext";
import { InboxContext } from "../context/InboxContent";

export default function Sent (){
  const { setSelectedEmail } = useContext(InboxContext);
  const { sentEmails, deleteSent } = useContext(SentContext);

  return (
    <>
    <div className="w-[432px] flex flex-col items-center gap-4 h-[100vh]  border-r border-[#adadad] max-[720px]:w-[60vw]">
      <div className="flex items-center border-b border-[#adadad] py-2 w-[432px]  px-4 min-h-[54px] justify-between max-[720px]:w-full">
        <h1 className="text-[20px] font-semibold">Sent</h1>
        <button
        onClick={deleteSent} 
        className="p-2 hover:bg-stone-300 rounded-lg active:scale-95"
        >Clear Sent
        </button>
      </div>

      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {sentEmails.length > 0 ? (
          sentEmails.map((email, index) => (
            <div
              key={index}
              className="w-full cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1"
              onClick={() => setSelectedEmail(email)}
            >
              <h2 className="text-[15px] font-semibold">{email.title}</h2>
              <p className="text-[14px]">{email.email}</p>
              <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">
                {email.content}
              </p>
            </div>
          ))
        ) : (
          <p>No emails in sent.</p>
        )}
      </div>
    </div>
    {/* <SentMails/> */}
    </>
  );
};

