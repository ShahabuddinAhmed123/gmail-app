import React, { useState, useContext } from "react";
import logo from "../assets/Icon.png";
import { SentContext } from "../context/note/SentContext";

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

  return (
    <div
      className={`${openSidebar ? " h-full bg-white flex gap-0 border-r border-[#adadad] max-[720px]:w-[40%]" : "w-[56px] h-full bg-white flex gap-0 border-r border-[#adadad]"}`}
    >
      <div className="w-full h-full flex flex-col">
        <div className="border-b border-[#adadad] h-[54px] flex justify-center items-center ">
          <div className="flex items-center gap-4 w-[265px] h-[46px] px-3 mx-2 border border-[#adadad] rounded-lg ">
            <div className="w-[25px]" onClick={() => handleOpen()}>
              <img src={logo} alt="" />
            </div>
            {openSidebar && <h1 className="font-semibold">Stellar Mail</h1>}
          </div>
        </div>
        <div className="w-full h-auto px-2 flex flex-col border-b gap-2 pt-3 text-[20px]  ">
          <div className=
          {!isChanged ? 
            "h-[40px] items-center text-black gap-2 cursor-pointer flex w-full hover:bg-black hover:text-white px-2 rounded-lg" 
            :
            "h-[40px] gap-2 items-center cursor-pointer flex w-full  bg-black text-white px-2 rounded-lg" 
          } 
          onClick={handleChange}>
            <div className="flex items-center">
             <ion-icon name="mail-outline"></ion-icon>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between">
                <p className="text-[16px]">Inbox</p>
                <p className="text-[16px]">10</p>
              </div>
            )}
          </div>
          <div
           className=
           {!
            openDraft ? 
            "h-[40px] items-center text-black gap-2 cursor-pointer flex w-full hover:bg-black hover:text-white px-2 rounded-lg" 
            :
            "h-[40px] gap-2 items-center cursor-pointer flex w-full  bg-black text-white px-2 rounded-lg" 
          } 
           onClick={handleOpenDraft}>
            <div className="flex items-center">
              <ion-icon name="document-outline"></ion-icon>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between">
                <p className="text-[16px]">Drafts</p>
                <p className="text-[16px]">
                            3
                        </p>
              </div>
            )}
          </div>
          <div className=
          {!openSent ? 
            "h-[40px] items-center text-black gap-2 cursor-pointer flex w-full hover:bg-black hover:text-white px-2 rounded-lg" 
            :
            "h-[40px] gap-2 items-center cursor-pointer flex w-full  bg-black text-white px-2 rounded-lg" 
          } 
          onClick={handleOpenSent}
          >
            <div className="flex items-center">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between">
                <p className="text-[16px]">Sent</p>
                <p className="text-[16px]">
                            {sentEmails.length}
                        </p>
              </div>
            )}
          </div>
          <div
          className=
          {!openTrash ? 
            "h-[40px] items-center text-black gap-2 cursor-pointer flex w-full hover:bg-black hover:text-white px-2 rounded-lg" 
            :
            "h-[40px] gap-2 items-center cursor-pointer flex w-full  bg-black text-white px-2 rounded-lg" 
          } 
          onClick={handleOpenTrash}
          >
            <div className="flex items-center" onClick={() => handleOpen()}>
              <ion-icon name="trash-outline"></ion-icon>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between">
                <p className="text-[16px]">Trash</p>
                {/* <p className="text-[16px]">
                            0
                        </p> */}
              </div>
            )}
          </div>
          <div className=
          {!openArchive ? 
            "h-[40px] items-center text-black gap-2 cursor-pointer flex w-full hover:bg-black hover:text-white px-2 rounded-lg" 
            :
            "h-[40px] gap-2 items-center cursor-pointer flex w-full  bg-black text-white px-2 rounded-lg" 
          } 
          onClick={handleOpenArchive}
          >
            <div className="flex  items-center" onClick={() => handleOpen()}>
              <ion-icon name="archive-outline"></ion-icon>
            </div>
            {openSidebar && (
              <div className="flex w-full justify-between">
                <p className="text-[16px]">Archive</p>
                {/* <p className="text-[16px]">
                            
                        </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
