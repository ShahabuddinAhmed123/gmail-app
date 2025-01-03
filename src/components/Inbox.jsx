import { INBOX_DATA } from "../constants/Inbox";
import React, { useContext } from "react";
import { InboxContext } from "../context/InboxContent";

export default function Inbox() {
    const { selectedEmail, setSelectedEmail } = useContext(InboxContext);

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    return (
        <div className="w-[432px] flex flex-col items-center gap-4 h-[100vh]  border-r border-[#adadad]">
            <div className="flex items-center border-b border-[#adadad] py-2 w-[432px]  px-4 min-h-[54px] justify-between">
                <h1 className="text-[20px] font-semibold">Inbox</h1>
                <div className="bg-[#dadada] rounded-md w-[170px] flex items-center px-1 h-full">
                    <button className=" h-[30px] w-[80px] bg-white text-[15px] pt-1 text-black rounded-md">All mail</button>
                    <button className=" h-[30px] w-[80px] hover:bg-white text-stone-600 pt-1 hover:text-black text-[15px] rounded-md">Unread</button>
                </div>
            </div>
            <div className=" w-[94%] border border-[#adadad] min-h-[40px] gap-2 rounded-lg flex items-center px-2 text-[18px] text-stone-700">
                <ion-icon name="search-outline"></ion-icon>
                <input
                    className="w-full placeholder:text-[16px] placeholder:text-stone-600 outline-none text-[16px]"
                    placeholder="Search"
                    type="text" />
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
                        <p className="text-[14px] text-[#797878] max-h-[40px] overflow-hidden">{item.MailContent}..</p>
                        <div className="flex gap-1">
                            <button className="w-72px text-[14px] rounded-lg bg-black text-white p-1">Project</button>
                            <button className="w-72px text-[14px] p-1">Work</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedEmail && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg w-1/2">
                        <h1 className="font-semibold">{selectedEmail.Name}</h1>
                        <p>{selectedEmail.MailContent}</p>
                        <button onClick={() => setSelectedEmail(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}