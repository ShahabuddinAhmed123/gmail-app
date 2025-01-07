import "./App.css";
import Header from "./components/Header";
import InboxProvider from "./context/InboxContent.js";
import {ReadEmailsProvider}  from "./context/note/ReadEmailsProvider.jsx"
import { SentProvider } from "./context/note/SentContext.jsx";

function App() {
  return (
    <InboxProvider>
    <SentProvider>
      <ReadEmailsProvider>
      <Header />
      </ReadEmailsProvider>
    </SentProvider>
    </InboxProvider>
  );
}

export default App;
