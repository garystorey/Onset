import "./App.css";
import { Onset, Posts } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onset />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
