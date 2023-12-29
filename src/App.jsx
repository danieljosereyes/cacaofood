// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/cacaofood" element={<Main/>} />
        <Route path="/cacaofood/about" element={<About/>} />
      </Routes>

    // </BrowserRouter>
  );
}

export default App;
