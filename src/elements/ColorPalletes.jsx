import React, { useState } from "react";
import useTheme from "../context/theme";
import { PALLETES } from "../constants/colorPallets";
import { MODES } from "../constants/modes";

export default function ColorPalletes () {
  const {  setTheme } = useTheme("light");
  
    const changeTheme = (theme) => {
      setTheme(theme); 
      setOpenGrid(!openGrid)
    };

  const [openGrid, setOpenGrid] = useState(false)
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
      <div className="flex flex-col gap-1 w-fit bg-[#b89d6b] p-2 rounded-lg">
      <div className="flex items-center gap-2 max-[600px]:flex-col max-[600px]:items-start">
      <h1 className="text-xl font-semibold max-[900px]:text-[18px] max-[900px]:font-medium">Themes</h1>
     <div className="grid grid-cols-3 h-fit cursor-pointer w-fit bg-[#b89d6b]  gap-2 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1">
      
      {PALLETES.map((theme) => (
        <div
        key={theme.name}
        onClick={() => changeTheme(theme.name)}
         className="w-[30px] rounded-full h-[30px] hover:scale-[1.03] overflow-hidden active:scale-[1]"
         >
        <div
        style={{
          width: theme.width,
          height: theme.height,
          backgroundColor: theme.backgroundColor1,
        }}
        ></div>
      </div>
      ))}
    </div>
      </div>
       <div className="flex items-center gap-5 max-[600px]:flex-col max-[600px]:gap-2 max-[600px]:items-start ">
        <h1 className="text-xl font-semibold max-[900px]:text-[18px] max-[900px]:font-medium max-[400px]:text-[16px]">Modes</h1>
        <div className="grid grid-cols-2 h-fit cursor-pointer w-fit bg-[#b89d6b]  gap-2 max-[400px]:grid-cols-1">
      
      {MODES.map((theme) => (
        <div
        key={theme.name}
        onClick={() => changeTheme(theme.name)}
         className="w-[30px] rounded-full h-[30px] hover:scale-[1.03] overflow-hidden active:scale-[1]"
         >
        <div
        style={{
          width: theme.width,
          height: theme.height,
          backgroundColor: theme.backgroundColor1,
        }}
        ></div>
      </div>
      ))}
    </div>
      </div>
      </div>
    }
    </div>
  );
};
