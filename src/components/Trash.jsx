import React, { useContext } from "react";
import { InboxContext } from "../context/InboxContent";

const Trash = () => {
  const { trashEmails, deleteTrash } = useContext(InboxContext); 

  return (
    <div className="w-[432px] flex flex-col items-center gap-4 h-[100vh] border-r border-[#adadad] max-[1200px]:w-full">
      <div className="flex items-center border-b border-[#adadad] py-2 w-[432px] px-4 min-h-[54px] justify-between max-[1200px]:w-full">
        <h1 className="text-[20px] font-semibold">Trash</h1>
        <button
        onClick={deleteTrash} 
        className="p-2 hover:bg-stone-300 rounded-lg active:scale-95"
        >Clear Trash
        </button>
      </div>
      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {trashEmails.length === 0 ? (
          <div className="w-full overflow-auto cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Nothing In Trash</h1>
            </div>
          </div>
        ) : (
          trashEmails.map((email, index) => (
            <div
              key={index}
              className="w-full min-h-[148px] overflow-hidden cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">{email.Name}</h1>
                <p className="text-[14px]">{email.Date}</p>
              </div>
              <p className="text-[14px]">{email.Email}</p>
              <p className="text-[14px]">{email.MailContent}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trash;
