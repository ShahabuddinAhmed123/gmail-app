import React, { useContext, useState } from "react";
import { InboxContext } from "../context/InboxContent";
import { SentContext } from '../context/note/SentContext';

const MailDetail = ({ handleDelete, handelArchive }) => {
  const { selectedEmail } = useContext(InboxContext);
  const [email, setEmail] = useState("");
  const { sendEmail } = useContext(SentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      
      sendEmail({
        title: selectedEmail?.Topic || "No Subject", 
        email: selectedEmail?.Email || "Unknown Email", 
        content: email, 
        details: selectedEmail,
      });
      setEmail(""); 
    }
  };

  if (!selectedEmail) {
    return (
      <div className="w-[63vw] max-[1200px]:hidden h-full flex items-center justify-center bg-[#f1f8fd] text-[#111]" id="mainDiv">
        <p>Select an email to view details.</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-full border max-[1200px]:fixed text-[#111] bg-[#f1f8fd] max-[1200px]:hidden" id="mainDiv">
        <div className="flex items-center border-b border-[#adadad] py-2 w-full px-4 min-h-[53px] justify-between">
          <div className="flex items-center cursor-pointer gap-6" id="text">
            <div 
              className="text-[19px] mt-1 leading-none"
              onClick={() => handelArchive()}
            >
              <ion-icon name="archive-outline"></ion-icon>
            </div>
            <div className="text-[19px] mt-1 leading-none"
              onClick={() => handleDelete()}>
            <ion-icon name="trash-outline"></ion-icon>
            </div>
            <div className="">|</div>
            <div className="text-[20px] pt-1">
              <ion-icon name="time-outline"></ion-icon>
            </div>
          </div>
          <div className="flex items-center cursor-pointer gap-6">
          <div 
              className="text-[19px] mt-1 leading-none"
              onClick={() => handelArchive()}
            >
              <ion-icon name="return-up-back-outline"></ion-icon>
            </div>
            <div 
              className="text-[19px] mt-1 leading-none"
              onClick={() => handelArchive()}
            >
              <ion-icon name="return-up-forward-outline"></ion-icon>
            </div>
            <div className="">|</div>
            <div className="ml-4"></div>
          </div>
        </div>
        <div className="h-[95px] p-4 border-b-2 border-[#adadad] flex justify-between ">
          <div className="flex gap-4">
            <div className="w-11 h-11 bg-[#111] text-white rounded-full flex items-center justify-center text-[20px]" id="button">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="text-left">
              <h2 className="text-[15px] font-semibold">{selectedEmail.Name}</h2>
              <p className="text-[14px]">{selectedEmail.Topic}</p>
              <p className="text-[14px]">{selectedEmail.Email}</p>
            </div>
          </div>
          <div className="text-[14px] flex gap-1">
            <p>{selectedEmail.Date}</p>, <p>{selectedEmail.Time}</p>
          </div>
        </div>
        <div className="pb-20 max-[1440px]:pb-10 max-[1200px]:pb-6 max-[1200px]:text-[15px] border-b border-[#adadad] p-4 text-left">
          <h1>{selectedEmail.MailHeading}</h1>
          <p>{selectedEmail.MailContent}</p>
          <br />
          <p>{selectedEmail.MailContent2}</p>
          <br />
          <p>{selectedEmail.MailContent3}</p>
          <br />
          <br />
          <p>{selectedEmail.MailContent4}</p>
        </div>

        <div className="py-4 flex flex-col gap-6">
          <textarea
          id="inputs"
            value={email}
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`Reply ${selectedEmail.Name}...`}
            className="resize-none w-[97%] h-[10vh] outline-none rounded-lg max-[1440px]:h-[8vh] p-5 placeholder:text-[#111] border border-[#adadad] bg-transparent mx-auto"
          ></textarea>
          <div className="flex px-4 w-full justify-between items-center">
            <div className="cursor-pointer">Mute this thread</div>
            <button 
            id="button"
              onClick={handleSubmit}
              type="submit"
              className="w-[58px] h-[33px] bg-[#111] text-white hover:bg-stone-700 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailDetail;
