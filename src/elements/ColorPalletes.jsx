import React, { useState } from "react";
import useTheme from "../context/theme";
import { PALLETES } from "../constants/colorPallets";
import { MODES } from "../constants/modes";

export default function ColorPalletes () {
  const {  setTheme } = useTheme("light");
  const [openGrid, setOpenGrid] = useState(false)

  
    const changeTheme = (theme) => {
      setTheme(theme); 
      setOpenGrid(!openGrid)
    };

  function handleOpenGrid() {
    setOpenGrid(!openGrid)
  }
  return (
    <div className="flex absolute flex-row right-2 top-1 transform translate-[-50%] justify-center z-50">
      <div className="text-[30px] mt-2 leading-none cursor-pointer transition-all duration-300 z-50 text-[#111]" onClick={() => handleOpenGrid()} id="text">
      {
      !openGrid 
      ? 
      <ion-icon name="contrast-outline"></ion-icon>
      :
      ""
      // <ion-icon name="chevron-back-outline"></ion-icon>
      }
      </div>
      {openGrid &&
      <div className="flex flex-col gap-4 w-fit bg-[#b89d6b] p-2 rounded-lg">
           <div className="flex items-center gap-5 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:items-start ">
        <div className="grid w-[256px] grid-cols-2 h-fit cursor-pointer bg-[#b89d6b] border-b-2 border-[#524949] pb-4 gap-2 max-[400px]:grid-cols-1 max-[600px]:w-[150px]">
      {MODES.map((theme) => (
        <div
        key={theme.name}
        onClick={() => changeTheme(theme.name)}
         className="w-full rounded-lg h-[40px] hover:scale-[1.03] overflow-hidden active:scale-[1]"
         >
        <div 
        className="flex h-[40px] items-center justify-center"
        style={{
          backgroundColor: theme.backgroundColor1,
        }}
        >
          <h1 
          style={{
            color: theme.color,
          }}
          className="text-[16px] max-[600px]:text-[12px] font-semibold">
          {theme.mainName}
          </h1>
        </div>
      </div>
      ))}
    </div>
      </div>

     <div className="grid w-[256px] grid-cols-2 h-fit cursor-pointer bg-[#b89d6b]  gap-2 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 max-[600px]:w-[150px]">
      
      {PALLETES.map((theme) => (
        <div
        key={theme.name}
        onClick={() => changeTheme(theme.name)}
         className="w-[100%] rounded-full h-[40px] hover:scale-[1.03] overflow-hidden active:scale-[1]"
         >
        <div
        style={{
          height: theme.height,
          backgroundColor: theme.backgroundColor1,
        }}
        ></div>
      </div>
      ))}
    </div>
      </div>
    }
    </div>
  );
};
