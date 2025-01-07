import image1 from "../assets/Icon1.png";
import image2 from "../assets/Icon2.png";
import image3 from "../assets/Icon3.png";
import image4 from "../assets/Icon4.png";
import image5 from "../assets/Icon5.png";
import image6 from "../assets/Icon6.png";
import { useContext } from "react";

import { SentContext } from "../context/note/SentContext";
import { InboxContext } from "../context/InboxContent";

const SentMails = () => {

   const { selectedEmail } = useContext(InboxContext);
  
    const { sentEmails } = useContext(SentContext);

    return ( 
        <div className="w-[1200px] h-full border ">
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
              <h1>
              To: {selectedEmail.Name}
              </h1>
              <h1>
              Topic: {selectedEmail.Topic}
              </h1>
            </div>
          </div>
          <div className="text-[14px] text-[#7c7b7b] flex gap-1">
            {/* Topic:{selectedEmail.Topic} */}
          </div>
        </div>
        <div className="h-[] border-b border-[#adadad] p-5 pb-20 text-left">
         Reply: {sentEmails}
        </div>
  
      </div>
     );
}
 
export default SentMails;