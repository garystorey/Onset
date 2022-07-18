import "./App.css";
import { Onset } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
