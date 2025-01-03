import { INBOX_DATA } from "../constants/Inbox";
import React, { useContext } from "react";
import { InboxContext } from "../context/InboxContent";
export default function Inbox() {
  const { setSelectedEmail } = useContext(InboxContext);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="w-[432px] flex flex-col items-center gap-4 h-[100vh]  border-r border-[#adadad]">
      <div className="flex items-center border-b border-[#adadad] py-2 w-[432px]  px-4 min-h-[54px] justify-between">
        <h1 className="text-[20px] font-semibold">Inbox</h1>
        <div className="bg-[#dadada] rounded-md gap-1 w-[170px] flex items-center px-1 h-full">
          <button className=" h-[30px] w-[80px] bg-white text-[15px] pt-1 text-black rounded-md">
            All mail
          </button>
          <button className=" h-[30px] w-[80px] hover:bg-white text-stone-600 pt-1 hover:text-black text-[15px] rounded-md">
            Unread
          </button>
        </div>
      </div>
      <div className=" w-[94%] border border-[#adadad] min-h-[40px] gap-2 rounded-lg flex items-center px-2 text-[18px] text-stone-700">
        <ion-icon name="search-outline"></ion-icon>
        <input
          className="w-full placeholder:text-[16px] placeholder:text-stone-600 outline-none text-[16px]"
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="w-[94%] h-auto flex flex-col gap-[6px] pb-3 overflow-auto">
        {INBOX_DATA.map((item, index) => (
          <div
            key={index}
            className="w-full h-[148px] hover:bg-[#c9c9c9] cursor-pointer transition-all duration-300 border border-[#adadad] text-left rounded-lg py-2 px-3 flex flex-col gap-1"
            onClick={() => handleEmailClick(item)}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">{item.Name}</h1>
              <p className="text-[#969595] text-[14px]">{item.Time}</p>
            </div>
            <h3 className="text-[14px]">{item.Topic}</h3>
            <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">
              {item.MailContent}..
            </p>
            <div className="flex gap-1">
              <button className="w-72px text-[14px] rounded-lg bg-black text-white p-1">
                Project
              </button>
              <button className="w-72px text-[14px] p-1">Work</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* {selectedEmail && (
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
                            <h2 className="text-[15px] font-semibold">{selectedEmail.Name}</h2>
                            <p className="text-[14px]">{selectedEmail.Topic}</p>
                            <p className="text-[14px]">{selectedEmail.Email}</p>
                        </div>
                    </div>
                    <div className="text-[14px] text-[#7c7b7b] flex gap-1">
                        <p>{selectedEmail.Date}</p>, <p>{selectedEmail.Time}</p>
                    </div>
                </div>
                <div className="p-4 text-left">
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
            </div>
            )} */
