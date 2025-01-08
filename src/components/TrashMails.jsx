import image1 from "../assets/Icon1.png";
import image2 from "../assets/Icon2.png";
import image3 from "../assets/Icon3.png";
import image4 from "../assets/Icon4.png";
import image5 from "../assets/Icon5.png";
import image6 from "../assets/Icon6.png";
import React, { useContext } from "react";
import { InboxContext } from "../context/InboxContent";



const TrashMails = () => {
    const { selectedTrash } = useContext(InboxContext); 

    if (!selectedTrash) {
      return (
        <div className="w-[60vw] max-[1200px]:hidden h-full flex items-center justify-center text-gray-500">
          <p>Select an email to view details.</p>
        </div>
      );
    }

    return ( 
        <div className="w-[1200px] h-full border">
        <div className="flex items-center border-b border-[#adadad] py-2 w-full px-4 min-h-[53px] justify-between">
          <div className="flex items-center cursor-pointer gap-6">
            <img className="h-[20px] w-[20px]" src={image1} alt="" />
            <img className="h-[20px] w-[20px]" src={image2} alt="" />
            <img className="h-[20px] w-[20px]" src={image3} alt="" />
            <div className="text-[#adadad]">|</div>
            <div className="text-[20px] pt-1">
              <ion-icon name="time-outline"></ion-icon>
            </div>
          </div>
          <div className="flex items-center cursor-pointer gap-6">
            <img className="h-[20px] w-[20px]" src={image4} alt="" />
            <img className="h-[20px] w-[20px]" src={image5} alt="" />
            <img className="h-[20px] w-[20px]" src={image6} alt="" />
            <div className="text-[#adadad]">|</div>
            <div className="mt-1 text-[17px]">
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="h-[95px] p-4 border-b-2 border-[#adadad] flex justify-between ">
          <div className="flex gap-4">
            <div className="w-11 h-11 bg-[#F4F4F5] rounded-full flex items-center justify-center text-[20px]">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="text-left">
               <h2 className="text-[15px] font-semibold">{selectedTrash.Name}</h2>
            <p className="text-[14px]">{selectedTrash.Topic}</p>
            <p className="text-[14px]">{selectedTrash.Email}</p>
            </div>
          </div>
          <div className="text-[14px] text-[#7c7b7b] flex gap-1">
          <p>{selectedTrash.Date}</p>, <p>{selectedTrash.Time}</p>
          </div>
        </div>
        <div className="h-[60%] border-b border-[#adadad] p-4 text-left">
        <h1>{selectedTrash.MailHeading}</h1>
        <p>{selectedTrash.MailContent}</p>
        <br />
        <p>{selectedTrash.MailContent2}</p>
        <br />
        <p>{selectedTrash.MailContent3}</p>
        <br />
        <br />
        <p>{selectedTrash.MailContent4}</p>
        </div>
  
        <div className="py-4 flex flex-col gap-6">
          <textarea
            placeholder="Reply"
            className="w-[97%] h-[80px] p-5 placeholder:text-[#333232] border-2 mx-auto"
          ></textarea>
          <div className="flex px-4 w-full justify-between items-center">
            <div className="cursor-pointer">Mute this thread</div>
            <button 
            type="submit"
            className="w-[58px] h-[33px] text-white bg-black rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
     );
}
 
export default TrashMails;