import "./App.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/sports" element={<Home />} />
          <Route path="/reel" element={<Home />} />
          <Route path="/travel" element={<Home />} />
          <Route path="/culture" element={<Home />} />
          <Route path="/fashion" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/search" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
