import React, { useState, useContext } from "react";
import logo from "../assets/Untitled_design-removebg-preview.png";
import { SentContext } from "../context/note/SentContext";
import Compose from "./Compose";
import { InboxContext } from "../context/InboxContent";
import { DraftContext } from "../context/note/DraftContext";
import ColorPalletes from "./ColorPalletes";

const Sidebar = ( 
  {handleChange, 
    isChanged, 
    handleOpenDraft,
    openDraft,
    handleOpenSent,
    openSent,
    handleOpenTrash,
    openTrash,
    handleOpenArchive,
    openArchive
  } ) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  function handleOpen() {
    setOpenSidebar(!openSidebar);
  }
    const { sentEmails } = useContext(SentContext);
    const { draftEmails } = useContext(DraftContext);
    const { trashEmails, jsonData, archiveEmails} = useContext(InboxContext);
  return (
    <div
      className={`${openSidebar ? " h-full bg-[#f1f8fd] flex gap-0 border-r text-[#111] border-[#adadad] max-[720px]:w-[40%] max-[450px]:w-[20%]" : "w-[56px] h-full bg-[#e7eaf6] flex gap-0 border-r border-[#adadad]"}`}
     id="mainDiv">
      <div className="w-full h-full flex flex-col">
        <div className="border-b border-[#adadad] h-[54px] flex justify-center items-center ">
          <div className="flex items-center gap-4 w-[265px] h-[46px] px-3 mx-2 border max-[450px]:w-auto border-[#adadad] rounded-lg max-[450px]:border-none max-[450px]:px-0 ">
            <div className="w-[35px] bg-white rounded-full border max-sm:w-[20px] max-[450px]:hidden" onClick={() => handleOpen()}>
              <img src={logo} alt="" />
            </div>
            <div className="w-[50px] max-sm:w-[20px] min-[450px]:hidden">
              <img src={logo} alt="" />
            </div>
            {openSidebar && <h1 className="font-semibold max-[450px]:hidden text-[#111]" id="text">Stellar Mail</h1>}
          </div>
        </div>
        <div className="w-full h-auto px-2 flex  flex-col border-b gap-2 pt-3 text-[20px] max-[450px]:px-0">
          <div 
          id="text1"
          // style={
          //   isChanged
          //     ? {
          //         backgroundColor: PALLETES.backgroundColor1, 
          //       }
          //     : {}
          // }
          className="h-[40px] items-center text-[#111] gap-2 cursor-pointer flex w-full hover:bg-[#111] hover:text-white px-2 rounded-lg"
          // {!isChanged ? 
          //   "h-[40px] items-center text-[#113f67] gap-2 cursor-pointer flex w-full hover:bg-[#5585b5] hover:text-white px-2 rounded-lg" 
          //   :
          //   "h-[40px] gap-2 items-center cursor-pointer flex w-full text-white px-2 rounded-lg max-[450px]:rounded-none"
          // } 
          onClick={handleChange}>
            <div className="flex items-center max-sm:text-[19px] max-[450px]:mx-auto  max-[450px]:relative">
             <ion-icon name="mail-outline"></ion-icon>
             <div className="absolute min-[451px]:hidden bottom-2 -right-3">
             <p className="text-[14px]" >{jsonData.length}</p>
             </div>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between max-[450px]:hidden">
                <p className="text-[16px] max-sm:text-[15px] ">Inbox</p>
                <p className="text-[16px] max-sm:text-[15px]" >{jsonData.length}</p>
              </div>
            )}
          </div>
          <div id="text1"
           className="h-[40px] items-center text-[#111] gap-2 cursor-pointer flex w-full hover:bg-[#111] hover:text-white px-2 rounded-lg" 
           
           onClick={handleOpenDraft}>
            <div className="flex items-center max-sm:text-[19px] max-[450px]:mx-auto max-[450px]:relative">
              <ion-icon name="document-outline"></ion-icon>
              <div className="absolute min-[451px]:hidden bottom-2 -right-2">
             <p className="text-[14px] " >{draftEmails.length}</p>
             </div>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between max-[450px]:hidden">
                <p className="text-[16px] max-sm:text-[15px]">Drafts</p>
                <p className="text-[16px] max-sm:text-[15px]">
                 {draftEmails.length}
                </p>
              </div>
            )}
          </div>
          <div id="text1" className="h-[40px] items-center text-[#111] gap-2 cursor-pointer flex w-full hover:bg-[#111] hover:text-white px-2 rounded-lg" 
        
          onClick={handleOpenSent}
          >
            <div className="flex items-center max-sm:text-[19px] max-[450px]:mx-auto max-[450px]:relative">
              <ion-icon name="paper-plane-outline"></ion-icon>
              <div className="absolute min-[451px]:hidden bottom-2 -right-2">
             <p className="text-[14px]" >{sentEmails.length}</p>
             </div>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between max-[450px]:hidden">
                <p className="text-[16px] max-sm:text-[15px]">Sent</p>
                <p className="text-[16px] max-sm:text-[15px]">
                            {sentEmails.length}
                </p>
              </div>
            )}
          </div>
          <div id="text1"
          className="h-[40px] items-center text-[#111] gap-2 cursor-pointer flex w-full hover:bg-[#111] hover:text-white px-2 rounded-lg" 
          
          onClick={handleOpenTrash}
          >
            <div className="flex items-center max-sm:text-[19px] max-[450px]:mx-auto max-[450px]:relative">
              <ion-icon name="trash-outline"></ion-icon>
              <div className="absolute min-[451px]:hidden bottom-2 -right-2">
             <p className="text-[14px]" >{trashEmails.length}</p>
             </div>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between max-[450px]:hidden">
                <p className="text-[16px] max-sm:text-[15px]">Trash</p>
                <p className="text-[16px] max-sm:text-[15px]">
                            {trashEmails.length}
                </p>
              </div>
            )}
          </div>
          <div 
          id="text1" className="h-[40px] items-center gap-2 cursor-pointer flex w-full text-[#111] hover:bg-[#111] hover:text-white px-2 rounded-lg" 
          onClick={handleOpenArchive}
          >
            <div className="flex items-center max-sm:text-[19px] max-[450px]:mx-auto max-[450px]:relative">
              <ion-icon name="archive-outline"></ion-icon>
              <div className="absolute min-[451px]:hidden bottom-2 -right-2">
             <p className="text-[14px] " >{archiveEmails.length}</p>
             </div>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between max-[450px]:hidden">
                <p className="text-[16px] max-sm:text-[15px]">Archive</p>
                <p className="text-[16px] max-sm:text-[15px]">
                            {archiveEmails.length}
                        </p>
              </div>
            )}
          </div>
        </div>
       {openSidebar && 
  <Compose/>     
       }
       <ColorPalletes/>
      </div>
    </div>
  );
};

export default Sidebar;
