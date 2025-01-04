import "./App.css";
import Header from "./components/Header";
import SentContext, { CheckProvider } from "./context/note/SentContext.jsx"
import { SentProvider } from "./context/note/SentContext.jsx";
// import { CheckProvider } from "./context/note/SentContext.jsx";

function App() {
  return (
    <SentProvider>
      {/* <CheckProvider> */}
      <Header />
      {/* </CheckProvider> */}
    </SentProvider>
  );
}

export default App;
