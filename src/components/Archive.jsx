import React, { useContext, useState } from "react";
import { InboxContext } from "../context/InboxContent";

const Archive = () => {
  const { archiveEmails, selectedArchive, setSelectedArchive, deleteArchive , handleDeleteArchive} =
    useContext(InboxContext);

      const [openModal , setOpenModal] = useState(false);
  

    const handleArchive = (email) => {
      setSelectedArchive(email);
      setOpenModal(!openModal);
    }

    function handleCloseModal(){
      setOpenModal(false);
    }

  return (
    <div className="w-[85vw] flex flex-col items-center gap-4 h-[100vh]  border-r border-[#5585b5] max-[1200px]:w-full text-[#113f67] bg-[#f1f8fd]" id="mainDiv">
      <div
        className={`"  ${
          archiveEmails.length !== 0 ? "w-full flex" : " w-full flex"
        } flex items-center border-b border-[#5585b5] w-[432px]  px-4 min-h-[54px] justify-between max-[1200px]:w-full"`}
      >
        <h1 className="text-[20px] font-semibold max-sm:text-[17px]">Archive</h1>
        <button
        id="button"
          onClick={deleteArchive}
          className="p-2 hover:bg-stone-300 rounded-lg active:scale-95"
        >
          Clear Archive
        </button>
      </div>
      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {archiveEmails.length === 0 ? (
          <div className="flex items-center w-full h-full justify-center">
            <div>
              <h1>Nothing In Archive</h1>
            </div>
          </div>
        ) : (
          archiveEmails.map((email, index) => (
            <>
            <div
              key={index}
              onClick={() => handleArchive(email)}
              className={`w-full min-h-[148px] overflow-hidden cursor-pointer transition-all duration-300 border border-[#5585b5] text-left rounded-lg py-2 px-3 flex flex-col gap-1 ${
                selectedArchive === email
                  ? "bg-[#5585b5] text-white"
                  : "hover:bg-[#f1f1f1]"
              }`}
            >
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">{email.Name}</h1>
                <p className="text-[14px]">{email.Date}</p>
              </div>
              <p className="text-[14px]">{email.Email}</p>
              <p className="h-[42px] overflow-hidden text-[14px]">{email.MailContent}</p>
              <div
              className="text-2xl leading-none hover:text-red-600 w-fit max-sm:text-xl"
              onClick={(e) => {
                e.stopPropagation(); 
                handleDeleteArchive(email);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            </div>
            
          {openModal && <div className="w-screen h-screen bg-[rgba(0,0,0,0.5)] justify-center flex items-center z-50 fixed left-0 top-0 backdrop-blur-sm" >
           <div className="w-[80vw] relative px-6 py-14 rounded-lg h-[80vh] bg-[#f1f8fd] max-sm:py-4 max-sm:overflow-y-auto max-[450px]:h-[90vh] max-[450px]:w-[90vw]" id="modal">
           <div className="text-left flex items-center justify-between max-sm:flex-col max-sm:items-start ">
            <div className="flex flex-col gap-2">
             <h2 className="text-[18px] max-sm:text-[15px] font-semibold">From: {selectedArchive.Name}</h2>
             <p className=""><span className="font-semibold max-sm:text-[15px]">Topic:</span> {selectedArchive.Topic}</p>
             <p className=""><span className="font-semibold max-sm:text-[15px]">Sender email:</span> {selectedArchive.Email}</p>
            </div>
             <div className="text-[18px] max-sm:text-[14px] flex gap-1">
           <p>{selectedArchive.Date}</p>, <p>{selectedArchive.Time}</p>
           </div>
           </div>
         
       <div className="pb-20 max-[1440px]:pb-10 max-[1200px]:pb-6 max-[1200px]:text-[15px] max-sm:text-[14px] mt-2 max-[400px]:p-0 p-4 text-left">
         <h1>{selectedArchive.MailHeading}</h1>
         <p>{selectedArchive.MailContent}</p>
         <br />
         <p>{selectedArchive.MailContent2}</p>
         <br />
         <p>{selectedArchive.MailContent3}</p>
         <p>{selectedArchive.MailContent4}</p>
       </div>
           <button 
           id="button"
           onClick={handleCloseModal}
            className="absolute -top-6 -right-6 leading-none flex items-center justify-center p-2 max-sm:p-1 max-sm:text-2xl text-3xl rounded-full border-2 border-[#5585b5] text-[#ffffff] bg-[#38598b] hover:bg-[#5585b5]  active:scale-95 max-[450px]:top-11 max-[450px]:right-6 ">
           <ion-icon name="close-outline"></ion-icon>
           </button>
        </div>
        </div>}
        </>
          ))
        )}
      </div>
    </div>
  );
};

export default Archive;
