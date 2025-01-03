import "./App.css";
import Header from "./components/Header";
import NoteState from "./context/note/NoteState.jsx";

function App() {
  return (
    <NoteState>
      <div className="App">
        <Header />
      </div>
    </NoteState>
  );
}

export default App;
