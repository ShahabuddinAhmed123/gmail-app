import { useContext, useState } from "react";
import Sidebar from "../elements/Sidebar";
import mainImage from "../assets/Icon.png"
import Inbox from "./Inbox";
import { InboxContext } from "../context/InboxContent";
import Sent from "./Sent";
import Trash from "./Trash";
import Draft from "./Draft";
import Archive from "./Archive";

export default function Header() {

  const [isChanged, setIsChanged] = useState(false);
  const [openDraft, setOpenDraft] = useState(false);
  const [openSent, setOpenSent] = useState(false);
  const [openTrash, setOpenTrash] = useState(false)
  const [openArchive, setOpenArchive] = useState(false)
  const [open, setOpen] = useState(true)
  const [readEmails, setReadEmails] = useState(new Set());
  const {setSelectedEmail} = useContext(InboxContext)
  const [closeEmailModal, setCloseEmailModal] = useState(false);
      
      function handleCloseEmailModal(){
        setCloseEmailModal(!closeEmailModal)
      }

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
  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    setReadEmails((prev) => new Set(prev).add(email));
    setCloseEmailModal(!closeEmailModal);
  };

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
        className="w-[150px] max-[450px]:w-[100px]"
        src={mainImage} alt="" />
        <h1 className="text-[30px] font-semibold text-stone-800 max-[450px]:text-[25px] ">
        Stellar Mail
        </h1>
       </div>}
     {isChanged && <Inbox
     readEmails={readEmails}
     handleEmailClick={handleEmailClick}
     closeEmailModal= {closeEmailModal}
     handleCloseEmailModal={handleCloseEmailModal}
     setCloseEmailModal={setCloseEmailModal}
     />}
     {
      openDraft && <Draft/>
     }
     {openSent && <Sent/>}
     {openTrash && <Trash/>}
     {openArchive && <Archive/>}
    </div>
  );
}
