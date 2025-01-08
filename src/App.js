import "./App.css";
import Header from "./components/Header";
import InboxProvider from "./context/InboxContent.js";
import { DraftProvider } from "./context/note/DraftContext.jsx";
import {ReadEmailsProvider}  from "./context/note/ReadEmailsProvider.jsx"
import { SentProvider } from "./context/note/SentContext.jsx";

function App() {
  return (
    <InboxProvider>
    <SentProvider>
      <DraftProvider>
      <ReadEmailsProvider>
      <Header />
      </ReadEmailsProvider>
      </DraftProvider>
    </SentProvider>
    </InboxProvider>
  );
}

export default App;
