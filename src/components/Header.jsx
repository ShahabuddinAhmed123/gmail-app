import { useState } from "react";
import Sidebar from "../elements/Sidebar";
import InboxAndDetails from "../combinedComponents/InboxAndDetails";
import DraftAndDetails from "../combinedComponents/DraftAndDetails";
import SentAndDetails from "../combinedComponents/SentAndDetails";
import TrashAndDetails from "../combinedComponents/TrashAndDetails";
import ArchiveAndDetails from "../combinedComponents/ArchiveAndDetails";
import mainImage from "../assets/Icon.png"

export default function Header() {

  const [isChanged, setIsChanged] = useState(false);
  const [openDraft, setOpenDraft] = useState(false);
  const [openSent, setOpenSent] = useState(false);
  const [openTrash, setOpenTrash] = useState(false)
  const [openArchive, setOpenArchive] = useState(false)
  const [open, setOpen] = useState(true)


  function handleChange(){
    setIsChanged(!isChanged)
    setOpenDraft(false)
    setOpenSent(false)
    setOpenTrash(false)
    setOpenArchive(false)
    setOpen(false)
  }
  function handleOpenDraft(){
    setOpenDraft(!openDraft)
    setIsChanged(false)
    setOpenSent(false)
    setOpenTrash(false)
    setOpenArchive(false)
    setOpen(false)
  }
  function handleOpenSent(){
    setOpenSent(!openSent)
    setOpenDraft(false)
    setIsChanged(false)
    setOpenTrash(false)
    setOpenArchive(false)
    setOpen(false)
  }
  function handleOpenTrash(){
    setOpenTrash(!openTrash)
    setOpenDraft(false)
    setIsChanged(false)
    setOpenSent(false)
    setOpenArchive(false)
    setOpen(false)
  }
  function handleOpenArchive(){
    setOpenArchive(!openArchive)
    setOpenDraft(false)
    setOpenTrash(false)
    setIsChanged(false)
    setOpenSent(false)
    setOpen(false)
  }

  return (
    <div className="w-screen h-screen bg-white flex">
      <Sidebar
      handleChange={handleChange}
      handleOpenDraft={handleOpenDraft}
      handleOpenSent = {handleOpenSent}
      handleOpenTrash = {handleOpenTrash}
      handleOpenArchive={handleOpenArchive}
      isChanged ={isChanged}
      openDraft={openDraft}
      openSent={openSent}
      openTrash={openTrash}
      openArchive={openArchive}
       />
      {open && <div 
       className="w-full relative bg-[#f3f3f3] h-full flex flex-col justify-center items-center">
        <img 
        id="StellarMail"
        className="w-[150px]"
        src={mainImage} alt="" />
        <h1 className="text-[30px] font-semibold text-stone-800">
        Stellar Mail
        </h1>
       </div>}
     {isChanged && <InboxAndDetails/>}
     {
      openDraft && <DraftAndDetails/>
     }
     {openSent && <SentAndDetails/>}
     {openTrash && <TrashAndDetails/>}
     {openArchive && <ArchiveAndDetails/>}
    </div>
  );
}
