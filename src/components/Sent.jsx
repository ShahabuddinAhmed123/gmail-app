import React, { useContext, useState } from "react";
import { SentContext } from "../context/note/SentContext";

export default function Sent (){
  
  const { sentEmails, deleteSent, selectedSent, setSelectedSent, handleDeleteSent } = useContext(SentContext);

      const [openModal , setOpenModal] = useState(false);

      const handleSentEmail = (email) => {
        setSelectedSent(email);
        setOpenModal(!openModal);
        console.log("cliked")
      }
  
      function handleCloseModal(){
        setOpenModal(false);
      }

  return (
    <>
    <div className="w-[85vw] flex flex-col items-center bg-[#f1f8fd] gap-4 h-[100vh]  border-r border-[#5585b5] text-[#113f67] " id="mainDiv">
      <div className="flex items-center border-b border-[#5585b5] w-full  px-4 min-h-[54px] justify-between max-[720px]:w-full">
        <h1 className="text-[20px] font-semibold max-sm:text-[17px]">Sent</h1>
        <button
        id="button"
        onClick={deleteSent} 
        className="p-2 text-[#ffffff] bg-[#38598b] hover:bg-[#5585b5] rounded-lg active:scale-95"
        >Clear Sent
        </button>
      </div>

      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {sentEmails.length > 0 ? (
          sentEmails.map((email, index) => (
            <>
            <div
              key={index}
              className={`"w-full cursor-pointer transition-all duration-300 border border-[#5585b5] text-left rounded-lg py-2 px-3 flex flex-col gap-1 ${
                selectedSent === email
                  ? "bg-[#c9c9c9]"
                  : ""
              }`}
             onClick={handleSentEmail}
            >
              <h2 className="text-[15px] font-semibold">{email.title}</h2>
              <p className="text-[14px]">{email.email}</p>
              <p className="text-[14px] max-h-[40px] overflow-hidden">
                {email.content}
              </p>
              <div
              className="text-2xl leading-none hover:text-red-600 w-fit max-sm:text-xl"
              onClick={(e) => {
                e.stopPropagation(); 
                handleDeleteSent(email);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            </div>

            {openModal && <div className="w-screen h-screen bg-[rgba(0,0,0,0.5)] justify-center flex items-center z-50 fixed left-0 top-0 backdrop-blur-sm" >
           <div className="w-[80vw] relative px-6 py-20 border-2 border-[#5585b5] rounded-lg h-[80vh] bg-[#f1f8fd]" id="modal">
           <div className="text-left flex items-center justify-between ">
            <div className="flex flex-col gap-2">
             <h2 className="text-[18px] "><span className="font-semibold border-b border-black">Title:</span><br /> {email.title}</h2>
             <p className=""><span className="font-semibold border-b border-black">Email:</span><br /> {email.email}</p>
             <p className=""><span className="font-semibold border-b border-black text-wrap">Content:</span><br /> {email.content}</p>
            </div>
           </div>
           <button 
           id="button"
           onClick={handleCloseModal}
            className="absolute top-5 right-5 leading-none flex items-center justify-center p-2 text-3xl rounded-full border-2 border-[#5585b5] text-[#ffffff] bg-[#38598b] hover:bg-[#5585b5] active:scale-95 ">
           <ion-icon name="close-outline"></ion-icon>
           </button>
        </div>
        </div>}
            </>
          ))
        ) : (
          <div className="flex items-center w-full h-full justify-center">
            <p>No emails in sent.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};