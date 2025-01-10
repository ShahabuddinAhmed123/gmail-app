import React, { useState } from "react";
import useTheme from "../context/theme";
import { PALLETES } from "../constants/colorPallets";

export default function ColorPalletes () {
  const { themeMode, setTheme } = useTheme("light");
  
    const changeTheme = (theme) => {
      setTheme(theme); 
      console.log(`Theme changed to: ${theme}`);
    };

  const [openGrid, setOpenGrid] = useState(false)
  function handleOpenGrid() {
    setOpenGrid(!openGrid)
  }

  return (
    <div className="flex absolute flex-col items-center left-1/2 transform translate-x-[-50%] justify-center ">
      <div className="text-[30px] leading-none cursor-pointer -mt-4 hover:mt-0 transition-all duration-300 z-50" onClick={() => handleOpenGrid()}>
      {!openGrid ? <ion-icon name="grid-outline"></ion-icon> : <ion-icon name="close-outline"></ion-icon>}
      </div>
    {openGrid && <div className="grid grid-cols-2 cursor-pointer w-[240px] gap-2" id="pallets">
      {PALLETES.map((theme) => (
        <div
        key={theme.name}
        onClick={() => changeTheme(theme.name)}
        style={{
          borderTopLeftRadius: theme.rounded,
          borderBottomRightRadius: theme.rounded,
          borderTopRightRadius:theme.rounded,
          borderBottomLeftRadius: theme.rounded
        }}
         className="grid grid-cols-2 w-[120px] h-[120px] hover:scale-[1.03] overflow-hidden shadow-md shadow-stone-700 active:scale-[1]"
         >
        <div
        style={{
          width: theme.width,
          height: theme.height,
          backgroundColor: theme.backgroundColor1,
        }}
        ></div>
        <div
        style={{
          width: theme.width,
          height: theme.height,
          backgroundColor:theme.backgroundColor2,
        }}
        ></div>
        <div 
        style={{
          width: theme.width,
          height: theme.height,
          backgroundColor: theme.backgroundColor3
        }}
        ></div>
        <div 
        style={{
          width: theme.width,
          height:theme.height,
          backgroundColor: theme.backgroundColor4
        }}
        ></div>
      </div>
      ))}
    </div>
    }
    </div>
  );
};
