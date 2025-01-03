import image1 from "../assets/Icon1.png";
import image2 from "../assets/Icon2.png";
import image3 from "../assets/Icon3.png";
import image4 from "../assets/Icon4.png";
import image5 from "../assets/Icon5.png";
import image6 from "../assets/Icon6.png";
import React, {useContext} from "react";

import NoteContext from "../context/note/noteContext";

const Mail_detail = () => {

    const index = useContext(NoteContext)

  return (
    <div className="w-[63%] h-full border">
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
                <h2 className="text-[15px] font-semibold">{index}</h2>
                <p className="text-[14px]">Project Update</p>
                <p className="text-[14px]">alicesmith@example.com</p>
            </div>
        </div>
        <div className="text-[14px] text-[#7c7b7b] flex gap-1">
            <p>Mar 25 2025</p>
            , <p>1:15:00 PM</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Mail_detail;
