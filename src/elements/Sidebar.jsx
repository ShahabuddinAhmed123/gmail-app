import React from "react";
import logo from "../assets/gmail-logo.png"

const Sidebar = () => {
    return (  
        <div className="w-[288px] h-full bg-white flex gap-0 border-r border-[#adadad]">
            <div className="w-full h-full flex flex-col">
                <div className="border-b border-[#adadad] h-[54px] flex justify-center items-center ">
            <div className="flex items-center w-[265px] h-[46px] pr-[30px] border border-[#adadad] rounded-lg ">
                    <div className="text-[26px] p-3 mx-1 mb-[-5px] text-stone-600">
                    <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <img src={logo} alt="" />
                </div>
                </div>
                <div className="w-full h-auto px-2 flex flex-col border-b gap-2 pt-3 text-[20px]  ">
                    <div className="h-[40px] items-center cursor-pointer flex w-full justify-between bg-black text-white px-2 rounded-lg">
                        <div className="flex gap-2 items-center">
                        <ion-icon name="mail-outline"></ion-icon>
                        <p className="text-[16px]">Inbox</p>
                        </div>
                        <p className="text-[16px]">
                            10
                        </p>
                    </div>
                    <div className="h-[40px] items-center text-black cursor-pointer flex w-full justify-between hover:bg-black hover:text-white px-2 rounded-lg">
                        <div className="flex gap-2 items-center">
                        <ion-icon name="document-outline"></ion-icon>
                        <p className="text-[16px]">Drafts</p>
                        </div>
                        {/* <p className="text-[16px]">
                            9
                        </p> */}
                    </div>
                    <div className="h-[40px] items-center text-black cursor-pointer flex w-full justify-between hover:bg-black hover:text-white px-2 rounded-lg">
                        <div className="flex gap-2 items-center">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <p className="text-[16px]">Sent</p>
                        </div>
                        {/* <p className="text-[16px]">
                            0
                        </p> */}
                    </div>
                    <div className="h-[40px] items-center text-black cursor-pointer flex w-full justify-between hover:bg-black hover:text-white px-2 rounded-lg">
                        <div className="flex gap-2 items-center">
                        <ion-icon name="trash-outline"></ion-icon>
                        <p className="text-[16px]">Trash</p>
                        </div>
                        {/* <p className="text-[16px]">
                            0
                        </p> */}
                    </div>
                    <div className="h-[40px] items-center text-black cursor-pointer flex w-full justify-between hover:bg-black hover:text-white px-2 rounded-lg">
                        <div className="flex gap-2 items-center">
                        <ion-icon name="archive-outline"></ion-icon>
                        <p className="text-[16px]">Archive</p>
                        </div>
                        {/* <p className="text-[16px]">
                            
                        </p> */}
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;