import React from "react";
import NoteContext from "./noteContext";
import { INBOX_DATA } from "../../constants/Inbox";

const NoteState = (props) => {
  return (
    <NoteContext.Provider value={INBOX_DATA}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
