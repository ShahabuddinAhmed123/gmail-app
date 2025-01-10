import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InboxProvider from "./context/InboxContent.js";
import { DraftProvider } from "./context/note/DraftContext.jsx";
import {ReadEmailsProvider}  from "./context/note/ReadEmailsProvider.jsx"
import { SentProvider } from "./context/note/SentContext.jsx";
import { ThemeProvider } from "./context/theme.js";

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode("light")
  }
  useEffect(() => {
    document.querySelector("html").classList.remove('dark', "light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <InboxProvider>
    <SentProvider>
      <DraftProvider>
      <ReadEmailsProvider>
      <Header />
      </ReadEmailsProvider>
      </DraftProvider>
    </SentProvider>
    </InboxProvider>
    </ThemeProvider>
  );
}

export default App;
