import React, { useContext, useState } from "react";
import { DraftContext } from "../context/note/DraftContext";

export default function Draft() {
  const { draftEmails, clearDrafts, handleDeleteDraft, setSelectedDraft } = useContext(DraftContext);

  const [openModal , setOpenModal] = useState(false);
  
        const handleDraftMAils = (email) => {
          setSelectedDraft(email);
          setOpenModal(!openModal);
          console.log("cliked")
        }
    
        function handleCloseModal(){
          setOpenModal(false);
        }

  return (
    <>
      <div className="w-[85vw] max-[1200px]:w-full flex flex-col items-center gap-4 h-[100vh]  border-r border-[#adadad]">
        <div className="flex items-center w-full border-b border-[#adadad] max-[1200px]:w-full   px-4 min-h-[54px] justify-between">
          <h1 className="text-[20px] font-semibold max-sm:text-[17px]">Drafts</h1>
          <button
        onClick={clearDrafts} 
        className="p-2 hover:bg-stone-300 rounded-lg active:scale-95"
        >Clear Draft
        </button>
        </div>
       
        <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
          {draftEmails.length > 0 ? (
            draftEmails.map((email, index) => (
              <>
              <div
                key={index}
                className="w-full cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1"
                onClick={handleDraftMAils}
              >
                <h2 className="text-[15px] font-semibold">Subject: {email.title}</h2>
                <p className="text-[14px]">Recipient: {email.email}</p>
                <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">
                  Content: {email.content}
                </p>
                <div
              className="text-2xl leading-none hover:text-red-600 w-fit max-sm:text-xl"
              onClick={(e) => {
                e.stopPropagation(); 
                handleDeleteDraft(email);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </div>
              </div>
              {openModal && <div className="w-screen h-screen bg-[rgba(0,0,0,0.5)] justify-center flex items-center z-50 fixed left-0 top-0 backdrop-blur-sm" id="modal">
           <div className="w-[80vw] relative px-6 py-20 border-2 border-black rounded-lg h-[80vh] bg-white">
           <div className="text-left flex items-center justify-between ">
            <div className="flex flex-col gap-2">
             <h2 className="text-[18px] "><span className="font-semibold border-b border-black">Title:</span><br /> {email.title}</h2>
             <p className=""><span className="font-semibold border-b border-black">To:</span><br /> {email.email}</p>
             <p className=""><span className="font-semibold border-b border-black">Content:</span><br /> {email.content}</p>
            </div>
           </div>
           <button 
           onClick={handleCloseModal}
            className="absolute top-5 right-5 leading-none flex items-center justify-center p-2 text-3xl rounded-full border-2 border-[#adadad] hover:bg-stone-200 active:scale-95 ">
           <ion-icon name="close-outline"></ion-icon>
           </button>
        </div>
        </div>}

              </>
            ))
          ) : (
            <div className="flex items-center w-full h-full justify-center">
              <p>No emails in draft.</p>
            </div>
          )}
        </div>
      </div>
      {/* <DraftDetails /> */}
    </>
  );
}
