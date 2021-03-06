import "./App.css"
import { Onset } from "./pages"
import Posts from "./pages/posts/posts"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onset />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
